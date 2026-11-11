# GitHub Release & APK Upload Guide (PgSphere-NR)

Ye guide step-by-step explain karta hai ki **PgSphere-NR Web** ka code GitHub par kaise push karna hai aur **191.5 MB ke large APK** ko **GitHub Releases** par kaise host karke website se connect karna hai.

---

## Background: Ye Step Kyu Zaroori Hai?

- **GitHub Limit**: GitHub normal repository commits mein **100 MB se badi file allow nahi karta**.
- **Apna APK**: `PgSphere-NR.apk` lagbhag **191.5 MB** ka hai, isliye isko `.gitignore` mein rakha gaya hai taaki code push block na ho.
- **Solution (GitHub Releases)**: GitHub Releases par **2 GB** tak ki file bilkul **FREE** aur **unlimited download bandwidth** ke sath host hoti hai.
- **Website URL**: Website mein download button already GitHub Release ke direct CDN link se connected hai:
  ```text
  https://github.com/vishu39/PgSphereRN_Web/releases/download/v1.0.0/PgSphere-NR.apk
  ```

---

## Step 1: Terminal Se Code Push Karein

Apne VS Code ya PowerShell terminal mein `pgspherenr_web` directory ke andar ye command run karein:

```powershell
git push origin main
```

*(Ye 1 se 2 seconds mein bina kisi error ke code GitHub par push kar dega kyunki large APK git tracking se alag ho chuka hai).*

---

## Step 2: GitHub Repository Kholein

Browser mein apna GitHub repository open karein:
👉 **[https://github.com/vishu39/PgSphereRN_Web](https://github.com/vishu39/PgSphereRN_Web)**

---

## Step 3: Naya Release Banayein (Create Release)

1. Repository page ke right-hand side mein **"Releases"** section dikhega.
2. **"Create a new release"** (ya **"Draft a new release"**) par click karein.
3. Form mein ye details bharein:
   - **Choose a tag**: Type karein `v1.0.0` aur click karein `Create new tag: v1.0.0 on publish`.
   - **Target**: `main` (default).
   - **Release title**: `PgSphere-NR v1.0.0 Official Release`
   - **Description**: 
     ```markdown
     ## PgSphere-NR v1.0.0 (Non-Root Edition)
     - Standalone Non-Root APK for Pokémon GO (0.435.2)
     - Zero root or LSPosed required
     - Built-in In-Game Floating HUD & IV Scanner
     - Auto-Spin PokéStops & Fast Catch assist
     - Built-in Joystick & Direct Location Engine
     ```

---

## Step 4: APK File Upload Karein

1. Description box ke niche **"Attach binaries by dropping them here or selecting them"** ka box hoga.
2. Apne computer ke file explorer se ye file drag & drop karke us box mein daal dein:
   ```text
   D:\Projects\pokemongo tools\pgspherenr_web\public\downloads\PgSphere-NR.apk
   ```
3. File upload complete hone ka wait karein (green checkmark aayega).
4. Niche green button **"Publish release"** par click kar dein.

---

## Step 5: Test Download

Publish hote hi aapka direct download link live ho jayega:
```text
https://github.com/vishu39/PgSphereRN_Web/releases/download/v1.0.0/PgSphere-NR.apk
```
Ab jab koi bhi user aapki website par **"Download Official APK"** par click karega, to GitHub ke CDN se high-speed par ye 191.5 MB ka APK automatically download hona shuru ho jayega!

---

## Future Updates (Jab naya APK build ho):

Jab bhi aap `PgSphere-NR` mein naya APK build karein:
1. `npm run sync-apk` run karein (ye version, SHA-256 hash aur size calculate karega).
2. GitHub par naya release tag (jaise `v1.0.1`) create karke naya APK upload kar dein!
