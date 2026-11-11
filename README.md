# PgSphere-NR Web Frontend (`pgspherenr_web`)

Official modern web landing page and APK distribution portal for **PgSphere-NR** (the standalone Non-Root mod for Pokémon GO).

## Key Features

- **Direct Download & Checksum Verification**: One-click download button for `PgSphere-NR.apk` with automatic download trigger, direct file link, and SHA-256 verification hash.
- **Automated APK Sync**: Pre-build and manual sync script (`scripts/sync-apk.mjs`) automatically locates newly built APKs from `PgSphere-NR`, copies them into `public/downloads/PgSphere-NR.apk`, calculates file size and SHA-256, and updates metadata in `downloadData.ts`.
- **In-Game Simulator**: Interactive preview of the floating HUD overlay, IV calculations, auto-spin counters, and internal joystick navigation.
- **Device Compatibility Checker**: Pre-flight test checking non-root setup, ARM64-v8a architecture, Android 10-15 OS versions, and PTC/Google authentication.
- **Step-by-Step Installation Guide**: Clear walkthrough for installing without root or LSPosed.
- **Fully Responsive & Dark Cyber Aesthetic**: Built with React 19, Vite, Tailwind CSS v4, Lucide icons, and TypeScript.

## Quick Start

```bash
# Install dependencies
npm install

# Run sync script to pull latest APK from PgSphere-NR
npm run sync-apk

# Start local development server
npm run dev

# Build for production (automatically syncs latest APK)
npm run build
```

## Directory Structure

```
pgspherenr_web/
├── public/
│   ├── downloads/
│   │   └── PgSphere-NR.apk      # Standalone APK served for downloads
│   ├── favicon.svg              # Emerald/Cyan Non-Root branding favicon
│   └── icons.svg
├── scripts/
│   └── sync-apk.mjs             # Automatic APK synchronization & SHA256 calculator
├── src/
│   ├── components/              # Modular UI components
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── DownloadSection.tsx
│   │   ├── DownloadModal.tsx
│   │   ├── CompatibilityChecker.tsx
│   │   ├── InGameSimulator.tsx
│   │   ├── Features.tsx
│   │   ├── InstallGuide.tsx
│   │   ├── Faq.tsx
│   │   └── Footer.tsx
│   ├── data/
│   │   └── downloadData.ts      # Release metadata, changelog, and specs
│   ├── App.tsx
│   └── main.tsx
└── vite.config.ts
```

