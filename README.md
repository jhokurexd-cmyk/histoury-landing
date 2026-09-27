# Histoury — landing page

The public page people land on to download the Histoury Android app. One
scrolling document: a hero with real app screens, "how it works" as four
steps beside a pinned phone, a feature grid, photographs of Intramuros, the
install guide, FAQ and a closing call to action. The Privacy Policy, Terms of
Use and Cookie Policy render in place of the sections at `#privacy-policy`,
`#terms-of-use` and `#cookie-policy`.

Same stack as `histoury-admin` — React 19, Vite, plain CSS, no UI framework —
minus Firebase and React Router. Nothing on this page authenticates, and every
nav link is an in-page anchor, so neither dependency would earn its bytes.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # -> dist/
npm run preview  # serve dist/ locally
npm run lint
```

## Cutting a release

Everything about the current build lives in [`src/config/download.js`](src/config/download.js).
Nothing else in the project hardcodes a version, a size or a URL.

The APK is hosted as a **GitHub Release asset**, not in this repo or the
deploy: `*.apk` is git-ignored, so Vercel never has the file.

1. Build the signed release APK in Android Studio (Build → Generate Signed
   App Bundle or APK, with the release keystore) and bump `versionCode` /
   `versionName` in the app's `build.gradle.kts` first.
2. Rename it `histoury-v<version>.apk`, e.g. `histoury-v1.1.0.apk`.
3. On GitHub: Releases → Draft a new release, tag `v<version>`, attach the
   APK, publish. The repo must be public, or visitors get a 404.
4. In `RELEASE`, update `version`, `released`, `url` (the new tag and file
   name), `size`, and `sha256`:

   ```powershell
   certutil -hashfile histoury-v1.1.0.apk SHA256
   ```

5. Commit and push; Vercel rebuilds. Check the download button fetches the
   real file.

To serve the APK from this site instead, put it in `public/downloads/` and
set `url` to `/downloads/histoury-<version>.apk`. `vite.config.js` then
measures its size and SHA-256 itself, and fails the build if the file is
missing, but only where the file exists, so not on Vercel.

## Styles and images

Two stylesheets, imported in this order by `src/main.jsx`:

- [`src/styles/shared.css`](src/styles/shared.css) — tokens, base reset,
  button primitives and the appearance switcher, copied verbatim from
  `histoury-admin/src/index.css`, which takes its palette from the Android
  app's `theme/Color.kt`. Re-copy it when the panel's tokens change rather
  than editing values here.
- [`src/styles/landing.css`](src/styles/landing.css) — the page. Every
  section follows the visitor's light/dark choice; the closing call to
  action is a coral panel in both. The brand coral is the app's #FB4D4C. Headlines
  are Plus Jakarta Sans (the app's display face) with Instrument Serif italic
  accents, loaded in `index.html`.

Images:

- `src/assets/app/` — real screenshots of the app, converted to WebP. None of
  them shows an account's name or email, a test site, or a location outside
  Intramuros; keep it that way when adding more.
- `src/assets/photos/` — public-domain (CC0) photographs from Wikimedia
  Commons, the same set the app's Places use. Sources and licences are in
  `histoury_functions/scripts/place-photos/manifest.json`.

`src/components/Icon.jsx`, `src/components/ThemeToggle.jsx` and
`src/context/ThemeContext.jsx` are copies of the panel's. The deliberate
edits: the theme's `localStorage` key is namespaced per site, and `Icon.jsx`
adds an `arrow-left` icon.

## Before it goes live

- **Check the release link actually serves the APK** after each release:
  a private repo or a mistyped tag or file name gives visitors a 404.
- `public/og-cover.png` is referenced by the Open Graph tags in `index.html`
  but not yet committed — social previews will 404 until it is added.
- Copy in the FAQ assumes no Play Store listing. If that changes, the "Is it on
  the Play Store?" answer and the install section both need revisiting.
