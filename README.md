# Ethio ANC

Ethio ANC is an antenatal care companion designed to run as a Progressive Web App and to be packaged as an Android APK using PWABuilder after publishing online.

## Files included

- `index.html` — main Ethio ANC application
- `manifest.json` — PWA install metadata for Android/browser installability
- `sw.js` — service worker for offline caching
- `offline.html` — fallback offline page
- `icons/` — app icons generated from the supplied Ethio ANC icon
- `.nojekyll` — prevents GitHub Pages from ignoring files unexpectedly

## GitHub Pages publishing steps

1. Create a new GitHub repository, for example `ethio-anc`.
2. Upload all files in this folder to the repository root.
3. Go to **Settings → Pages**.
4. Under **Build and deployment**, choose:
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/root`
5. Wait for GitHub Pages to publish the app.
6. Your public app URL will look like:

```text
https://YOUR-GITHUB-USERNAME.github.io/YOUR-REPOSITORY-NAME/
```

## Generate Android APK with PWABuilder

1. Open: https://www.pwabuilder.com/
2. Paste your GitHub Pages URL.
3. Let PWABuilder scan the PWA.
4. Fix any warnings shown by PWABuilder, if needed.
5. Choose **Package for Android**.
6. Download the generated Android package/APK/AAB.

## Important notes

- Keep `manifest.json`, `sw.js`, `offline.html`, and `icons/` in the same root folder as `index.html`.
- After changing the app, update `CACHE_NAME` inside `sw.js` so users receive the latest version.
- GitHub Pages uses HTTPS, which is required for service workers and installable PWAs.
- Test the app using Chrome/Edge DevTools → Application → Manifest and Service Workers.

## Developer

Developed by Dr. Tamiru Abera, Internal Medicine Resident, Ambo University Referral Hospital.
