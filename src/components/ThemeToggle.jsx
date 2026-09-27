import { useEffect, useRef, useState } from "react";

import { Icon } from "./Icon";
import { THEME_MODES, useTheme } from "../context/ThemeContext";

/**
 * Appearance switcher for the site header.
 *
 * The trigger shows what the panel currently *looks like* (sun or moon),
 * while the menu shows what has been *chosen* — including "Match system",
 * which has no icon of its own because it is not a third appearance, it is
 * a deferral to the machine. Conflating the two is why so many of these
 * controls leave people unsure whether they picked dark or the OS did.
 */
function ThemeToggle() {
  const { mode, isDark, setMode } = useTheme();
  const [open, setOpen] = useState(false);
  const wrapRef = useRef(null);

  useEffect(() => {
    if (!open) return undefined;

    const onPointerDown = (event) => {
      if (!wrapRef.current?.contains(event.target)) setOpen(false);
    };
    const onKeyDown = (event) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const current = THEME_MODES.find((m) => m.value === mode) ?? THEME_MODES[0];

  return (
    <div className="theme-toggle" ref={wrapRef}>
      <button
        type="button"
        className={`theme-toggle-btn${open ? " open" : ""}`}
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label={`Appearance: ${current.label}`}
        title={`Appearance: ${current.label}`}
      >
        <Icon name={isDark ? "moon" : "sun"} size={17} />
        {/* A caret, so the control reads as something that opens rather
            than as a switch that should have flipped on the first tap. */}
        <Icon name="chevron-down" size={12} className="theme-toggle-caret" />
      </button>

      {open && (
        <div className="theme-menu" role="menu">
          <div className="theme-menu-title">Appearance</div>

          {THEME_MODES.map((option) => (
            <button
              key={option.value}
              type="button"
              role="menuitemradio"
              aria-checked={mode === option.value}
              className={`theme-menu-item${mode === option.value ? " active" : ""}`}
              onClick={() => {
                setMode(option.value);
                setOpen(false);
              }}
            >
              <Icon name={option.icon} size={15} />
              <span className="theme-menu-label">{option.label}</span>
              {mode === option.value && <Icon name="check" size={14} />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default ThemeToggle;
