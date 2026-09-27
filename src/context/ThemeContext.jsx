import { createContext, useContext, useEffect, useMemo, useState } from "react";

/**
 * Appearance control for the landing page.
 *
 * Deliberately mirrors the Android app's `ThemePreference`: the same three
 * options, the same default, the same wording. Someone who switches their
 * phone to dark and then opens this page should not have to learn a
 * different model for the same setting.
 *
 * Three options rather than a switch, because "match system" is a real
 * answer and not the absence of one. A binary toggle forces a side and then
 * stops tracking the machine's own day/night setting.
 */

const STORAGE_KEY = "histoury-landing-theme";

const ThemeContext = createContext(null);

export const THEME_MODES = [
  // A monitor for "match system": it is the only one of the three that
  // names a device rather than an appearance, which is exactly the
  // distinction being offered.
  { value: "system", label: "Match system", icon: "monitor" },
  { value: "light", label: "Light", icon: "sun" },
  { value: "dark", label: "Dark", icon: "moon" },
];

function readStored() {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return ["system", "light", "dark"].includes(stored) ? stored : "system";
  } catch {
    // Private browsing, or storage disabled by policy. Not worth failing the
    // whole panel over an appearance preference.
    return "system";
  }
}

export function ThemeProvider({ children }) {
  const [mode, setMode] = useState(readStored);
  const [systemDark, setSystemDark] = useState(
    () => window.matchMedia?.("(prefers-color-scheme: dark)").matches ?? false,
  );

  // Kept live rather than read once. On "match system" the panel should
  // follow the OS switching itself at sunset, which is the main reason
  // anyone picks that option.
  useEffect(() => {
    const query = window.matchMedia?.("(prefers-color-scheme: dark)");
    if (!query) return undefined;

    const onChange = (event) => setSystemDark(event.matches);
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  const isDark = mode === "dark" || (mode === "system" && systemDark);

  useEffect(() => {
    // A data attribute rather than a class: it reads unambiguously in
    // devtools, and the CSS selector [data-theme="dark"] states what it
    // matches instead of relying on a class name's meaning.
    document.documentElement.dataset.theme = isDark ? "dark" : "light";

    // Keeps the browser's own chrome — scrollbars, form controls, the
    // address bar on mobile — in step with the page.
    document.documentElement.style.colorScheme = isDark ? "dark" : "light";
  }, [isDark]);

  const value = useMemo(
    () => ({
      mode,
      isDark,
      setMode: (next) => {
        setMode(next);
        try {
          window.localStorage.setItem(STORAGE_KEY, next);
        } catch {
          // Preference just won't survive a reload. Harmless.
        }
      },
    }),
    [mode, isDark],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used inside a ThemeProvider");
  }
  return context;
}
