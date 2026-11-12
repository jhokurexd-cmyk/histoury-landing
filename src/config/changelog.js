/**
 * Patch notes: one entry per released version, newest first.
 *
 * To publish a new entry, add it at the TOP of CHANGELOG. An entry only shows
 * on the site once RELEASE.version in download.js reaches it, so the notes for
 * a build go live in the same commit that points the download at that build.
 *
 * Write for visitors, not developers: what a person using the app will notice.
 * `type` is one of "new", "improved", "fixed".
 */
export const CHANGE_TYPES = {
  new: "Added",
  improved: "Improved",
  fixed: "Fixed",
};

export const CHANGELOG = [
  {
    version: "1.0.3",
    date: "2026-11-12",
    changes: [
      { type: "new", text: "The app now tells you when a new version is available" },
      { type: "fixed", text: "The app no longer closes straight after opening on some phones" },
    ],
  },
  {
    version: "1.0.2",
    date: "2026-11-12",
    changes: [
      { type: "improved", text: "Smaller download: about 48 MB, down from 82 MB" },
      { type: "improved", text: "Google accounts confirm with Google before the account is deleted" },
      { type: "improved", text: "Deleting your account also removes your AR photos from the phone" },
      { type: "improved", text: "Updated Privacy Policy, with a one-time notice for existing accounts" },
      { type: "fixed", text: "The account deleted message now shows after deleting your account" },
      { type: "fixed", text: "Minor bug fixes and performance improvements" },
    ],
  },
  {
    version: "1.0.1",
    date: "2026-11-12",
    changes: [
      { type: "new", text: "Take a profile photo with the camera" },
      { type: "new", text: "Goodbye screen before deleting your account" },
      { type: "improved", text: "Terms and Privacy Policy must be read to the end before agreeing" },
      { type: "improved", text: "Redesigned welcome tour" },
      { type: "improved", text: "Faster, easier Support and feedback screen" },
      { type: "improved", text: "Clearer suspension notice and appeal" },
      { type: "improved", text: "Reviews of a deleted account now show as Deleted user" },
      { type: "fixed", text: "Google sign-in now shows a message when offline" },
      { type: "fixed", text: "Feedback form no longer shows a leftover star rating error" },
      { type: "fixed", text: "Updated support email to support@explorehistoury.com" },
      { type: "fixed", text: "Minor bug fixes and performance improvements" },
    ],
  },
  {
    version: "1.0.0",
    date: "2026-10-20",
    changes: [
      { type: "new", text: "Interactive map of Intramuros historic sites" },
      { type: "new", text: "Site photos, stories and timelines" },
      { type: "new", text: "AR scenes for supported devices" },
      { type: "new", text: "Itinerary planner and navigation" },
      { type: "new", text: "Visit history" },
      { type: "new", text: "Site ratings and reviews" },
      { type: "new", text: "Offline access to opened content" },
      { type: "new", text: "Light and dark themes" },
    ],
  },
];

/** "1.0.10" > "1.0.9": compare numerically, part by part. */
export function compareVersions(a, b) {
  const pa = String(a).split(".").map(Number);
  const pb = String(b).split(".").map(Number);
  for (let i = 0; i < Math.max(pa.length, pb.length); i += 1) {
    const diff = (pa[i] || 0) - (pb[i] || 0);
    if (diff !== 0) return diff;
  }
  return 0;
}
