/** Public policies for the Histoury app and its companion website. */
import { CONTACT } from "./site";

export const LEGAL_UPDATED = "18 October 2026";
const contact = `${CONTACT.email} or ${CONTACT.alternateEmail}`;

export const LEGAL_PAGES = {
  "privacy-policy": {
    title: "Privacy Policy",
    intro: "This policy explains how the Histoury project team handles information through the Histoury Android app, this website and email support. Histoury is a capstone project for exploring the historical sites of Intramuros, Manila.",
    sections: [
      { heading: "Accounts and information you provide", body: [
        "An account is required to use the Android app. Registration includes your first and last name, email address and password. Firebase Authentication handles sign-in credentials; the project team does not receive your password in readable form.",
        "App information includes your optional profile photo, reviews, ratings, feedback, saved itineraries, favorites and visit history. Your reviews and the name associated with them are visible to other app users.",
        "If you email support, the team receives your email address, message and any attachments you choose to send. Do not send passwords or other unnecessary sensitive information."
      ] },
      { heading: "Location, camera and permissions", body: [
        "Location is used to show nearby sites, support directions, recognise arrival, unlock site information and check your presence for on-site AR experiences. With background location permission, arrival notifications can work when the app is not open.",
        "You can manage permissions in Android settings. Declining or disabling location can prevent arrival detection, location-based unlocking and related features from working. Notification permission controls arrival alerts.",
        "Camera access is used for AR experiences and capturing AR photos. Those photos are saved on your phone rather than uploaded by the AR capture feature. An optional profile photo is handled separately when you upload it."
      ] },
      { heading: "Why information is used", body: [
        "Information supports account access, saved plans and favorites, site unlocking, visit tracking, reviews, app support and the prevention of misuse. Histoury does not sell your personal information or display advertising in the app.",
        "Information is processed to provide the services you request, respond to support enquiries and maintain the service. Device permissions control optional access such as camera and background location. A device permission is separate from the explanation of data handling in this policy."
      ] },
      { heading: "Service providers and external links", body: [
        "The app uses Google Firebase services, including Authentication, Cloud Firestore and Cloud Storage, for account and app information. Route requests use Google's Routes service with the route's start and end points. Provider infrastructure may process information outside the Philippines.",
        "The website loads fonts from Google Fonts and links to GitHub for APK downloads and Google for ARCore compatibility information. Your browser sends technical connection information, such as an IP address, when connecting to those services. Their own privacy policies also apply.",
        "Website delivery and email providers may process technical connection information needed to deliver pages or messages. This website does not currently include an analytics or advertising integration."
      ] },
      { heading: "Website chat and browser storage", body: [
        "The automated FAQ assistant matches questions to prepared answers in your browser. It does not send your chat to an AI service or live support team. Messages remain in page memory and are cleared when the page reloads; they are not saved in browser storage by the chatbot.",
        "Choosing Email support opens your email app with a draft containing the question. Nothing is emailed automatically: you review and send the message yourself. Other questions in the conversation are not included automatically.",
        "The website stores theme and cookie preferences in your browser. The Cookie Policy explains the storage names, duration and controls."
      ] },
      { heading: "Retention and security", body: [
        "Account information and saved app content support your ongoing use of Histoury. Retention may also depend on support needs, service-provider processes and applicable legal obligations. Contact the team for retention information about a specific record or to request deletion; this policy does not promise a fixed deletion or backup-removal deadline.",
        "Uninstalling the app does not itself delete your account or cloud records. Downloaded content can be removed through app or device controls. Photos saved to your gallery may remain after uninstalling the app and should be managed through your phone's gallery or file manager.",
        "Keep your account credentials private. No online service or device storage can be guaranteed completely secure."
      ] },
      { heading: "Your privacy choices and requests", body: [
        `Contact ${contact} to request access to, correction of, or deletion of your personal information, or to raise a privacy concern. The team may need to verify that the account belongs to you before acting on a request.`,
        "You may have rights to information, access, correction, objection, erasure or blocking, and data portability under applicable Philippine data protection law, subject to its conditions and exceptions. You may also raise a complaint with the National Privacy Commission at privacy.gov.ph.",
        "You can update supported profile details in the app, change Android permissions, and clear website preferences through browser settings."
      ] },
      { heading: "Children and policy changes", body: [
        `If you believe a child has provided personal information without appropriate parent or guardian involvement, contact ${contact} so the team can review and address the concern.`,
        "Updates to this policy will appear here with a revised date. For privacy questions, use either support address above."
      ] }
    ]
  },
  "terms-of-use": {
    title: "Terms of Use",
    intro: "These terms describe use of the Histoury Android app and companion website. Read them alongside the Privacy Policy and Cookie Policy. If you do not agree to these terms, do not use the service.",
    sections: [
      { heading: "The service", body: [
        "Histoury is a free capstone project offering historical information, route planning, visit tracking and augmented-reality experiences for Intramuros, Manila. It is an educational guide, not a venue booking service or a guarantee of admission.",
        "Venue fees, opening hours, access restrictions and site rules are set by the relevant venues. Check those details with site staff before visiting."
      ] },
      { heading: "Accounts and responsible use", body: [
        "An account is required to use the Android app. Provide accurate registration details and keep your credentials private. Contact support if you suspect unauthorised account use.",
        "Do not misuse the service, impersonate others, interfere with its operation, attempt unauthorised access or submit harmful or unlawful content. Accounts or content may be restricted where needed to address misuse."
      ] },
      { heading: "Reviews, photos and other contributions", body: [
        "Submit only content you have the right to share. Reviews should reflect your experience and must not contain harassment, spam, private information about others or misleading claims.",
        "You retain rights to your contributions while allowing Histoury to store, display and process them as needed to provide and moderate the service. Reviews and their associated profile name can be visible to other users."
      ] },
      { heading: "Exploring safely", body: [
        "Watch your surroundings, traffic and uneven ground when using navigation or AR. Respect restricted areas, property rights and instructions from site staff. Do not enter unsafe or closed areas to unlock content.",
        "Routes, distances, timings and location detection are estimates. GPS accuracy, device conditions and access restrictions can affect arrival recognition and navigation."
      ] },
      { heading: "Historical information and content rights", body: [
        "Historical narratives and AR reconstructions are educational interpretations based on available sources. Reconstructions may not reproduce every detail of a structure, and information can be corrected or updated.",
        "Histoury's original software, branding and content remain subject to their owners' rights. Third-party photos, public-domain materials and openly licensed content retain their respective permissions and attribution requirements. Consult the credits and applicable licenses before reusing material."
      ] },
      { heading: "Downloads and feature availability", body: [
        "The app is provided as an Android APK through the download link on this website. Follow the installation guide and obtain updates from this website. There is currently no iPhone version.",
        "Some features require an internet connection, permissions or an ARCore-compatible device. Downloading supported AR content in advance does not make every app feature available offline. Features may change or be temporarily unavailable."
      ] },
      { heading: "Automated FAQ assistant and support", body: [
        "The website chatbot supplies prepared FAQ answers and is not a live agent. It may not recognise every question or resolve account-specific problems. For other concerns, it offers an email link; you must send the email yourself.",
        `For support, corrections or account deletion requests, contact ${contact}.`
      ] },
      { heading: "Limits and changes", body: [
        "The service is provided on an as-available basis. To the extent permitted by applicable law, the project team does not guarantee uninterrupted availability, complete accuracy or suitability for every device or visit.",
        "Nothing in these terms excludes rights or liabilities that cannot lawfully be excluded. Updated terms will be published here with a revised date."
      ] }
    ]
  },
  "cookie-policy": {
    title: "Cookie Policy",
    intro: "This policy covers cookies and browser storage used by the Histoury website. App data and support messages are described in the Privacy Policy.",
    sections: [
      { heading: "Cookies and local storage", body: [
        "Cookies are browser records that can be sent with requests to their domain. Local storage keeps browser data for a website and is not automatically sent with every request. Histoury uses both to remember website preferences."
      ] },
      { heading: "Preference storage used on this website", body: [
        "histoury-cookie-consent (local storage): records necessary and analytics choices, their version and decision date. The site treats this choice as expired after 180 days and asks again. The stored record may remain until overwritten or cleared.",
        "histoury_consent (first-party cookie): mirrors whether you selected essential-only or all categories. It is set with a 180-day maximum age, applies across the website and uses SameSite=Lax, with Secure enabled on HTTPS.",
        "histoury-landing-theme (local storage): remembers your light, dark or system theme preference until you change it or clear browser storage.",
        "These records support your preferences and are not used by Histoury to track you across websites. Keeping only essential storage does not enable analytics."
      ] },
      { heading: "Analytics and advertising", body: [
        "This website currently has no analytics or advertising integration. The Analytics option records your preference but does not currently load an analytics service.",
        "If an optional analytics integration is introduced, its details and this policy should be updated before use, and it must remain disabled unless the applicable consent has been given."
      ] },
      { heading: "Chat and external services", body: [
        "The FAQ chatbot does not set cookies or save chat messages in local or session storage. It keeps messages in page memory until reload. Email support links open a draft in your email application rather than sending chat automatically.",
        "Google Fonts is requested to display typefaces; these requests expose technical connection information to Google. External destinations such as GitHub downloads, Google device information and your email provider apply their own storage and privacy practices."
      ] },
      { heading: "Manage your preferences", body: [
        "Open Cookie Settings in the footer to change the recorded optional analytics choice. You can also clear cookies and local storage in your browser. Clearing storage resets remembered preferences and may make the consent banner appear again.",
        "Blocking browser storage may prevent preferences from being remembered. Browser controls may apply separately on each device and browser profile.",
        `Questions about website storage? Contact ${contact}.`
      ] }
    ]
  }
};
