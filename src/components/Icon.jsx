// Small inline SVG icon set. Kept dependency-free so the project doesn't need
// a new package (e.g. lucide-react) installed to render the new UI.

const base = {
  width: 18,
  height: 18,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export function Icon({ name, size = 18, ...rest }) {
  const props = { ...base, width: size, height: size, ...rest };

  switch (name) {
    case "dashboard":
      return (
        <svg {...props}>
          <rect x="3" y="3" width="7" height="9" rx="1.5" />
          <rect x="14" y="3" width="7" height="5" rx="1.5" />
          <rect x="14" y="12" width="7" height="9" rx="1.5" />
          <rect x="3" y="16" width="7" height="5" rx="1.5" />
        </svg>
      );
    case "content":
      return (
        <svg {...props}>
          <path d="M6 3h9l5 5v13a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z" />
          <path d="M14 3v5h5" />
          <path d="M8 13h8M8 17h8M8 9h3" />
        </svg>
      );
    case "ar":
      return (
        <svg {...props}>
          <path d="m12 2 8.5 4.9v10.2L12 22l-8.5-4.9V6.9L12 2Z" />
          <path d="M12 2v20M3.5 6.9 12 12l8.5-5.1M3.5 17.1 12 12" />
        </svg>
      );
    case "geofence":
      return (
        <svg {...props}>
          <path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21Z" />
          <circle cx="12" cy="9.5" r="2.5" />
        </svg>
      );
    case "users":
      return (
        <svg {...props}>
          <circle cx="9" cy="8" r="3.5" />
          <path d="M2.5 20c0-3.6 2.9-6.5 6.5-6.5s6.5 2.9 6.5 6.5" />
          <circle cx="17" cy="8" r="2.8" />
          <path d="M21.5 20c0-2.9-1.9-5.3-4.5-6.1" />
        </svg>
      );
    case "lock":
      return (
        <svg {...props}>
          <rect x="4" y="10.5" width="16" height="10.5" rx="2.5" />
          <path d="M8 10.5V7.5a4 4 0 0 1 8 0v3" />
          <circle cx="12" cy="15.5" r="1.4" />
        </svg>
      );
    case "sun":
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="4.2" />
          <path d="M12 2v2.4M12 19.6V22M4.2 4.2l1.7 1.7M18.1 18.1l1.7 1.7M2 12h2.4M19.6 12H22M4.2 19.8l1.7-1.7M18.1 5.9l1.7-1.7" />
        </svg>
      );
    case "moon":
      return (
        <svg {...props}>
          <path d="M20.5 14.3A8.6 8.6 0 0 1 9.7 3.5a8.6 8.6 0 1 0 10.8 10.8Z" />
        </svg>
      );
    case "monitor":
      return (
        <svg {...props}>
          <rect x="2.5" y="4" width="19" height="13" rx="2" />
          <path d="M9 21h6M12 17v4" />
        </svg>
      );
    case "bell":
      return (
        <svg {...props}>
          <path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
          <path d="M13.73 21a2 2 0 0 1-3.46 0" />
        </svg>
      );
    case "chevron-down":
      return (
        <svg {...props}>
          <path d="m6 9 6 6 6-6" />
        </svg>
      );
    case "grid":
      return (
        <svg {...props}>
          <rect x="3" y="3" width="7.5" height="7.5" rx="1.5" />
          <rect x="13.5" y="3" width="7.5" height="7.5" rx="1.5" />
          <rect x="3" y="13.5" width="7.5" height="7.5" rx="1.5" />
          <rect x="13.5" y="13.5" width="7.5" height="7.5" rx="1.5" />
        </svg>
      );
    case "star":
      return (
        <svg {...props}>
          <path d="m12 2.5 3.09 6.26 6.91 1-5 4.87 1.18 6.87L12 18.27l-6.18 3.23L7 14.63l-5-4.87 6.91-1L12 2.5Z" />
        </svg>
      );
    case "feedback":
      return (
        <svg {...props}>
          <path d="M21 12a8 8 0 1 1-3.4-6.5" />
          <path d="M21 4v6h-6" />
          <path d="M12 8v4l2.5 1.5" />
        </svg>
      );
    case "message":
      return (
        <svg {...props}>
          <path d="M21 15a2 2 0 0 1-2 2H8l-5 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10Z" />
        </svg>
      );
    case "search":
      return (
        <svg {...props}>
          <circle cx="11" cy="11" r="7" />
          <path d="m20 20-3.2-3.2" />
        </svg>
      );
    case "back":
      return (
        <svg {...props}>
          <path d="M19 12H5" />
          <path d="m11 18-6-6 6-6" />
        </svg>
      );
    case "plus":
      return (
        <svg {...props}>
          <path d="M12 5v14M5 12h14" />
        </svg>
      );
    case "edit":
      return (
        <svg {...props}>
          <path d="M12 20h9" />
          <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5Z" />
        </svg>
      );
    case "trash":
      return (
        <svg {...props}>
          <path d="M3 6h18" />
          <path d="M8 6V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2m3 0-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
          <path d="M10 11v6M14 11v6" />
        </svg>
      );
    case "eye":
      return (
        <svg {...props}>
          <path d="M1.5 12S5 5 12 5s10.5 7 10.5 7-3.5 7-10.5 7S1.5 12 1.5 12Z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      );
    case "logout":
      return (
        <svg {...props}>
          <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
          <path d="M16 17l5-5-5-5" />
          <path d="M21 12H9" />
        </svg>
      );
    case "upload":
      return (
        <svg {...props}>
          <path d="M12 16V4M6 10l6-6 6 6" />
          <path d="M4 20h16" />
        </svg>
      );
    case "download":
      return (
        <svg {...props}>
          <path d="M12 4v12M6 10l6 6 6-6" />
          <path d="M4 20h16" />
        </svg>
      );
    case "arrow-right":
      return (
        <svg {...props}>
          <path d="M5 12h14" />
          <path d="m13 6 6 6-6 6" />
        </svg>
      );
    case "arrow-left":
      return (
        <svg {...props}>
          <path d="M19 12H5" />
          <path d="m11 6-6 6 6 6" />
        </svg>
      );
    case "headphones":
      return (
        <svg {...props}>
          <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
          <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3v5ZM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3v5Z" />
        </svg>
      );
    case "arrow-down":
      return (
        <svg {...props}>
          <path d="M12 5v14" />
          <path d="m6 13 6 6 6-6" />
        </svg>
      );
    case "map":
      return (
        <svg {...props}>
          <path d="M9 4 3 6.5V20l6-2.5 6 2.5 6-2.5V4l-6 2.5L9 4Z" />
          <path d="M9 4v13.5M15 6.5V20" />
        </svg>
      );
    case "signpost":
      return (
        <svg {...props}>
          <path d="M12 3v18" />
          <path d="M5 6h11l3 2.5-3 2.5H5V6Z" />
          <path d="M19 13H8l-3 2.5L8 18h11v-5Z" />
        </svg>
      );
    case "heart":
      return (
        <svg {...props}>
          <path d="M12 20.5s-7.5-4.6-9.3-9.2C1.4 8 3.4 4.5 7 4.5c2 0 3.5 1.1 5 3 1.5-1.9 3-3 5-3 3.6 0 5.6 3.5 4.3 6.8-1.8 4.6-9.3 9.2-9.3 9.2Z" />
        </svg>
      );
    case "play":
      return (
        <svg {...props}>
          <path d="M8 5.5v13l10.5-6.5L8 5.5Z" fill="currentColor" />
        </svg>
      );
    case "rotate-ccw":
      return (
        <svg {...props}>
          <path d="M3 12a9 9 0 1 0 3-6.7L3 8" />
          <path d="M3 3v5h5" />
        </svg>
      );
    case "rotate-cw":
      return (
        <svg {...props}>
          <path d="M21 12a9 9 0 1 1-3-6.7L21 8" />
          <path d="M21 3v5h-5" />
        </svg>
      );
    case "scan":
      return (
        <svg {...props}>
          <path d="M4 8V5a1 1 0 0 1 1-1h3M16 4h3a1 1 0 0 1 1 1v3M20 16v3a1 1 0 0 1-1 1h-3M8 20H5a1 1 0 0 1-1-1v-3" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      );
    case "home":
      return (
        <svg {...props}>
          <path d="M3 11 12 4l9 7" />
          <path d="M5 10v10h14V10" />
          <path d="M10 20v-6h4v6" />
        </svg>
      );
    case "user":
      return (
        <svg {...props}>
          <circle cx="12" cy="8" r="4" />
          <path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8" />
        </svg>
      );
    case "instagram":
      return (
        <svg {...props}>
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <path d="M17.5 6.5h.01" />
        </svg>
      );
    case "youtube":
      return (
        <svg {...props}>
          <rect x="2" y="5" width="20" height="14" rx="4" />
          <path d="m10 9 5 3-5 3V9Z" />
        </svg>
      );
    case "camera":
      return (
        <svg {...props}>
          <path d="M4 8h3l1.5-2.5h7L17 8h3a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1Z" />
          <circle cx="12" cy="13" r="3.5" />
        </svg>
      );
    case "map-pin":
      return (
        <svg {...props}>
          <path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21Z" />
          <circle cx="12" cy="9.5" r="2.5" />
        </svg>
      );
    case "clock":
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3.2 2" />
        </svg>
      );
    case "check":
      return (
        <svg {...props}>
          <path d="m20 6-11 11-5-5" />
        </svg>
      );
    case "x":
      return (
        <svg {...props}>
          <path d="M18 6 6 18M6 6l12 12" />
        </svg>
      );
    case "alert-triangle":
      return (
        <svg {...props}>
          <path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z" />
          <path d="M12 9v4M12 17h.01" />
        </svg>
      );
    case "info":
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 8h.01M11 12h1v5h1" />
        </svg>
      );
    case "image":
      return (
        <svg {...props}>
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <path d="m21 15-5-5L5 21" />
        </svg>
      );
    case "external-link":
      return (
        <svg {...props}>
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
          <path d="M15 3h6v6" />
          <path d="M10 14 21 3" />
        </svg>
      );
    case "ban":
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="9" />
          <path d="m5.5 5.5 13 13" />
        </svg>
      );
    case "check-circle":
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="9" />
          <path d="m8.5 12.5 2.5 2.5 5-5" />
        </svg>
      );
    case "cube":
      return (
        <svg {...props}>
          <path d="m12 2 8 4.5v11L12 22l-8-4.5v-11L12 2Z" />
          <path d="M12 22V12M20 6.5 12 12 4 6.5" />
        </svg>
      );
    case "list":
      return (
        <svg {...props}>
          <path d="M8 6h13M8 12h13M8 18h13" />
          <path d="M3 6h.01M3 12h.01M3 18h.01" />
        </svg>
      );
    case "calendar":
      return (
        <svg {...props}>
          <rect x="3" y="4.5" width="18" height="16.5" rx="2" />
          <path d="M16 3v3M8 3v3M3 9.5h18" />
        </svg>
      );
    case "sun-pin":
      // Brand mark: house/pin silhouette with a sun, echoing the Histoury logo
      return (
        <svg viewBox="0 0 40 40" width={props.width} height={props.height} fill="none">
          <path
            d="M20 3C11.7 3 5 9.7 5 18c0 11.3 15 19 15 19s15-7.7 15-19c0-8.3-6.7-15-15-15Z"
            fill="#1C3D74"
          />
          <circle cx="20" cy="17" r="5.6" fill="#F0B429" />
          {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
            <rect
              key={deg}
              x="19.2"
              y="6.4"
              width="1.6"
              height="3.4"
              rx="0.8"
              fill="#F0B429"
              transform={`rotate(${deg} 20 17)`}
            />
          ))}
          <path d="M13 22c2 2.5 5 3 7 3s5-.5 7-3" stroke="#C22A2A" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case "places":
      // Sidebar mark for Places Management — a map pin with a small
      // storefront awning, distinct from the plain "map-pin" icon used
      // elsewhere for coordinates.
      return (
        <svg {...props}>
          <path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21Z" />
          <path d="M9 9.2h6l.9 2a1 1 0 0 1-.9 1.4H9a1 1 0 0 1-.9-1.4l.9-2Z" />
          <path d="M9.6 12.6v1.9M14.4 12.6v1.9" />
        </svg>
      );
    case "food":
      return (
        <svg {...props}>
          <path d="M7 2v7a2 2 0 0 0 4 0V2" />
          <path d="M9 9v13" />
          <path d="M16 2c-1.7 0-3 2-3 5s1.3 5 3 5v10" />
        </svg>
      );
    case "tree":
      return (
        <svg {...props}>
          <path d="M12 2 6 12h3l-4 6h5v4" />
          <path d="M10 22h4" />
          <path d="M12 22v-4h5l-4-6h3L12 2" />
        </svg>
      );
    case "hotel":
      return (
        <svg {...props}>
          <path d="M3 21V8l9-5 9 5v13" />
          <path d="M3 21h18" />
          <path d="M9 21v-6h6v6" />
          <path d="M9 12h.01M15 12h.01M9 8h.01M15 8h.01" />
        </svg>
      );
    case "bag":
      return (
        <svg {...props}>
          <path d="M6 8h12l1 13H5L6 8Z" />
          <path d="M9 8V6a3 3 0 0 1 6 0v2" />
        </svg>
      );
    case "school":
      return (
        <svg {...props}>
          <path d="m12 2 10 5-10 5L2 7l10-5Z" />
          <path d="M6 10.5V16c0 1.5 2.7 3 6 3s6-1.5 6-3v-5.5" />
          <path d="M22 7v7" />
        </svg>
      );
    case "bank":
      return (
        <svg {...props}>
          <path d="M3 10 12 4l9 6" />
          <path d="M4 10h16v9H4v-9Z" />
          <path d="M4 19h16" />
          <path d="M8 13v4M12 13v4M16 13v4" />
        </svg>
      );
    case "phone":
      return (
        <svg {...props}>
          <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />
        </svg>
      );
    case "globe":
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3c2.5 2.5 3.8 5.8 3.8 9s-1.3 6.5-3.8 9c-2.5-2.5-3.8-5.8-3.8-9S9.5 5.5 12 3Z" />
        </svg>
      );
    case "facebook":
      return (
        <svg {...props}>
          <path d="M15 8h2V4h-2a4 4 0 0 0-4 4v2H9v4h2v6h4v-6h2.5l.5-4H15V8.5c0-.3.2-.5.5-.5Z" />
        </svg>
      );
    case "mail":
      return (
        <svg {...props}>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m4 7 8 6 8-6" />
        </svg>
      );
    case "refresh":
      return (
        <svg {...props}>
          <path d="M21 12a9 9 0 0 1-15.3 6.4M3 12a9 9 0 0 1 15.3-6.4" />
          <path d="M21 3v6h-6M3 21v-6h6" />
        </svg>
      );
    case "activity":
      // API Health / System Status sidebar mark — a heartbeat/pulse line.
      return (
        <svg {...props}>
          <path d="M3 12h4l2.5-7L14 19l2.5-7H21" />
        </svg>
      );
    case "ticket":
      return (
        <svg {...props}>
          <path d="M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v1.5a1.5 1.5 0 0 0 0 3V15a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1.5a1.5 1.5 0 0 0 0-3V9Z" />
          <path d="M10 7v10" strokeDasharray="2 2" />
        </svg>
      );
    default:
      // A visible placeholder rather than null.
      //
      // Returning nothing rendered a button with no glyph inside it — an
      // empty coloured square that looked broken and gave no clue which
      // name was wrong. A dot is obviously a stand-in, shows up in a
      // screenshot, and keeps the button's size stable.
      if (import.meta.env?.DEV) {
        console.warn(`Icon: no glyph named "${name}"`);
      }
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="3.5" />
        </svg>
      );
  }
}

export default Icon;
