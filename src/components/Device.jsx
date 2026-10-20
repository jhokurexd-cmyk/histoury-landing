/**
 * A phone showing a real screenshot of the app.
 *
 * The screenshots already carry Android's own status bar and gesture
 * handle, so the frame is only the glass and bezel around them — no drawn
 * status bar to disagree with the real one.
 */
export function Device({ src, alt = "", className = "", style, eager = false }) {
  const framed = /mockup-(history|home|itinerary|map|navigation|places|routing|arrival|visit-history|fort-capture)/.test(src);
  const artwork = src.includes("ar-showcase-artwork");
  const fortCapture = src.includes("mockup-fort-capture");
  return (
    <div className={`device${framed ? " device-preframed" : ""}${artwork ? " device-ar-artwork" : ""}${fortCapture ? " device-fort-capture" : ""} ${className}`} style={style}>
      <img
        src={src}
        alt={alt}
        width="420"
        height="934"
        loading={eager ? "eager" : "lazy"}
        decoding="async"
        draggable="false"
      />
    </div>
  );
}
