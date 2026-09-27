/**
 * Everything about the current release, in one place.
 *
 * The page never hardcodes a version or a URL anywhere else, so cutting a
 * new build is an edit to this file and nothing more. `url` can point at a
 * file served from `public/downloads/` (same origin, simplest) or at an
 * absolute URL — a Firebase Storage download link, a GitHub release asset —
 * if the APK is hosted off the site.
 */
// Measured from the real APK at build time by vite.config.js (size in bytes
// and SHA-256), or null when the APK is hosted elsewhere or not added yet.
// `typeof` keeps this file importable from vite.config.js itself, where the
// build-time constant doesn't exist.
// eslint-disable-next-line no-undef
const APK = typeof __APK_META__ !== "undefined" ? __APK_META__ : null;

function formatSize(bytes) {
  const mb = bytes / (1024 * 1024);
  return `${mb >= 10 ? Math.round(mb) : mb.toFixed(1)} MB`;
}

export const RELEASE = {
  // Must match versionName in the app's build.gradle.kts.
  version: "1.0.0",
  // Shown next to the button so people know what they're about to pull over
  // mobile data before they tap it, not after. Taken from the file itself;
  // the fallback is only for an APK hosted off-site (set it by hand then).
  size: APK ? formatSize(APK.bytes) : "57 MB",
  // ISO date; formatted for display at the call site.
  released: "2026-09-28",
  // Hosted as a GitHub Release asset rather than in public/downloads/: the
  // APK is git-ignored, so Vercel never has the file, and a 57 MB binary
  // doesn't belong in every deploy anyway. The release tag must be
  // v<version> and the attached file must keep exactly this name.
  url: "https://github.com/jhokurexd-cmyk/histoury-landing/releases/download/v1.0.0/histoury-1.0.0.apk",
  // Published so a careful installer can verify the file they got is the
  // file that was built. Computed from the file at build time for a
  // same-origin APK; for this off-site one it is pasted from:
  //   certutil -hashfile histoury-1.0.0.apk SHA256   (Windows)
  //   shasum -a 256 histoury-1.0.0.apk               (macOS/Linux)
  sha256: APK ? APK.sha256 : "18a39a09fdf48980a9f9136e2b6016e73b4a55eeddd6bc65f53b14e5ed316b39",
};

/**
 * Minimums taken from the app's own build config and the AR entry check.
 * AR is listed as "optional" on purpose: the manifest marks the camera-AR
 * feature `required="false"`, so maps, site content and audio guides all
 * work on a phone without ARCore — the AR button is simply hidden.
 */
export const REQUIREMENTS = [
  { label: "Android 8.0 (Oreo) or newer", icon: "phone" },
  { label: "~120 MB free storage", icon: "cube" },
  { label: "ARCore-capable device for AR scenes (optional)", icon: "ar" },
  { label: "Location and camera permission", icon: "map-pin" },
];

export function formatReleaseDate(iso) {
  const date = new Date(`${iso}T00:00:00`);
  if (Number.isNaN(date.getTime())) return iso;
  return date.toLocaleDateString("en-PH", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
