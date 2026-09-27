import { createHash } from "node:crypto";
import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { RELEASE } from "./src/config/download.js";

// Deliberately plainer than the admin panel's config. The landing page is a
// single static document: no Firebase, so no storage proxy, and no auth, so
// nothing here needs a dev-time same-origin workaround.
//
// The one thing it does do: read the APK the download button points at, so
// the size and SHA-256 shown on the page are measured from the real file,
// never typed by hand. A production build without the file FAILS — shipping
// a page whose main button is a 404 is worse than not deploying.

/** { bytes, sha256 } of the same-origin APK, or null if it isn't there. */
function readApkMeta() {
  if (/^https?:\/\//.test(RELEASE.url)) return null; // hosted elsewhere
  const file = resolve(__dirname, "public", RELEASE.url.replace(/^\//, ""));
  if (!existsSync(file)) return null;
  const data = readFileSync(file);
  return { bytes: data.length, sha256: createHash("sha256").update(data).digest("hex") };
}

export default defineConfig(({ command }) => {
  const apk = readApkMeta();

  if (!apk && !/^https?:\/\//.test(RELEASE.url)) {
    const message = `The APK the download button links to is missing: public${RELEASE.url}`;
    if (command === "build") {
      throw new Error(`${message}\nBuild the release APK and copy it there before building the landing page.`);
    }
    console.warn(`\n⚠ ${message} (the Download button will 404 until it's added)\n`);
  }

  return {
    plugins: [react()],
    define: {
      __APK_META__: JSON.stringify(apk),
    },
  };
});
