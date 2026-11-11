import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const webRoot = path.resolve(__dirname, '..');
const workspaceRoot = path.resolve(webRoot, '..');
const pgSphereNrRoot = path.join(workspaceRoot, 'PgSphere-NR');
const pgSphereRoot = path.join(workspaceRoot, 'PgSphere');

const targetApkPath = path.join(webRoot, 'public', 'downloads', 'PgSphere-NR.apk');
const GITHUB_REPO = 'vishu39/PgSphereRN_Web';

// Candidate search locations for PgSphere-NR APKs (in order of priority)
const searchDirs = [
  path.join(pgSphereNrRoot, 'release-apk'),
  path.join(pgSphereNrRoot, 'build', 'outputs', 'apk', 'release'),
  path.join(pgSphereNrRoot, 'build', 'outputs', 'apk'),
  path.join(pgSphereNrRoot, 'build'),
  path.join(pgSphereNrRoot, 'dist'),
  pgSphereNrRoot,
  path.join(pgSphereNrRoot, 'game-apk'),
  path.join(pgSphereRoot, 'release-apk') // fallback if build not yet output to NR
];

let sourceApkPath = null;
let releaseDateStr = null;
let detectedGameVersion = '0.435.2';

function findApksRecursive(dir, maxDepth = 3, currentDepth = 0) {
  if (!fs.existsSync(dir) || currentDepth > maxDepth) return [];
  let apks = [];
  try {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isFile() && entry.name.endsWith('.apk')) {
        apks.push(fullPath);
      } else if (entry.isDirectory() && entry.name !== 'node_modules' && entry.name !== '.git') {
        apks.push(...findApksRecursive(fullPath, maxDepth, currentDepth + 1));
      }
    }
  } catch {
    // Ignore read errors
  }
  return apks;
}

for (const dir of searchDirs) {
  const apks = findApksRecursive(dir)
    .sort((a, b) => {
      // Prioritize files named 'PgSphere-NR.apk' or 'base.apk'
      const aName = path.basename(a).toLowerCase();
      const bName = path.basename(b).toLowerCase();
      const aPriority = aName === 'pgsphere-nr.apk' ? 2 : (aName.includes('release') || aName === 'base.apk' ? 1 : 0);
      const bPriority = bName === 'pgsphere-nr.apk' ? 2 : (bName.includes('release') || bName === 'base.apk' ? 1 : 0);
      if (aPriority !== bPriority) return bPriority - aPriority;

      // Otherwise sort by newest modified
      return fs.statSync(b).mtimeMs - fs.statSync(a).mtimeMs;
    });

  if (apks.length > 0) {
    sourceApkPath = apks[0];
    const fileName = path.basename(sourceApkPath);
    console.log(`Found candidate release APK in ${dir}: ${fileName}`);

    // Try extracting date or version
    const dateMatch = fileName.match(/(\d{4})-(\d{2})-(\d{2})/);
    if (dateMatch) {
      const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      const mIdx = parseInt(dateMatch[2], 10) - 1;
      releaseDateStr = `${months[mIdx]} ${parseInt(dateMatch[3], 10)}, ${dateMatch[1]}`;
    }

    const verMatch = sourceApkPath.match(/(\d+\.\d+\.\d+)/);
    if (verMatch) {
      detectedGameVersion = verMatch[1];
    }
    break;
  }
}

if (!sourceApkPath && fs.existsSync(targetApkPath)) {
  sourceApkPath = targetApkPath;
}

if (!sourceApkPath) {
  console.log('No local APK found to sync (CI/Vercel cloud environment). Using pre-configured downloadData.ts metadata.');
  process.exit(0);
}

// Ensure target folder exists
fs.mkdirSync(path.dirname(targetApkPath), { recursive: true });

// Copy APK if source is different
if (path.resolve(sourceApkPath) !== path.resolve(targetApkPath)) {
  console.log(`Copying ${sourceApkPath} -> ${targetApkPath}`);
  fs.copyFileSync(sourceApkPath, targetApkPath);
}

// Calculate metadata
const stats = fs.statSync(targetApkPath);
const sizeBytes = stats.size;
const sizeMB = (sizeBytes / (1024 * 1024)).toFixed(1) + ' MB';

const fileBuffer = fs.readFileSync(targetApkPath);
const sha256 = crypto.createHash('sha256').update(fileBuffer).digest('hex').toUpperCase();

if (!releaseDateStr) {
  const d = stats.mtime;
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  releaseDateStr = `${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
}

const appVersion = '1.0.0';
const releaseTag = `v${appVersion}`;
const githubDownloadUrl = `https://github.com/${GITHUB_REPO}/releases/latest/download/PgSphere-NR.apk`;
const githubReleaseUrl = `https://github.com/${GITHUB_REPO}/releases/tag/${releaseTag}`;

console.log(`\nPgSphere-NR APK Info:`);
console.log(`  Source:     ${sourceApkPath}`);
console.log(`  Size:       ${sizeMB} (${sizeBytes} bytes)`);
console.log(`  SHA-256:    ${sha256}`);
console.log(`  Date:       ${releaseDateStr}`);
console.log(`  Version:    ${appVersion} (${releaseTag})`);
console.log(`  Target:     ${detectedGameVersion}`);
console.log(`  GitHub URL: ${githubDownloadUrl}`);

// Update downloadData.ts
const dataFilePath = path.join(webRoot, 'src', 'data', 'downloadData.ts');
if (fs.existsSync(dataFilePath)) {
  let content = fs.readFileSync(dataFilePath, 'utf8');

  content = content.replace(/fileSize:\s*"[^"]*"/, `fileSize: "${sizeMB}"`);
  content = content.replace(/sha256:\s*"[^"]*"/, `sha256: "${sha256}"`);
  content = content.replace(/date:\s*"[^"]*"/, `date: "${releaseDateStr}"`);
  content = content.replace(/version:\s*"[^"]*"/, `version: "${appVersion}"`);
  content = content.replace(/tag:\s*"[^"]*"/, `tag: "${releaseTag}"`);
  content = content.replace(/githubDownloadUrl:\s*"[^"]*"/, `githubDownloadUrl: "${githubDownloadUrl}"`);
  content = content.replace(/githubReleaseUrl:\s*"[^"]*"/, `githubReleaseUrl: "${githubReleaseUrl}"`);
  content = content.replace(/testedGameVersion:\s*"[^"]*"/, `testedGameVersion: "Pokémon GO ${detectedGameVersion}"`);

  fs.writeFileSync(dataFilePath, content, 'utf8');
  console.log(`\nSuccessfully updated ${dataFilePath}!`);
} else {
  console.warn(`Data file not yet present at ${dataFilePath}`);
}
