import { CONTACT } from "./site.js";

export const CHAT_TOPICS = [
  { label: "What is Histoury?", patterns: [/\bhistoury\b/, /what (is|does|can) (this |the )?app/, /about (the )?app/], answer: "Histoury is a free Android heritage guide to Intramuros, Manila. Plan your route, unlock historical stories when you arrive, experience AR reconstructions, and track your visits.", link: "#demo", linkLabel: "See the app in action" },
  { label: "Download & install", patterns: [/\b(download|install|apk|sideload)\b/], answer: "Download the Android APK from this website, open it, and allow installation from your browser if Android asks. Follow our installation guide for the full steps. Histoury isn't currently on the Play Store.", link: "#install", linkLabel: "Open installation guide" },
  { label: "Phone compatibility", patterns: [/\b(compatib\w*|requirements?|supported|arcore|iphone|ios|storage|android|devices?|phones?)\b/], answer: "Histoury needs Android 8.0 or newer and around 120 MB of free storage. There's no iPhone version currently. AR needs an ARCore-compatible phone; the map, stories, narration, planning and visit history work without AR.", link: "https://developers.google.com/ar/devices", linkLabel: "Check ARCore compatibility" },
  { label: "Account & sign in", patterns: [/\b(accounts?|sign[ -]?in|log[ -]?in|register|registration|sign[ -]?up)\b/], answer: "An account is required to use Histoury. Create an account and sign in in the Android app. For account-access problems, contact support so the team can help.", support: true },
  { label: "Unlock site history", patterns: [/\b(unlock\w*|locked|learn|history|stories|sources|timeline|narration|audio)\b/], answer: "Visit a heritage site with location enabled to unlock its information. You can explore the overview, timeline, stories and sources, or listen to the narration. Once unlocked, you can revisit its information after your visit.", link: "#demo", linkLabel: "Explore the Learn screen" },
  { label: "AR experiences", patterns: [/\bar\b/, /augmented reality/, /\b(3d|camera|reconstruction\w*|filters?)\b/], answer: "On an ARCore-compatible phone, use the camera at a supported site to view a 3D reconstruction in place. You can capture AR photos with period filters. Without ARCore, the rest of the guide remains available.", link: "#ar", linkLabel: "See AR experiences" },
  { label: "Offline use", patterns: [/\b(offline|wifi|wi-fi|signal|internet|connection|data)\b/], answer: "Download a site's 3D model and narration while connected before your visit to use its AR experience without a signal. Other features may still need internet access." },
  { label: "Plan a route", patterns: [/\b(plan\w*|routes?|itinerar\w*|stops?|distance|walking|travel time)\b/], answer: "Choose the sites you want to visit and Histoury creates an itinerary with stops, distances and travel times. Reorder stops, optimise your route, and save the plan for later.", link: "#demo", linkLabel: "See trip planning" },
  { label: "Visit history", patterns: [/visit history/, /\b(track\w*|progress|visited)\b/], answer: "Visit History keeps a record of the sites you've visited and shows which ones are still waiting, so you can look back on your Intramuros journey.", link: "#demo", linkLabel: "See visit tracking" },
  { label: "Location & permissions", patterns: [/\b(location|permissions?|gps|background|notifications?|arrival|arrive)\b/], answer: "Location helps Histoury find nearby sites and recognise your arrival to unlock history. Background location enables arrival notifications when the app isn't open. Camera access is used for AR and photos. Manage permissions in your phone's settings." },
  { label: "Is it free?", patterns: [/\b(free|cost|price|pay|payment|ads|advertis\w*)\b/], answer: "Histoury is free and has no ads. It is a capstone project built for exploring Intramuros. Venue admission fees are separate from the app; check with each site before visiting." },
  { label: "Update the app", patterns: [/\b(updates?|version|upgrade)\b/], answer: "Download the latest APK from this website and install it over the existing app. You don't need to uninstall first. Updates aren't installed automatically through the Play Store.", link: "#install", linkLabel: "Get the latest download" },
  { label: "Privacy & deletion", patterns: [/\b(privacy|delete|deletion|personal|password|security)\b/], answer: `Read our privacy policy for how app data is handled. For account deletion or concerns about your data, email ${CONTACT.email}. Don't share passwords or sensitive account details in this chat.`, link: "#privacy-policy", linkLabel: "Read privacy policy", support: true },
  { label: "Contact support", patterns: [/\b(support|contact|email|human|help|bug|broken|crash\w*|error|problem|issue|feedback|reset)\b/, /not work/, /can't/, /cannot/], answer: "The support team can help with account issues, unexpected app behaviour, and other concerns. Use the button below to open an email draft with your question. You can review it before sending.", support: true },
];

export function answerQuestion(question) {
  const text = question.toLowerCase().trim();
  if (/^(hi|hello|hey|thanks|thank you)[!. ]*$/.test(text)) return { answer: "Hi! I'm Histoury's automated FAQ assistant. Choose a topic below or ask me about the app." };
  // Problems go to support rather than being mistaken for ordinary feature questions.
  const support = CHAT_TOPICS.at(-1);
  if (support.patterns.some((pattern) => pattern.test(text))) return support;
  const ranked = CHAT_TOPICS.slice(0, -1).map((topic) => ({ topic, score: topic.patterns.reduce((score, pattern) => score + (pattern.test(text) ? 1 : 0), 0) + (text === topic.label.toLowerCase() ? 10 : 0) })).sort((a, b) => b.score - a.score);
  return ranked[0]?.score ? ranked[0].topic : { answer: "I don't have a verified answer for that in my FAQ information. The Histoury team can help—open an email draft below with your question included.", support: true };
}

export function supportEmail(question = "") {
  return `mailto:${CONTACT.email}?subject=${encodeURIComponent("Histoury support")}&body=${encodeURIComponent(`Hi Histoury team,\n\n${question}\n\n`)}`;
}

