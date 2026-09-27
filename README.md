# Histoury — landing page

The public page people land on to download the Histoury Android app. One
scrolling document: a dark hero with real app screens, "how it works" as four
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

1. Drop the signed APK in `public/downloads/` (git-ignored — the build is not
   source), or host it elsewhere and use an absolute URL.
2. Update `RELEASE` — `version`, `size`, `released`, `url`.
3. Generate the checksum and paste it into `sha256`:

   ```powershell
   certutil -hashfile public/downloads/histoury-1.0.0.apk SHA256
   ```

   The checksum block on the install card stays hidden until this is a real
   value. A placeholder shown as a checksum is worse than none, because it
   invites someone to verify against a number that means nothing.

4. `npm run build` and deploy `dist/`.

## Styles and images

Two stylesheets, imported in this order by `src/main.jsx`:

- [`src/styles/shared.css`](src/styles/shared.css) — tokens, base reset,
  button primitives and the appearance switcher, copied verbatim from
  `histoury-admin/src/index.css`, which takes its palette from the Android
  app's `theme/Color.kt`. Re-copy it when the panel's tokens change rather
  than editing values here.
- [`src/styles/landing.css`](src/styles/landing.css) — the page. `.stage`
  sections (hero, the pinned phone, the closing CTA) are warm black in both
  themes; everything else follows the visitor's light/dark choice. Headlines
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

- **Put the APK in place before deploying, and check the link actually serves
  it.** No APK is committed, so the download URL currently has nothing behind
  it. Hosts that fall back to `index.html` for unmatched paths — `vite preview`
  does this, and so does Netlify/Vercel with a catch-all rewrite — answer `200`
  with the HTML page rather than `404`, and the visitor gets a 1 KB file named
  `histoury-1.0.0.apk` that Android refuses to install. Either exclude
  `/downloads/*` from the rewrite or host the APK off-site.
- `public/og-cover.png` is referenced by the Open Graph tags in `index.html`
  but not yet committed — social previews will 404 until it is added.
- Copy in the FAQ assumes no Play Store listing. If that changes, the "Is it on
  the Play Store?" answer and the install section both need revisiting.
