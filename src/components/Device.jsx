/**
 * A phone showing a real screenshot of the app.
 *
 * The screenshots already carry Android's own status bar and gesture
 * handle, so the frame is only the glass and bezel around them — no drawn
 * status bar to disagree with the real one.
 */
export function Device({ src, alt = "", className = "", style, eager = false }) {
  return (
    <div className={`device ${className}`} style={style}>
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
