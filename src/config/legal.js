/**
 * Privacy Policy, Terms of Use and Cookie Policy, shown at #privacy-policy,
 * #terms-of-use and #cookie-policy (see App.jsx). Plain data so the wording can be edited
 * without touching the page component.
 *
 * Keep this in step with the in-app legal text and with what the app
 * actually does. Review it with your adviser before publishing.
 */
import { CONTACT } from "./site";

export const LEGAL_UPDATED = "September 2026";

export const LEGAL_PAGES = {
  "privacy-policy": {
    title: "Privacy Policy",
    intro:
      "Histoury is a capstone project that helps visitors explore the historical sites of Intramuros. This policy explains what information the Histoury Android app collects, why, and the choices you have.",
    sections: [
      {
        heading: "Information you give us",
        body: [
          "Account details: your first and last name, email address and password when you register. Your password is handled by Firebase Authentication and is never visible to us.",
          "Content you create: ratings and reviews of historical sites, feedback you send us, itineraries you build, and your list of favorite sites.",
          "Profile photo, if you choose to add one.",
        ],
      },
      {
        heading: "Information collected while you use the app",
        body: [
          "Location: used to show where you are on the map, give walking directions, tell you when you have arrived at a site, and check that you are at a site before starting its AR experience. With background location allowed, arrival notifications can reach you while the app is closed. You can decline location access and still use the rest of the app.",
          "Visit history: which historical sites you have visited and when, so the app can unlock their full information and let you review them.",
          "Camera: used only during the AR experience. Photos you take in AR are saved on your own phone and are not uploaded.",
        ],
      },
      {
        heading: "How we use your information",
        body: [
          "To run your account and keep your itineraries, favorites and visit history in sync.",
          "To show your reviews (with your first and last name) to other visitors.",
          "To keep the service safe — for example, limiting repeated requests and reviewing reported content.",
          "We do not sell your information and the app shows no advertising.",
        ],
      },
      {
        heading: "Where your information is stored",
        body: [
          "Account data, reviews, itineraries and visit history are stored with Google Firebase (Authentication, Cloud Firestore and Cloud Storage). Walking directions are requested from Google's Routes service using the start and end points of your route.",
          "Downloaded offline content and AR photos stay on your phone and are removed if you uninstall the app or clear its data.",
        ],
      },
      {
        heading: "Your choices",
        body: [
          "You can change your name and profile photo in the app at any time, and turn location, camera and notification permissions on or off in your phone's settings.",
          `To have your account and its data deleted, email us at ${CONTACT.email}.`,
        ],
      },
      {
        heading: "Children",
        body: [
          "Histoury is intended for general audiences. If you believe a child has given us personal information without a parent's consent, contact us and we will remove it.",
        ],
      },
      {
        heading: "Changes to this policy",
        body: [
          "If this policy changes, the updated version will be published on this page with a new date.",
        ],
      },
    ],
  },

  "terms-of-use": {
    title: "Terms of Use",
    intro:
      "These terms apply when you download or use the Histoury app. By using the app you agree to them. If you do not agree, please do not use the app.",
    sections: [
      {
        heading: "About Histoury",
        body: [
          "Histoury is a capstone project providing historical information, maps, itineraries and augmented-reality (AR) experiences for sites in Intramuros, Manila. It is offered free of charge and as is.",
        ],
      },
      {
        heading: "Your account",
        body: [
          "You are responsible for keeping your login details private and for activity on your account. Give accurate information when you register.",
          "We may suspend or remove accounts that break these terms, and you may ask us to delete your account at any time.",
        ],
      },
      {
        heading: "Reviews and other content",
        body: [
          "Reviews and feedback must be your own, honest, and respectful. Do not post content that is offensive, misleading, spam, or that infringes someone else's rights.",
          "You keep ownership of what you post, but you allow Histoury to display it in the app. Content may be hidden or removed if it is reported or breaks these terms.",
        ],
      },
      {
        heading: "Safety while exploring",
        body: [
          "Stay aware of your surroundings, traffic and site rules when using maps, navigation or AR. Do not use the app in a way that puts you or others at risk, and follow the instructions of site staff.",
          "Directions, walking times and site information are provided for guidance and may not always be complete or up to date.",
        ],
      },
      {
        heading: "Historical content and AR reconstructions",
        body: [
          "Historical text, images, narration and 3D reconstructions are provided for educational purposes. Reconstructions are interpretations and may not exactly match the original structures.",
          "App content may not be copied or redistributed without permission.",
        ],
      },
      {
        heading: "Availability",
        body: [
          "Some features need an internet connection, location access, or an ARCore-supported phone. We may change, pause or discontinue features at any time.",
        ],
      },
      {
        heading: "Limitation of liability",
        body: [
          "To the extent allowed by law, Histoury and its developers are not liable for any loss or damage arising from use of the app, including reliance on its directions or information.",
        ],
      },
      {
        heading: "Contact",
        body: [`Questions about these terms: ${CONTACT.email}.`],
      },
    ],
  },
  "cookie-policy": {
    title: "Cookie Policy",
    intro:
      "This policy explains how the Histoury website uses cookies and similar browser storage, and how you can control them. It covers this website only; the Histoury Android app is covered by the Privacy Policy.",
    sections: [
      {
        heading: "What cookies are",
        body: [
          "Cookies are small text files a website saves in your browser. Similar technologies, such as your browser's local storage, work the same way. We call them all \"cookies\" here.",
        ],
      },
      {
        heading: "Essential cookies",
        body: [
          "Your cookie choice (histoury-cookie-consent in local storage, and the histoury_consent cookie), kept for 6 months so we don't ask on every visit.",
          "Your light or dark theme preference (histoury-landing-theme in local storage), kept until you clear it.",
          "These are needed for the site to work the way you asked, so they are always on. They are stored only in your browser and are not used to track you.",
        ],
      },
      {
        heading: "Analytics cookies",
        body: [
          "Analytics cookies would help us understand how visitors use the site, such as which pages are visited. They are used only if you choose \"Accept all\" or turn Analytics on in Cookie Settings.",
          "The site does not currently run any analytics. If we add them, they will stay off for everyone who has not accepted them.",
        ],
      },
      {
        heading: "Third-party content",
        body: [
          "Fonts are loaded from Google Fonts, which receives your browser's IP address to deliver them. Google Fonts does not set cookies on this site.",
          "Downloading the app or following a social media link takes you to other services, which have their own cookie policies.",
        ],
      },
      {
        heading: "Your choices",
        body: [
          "You can change your choice at any time with \"Cookie Settings\" at the bottom of every page.",
          "You can also delete or block cookies in your browser's settings. Blocking essential storage means the site may forget your theme and ask about cookies again.",
          `Questions? Contact us at ${CONTACT.email}.`,
        ],
      },
    ],
  },
};
