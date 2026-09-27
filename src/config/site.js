/**
 * Contact details shown in the footer.
 *
 * A social icon only renders once its `url` is filled in — an icon that
 * links nowhere reads as a broken page, so empty entries are skipped.
 */
export const CONTACT = {
  email: "histoury.capstone@gmail.com",
  social: [
    { name: "Facebook", icon: "facebook", url: "" },
    { name: "Instagram", icon: "instagram", url: "" },
    { name: "YouTube", icon: "youtube", url: "" },
  ],
};

// In reading order. Each href is a section id on the page, and the header
// underlines whichever one is on screen.
export const NAV_LINKS = [
  { href: "#how", label: "How it works" },
  { href: "#features", label: "Features" },
  { href: "#about", label: "Intramuros" },
  { href: "#install", label: "Install" },
  { href: "#faq", label: "FAQ" },
];

// Footer only. The legal pages render in place of the landing sections
// (see App.jsx), so these are hash links like everything else.
export const LEGAL_LINKS = [
  { href: "#privacy-policy", label: "Privacy Policy" },
  { href: "#terms-of-use", label: "Terms of Use" },
  { href: "#cookie-policy", label: "Cookie Policy" },
];
