import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// Order matters: the shared tokens first, then the page, so the page can
// override them without !important.
import "./styles/shared.css";
import "./styles/landing.css";
import App from "./App.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>,
);
