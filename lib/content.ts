// All copy is sourced strictly from the AyuGuard Project Report.
// No invented features, statistics, testimonials, or claims.

export const GITHUB_PROFILE = "https://github.com/ridhanbholakiya198-code";
export const GITHUB_RELEASES =
  "https://github.com/ridhanbholakiya198-code/AyuGuard/releases/tag/v1.1.0";
export const APK_PATH = "/apk/AyuGuard-v1.1.0.apk";
export const APP_VERSION = "v1.1.0";

export const engineeringDecisions = [
  {
    id: "01",
    title: "Two-Tier Location Strategy",
    short:
      "Battery-cheap caching while monitoring, an aggressive multi-source fetch the instant an alert fires.",
    body:
      "During Journey Mode, AyuGuard caches a GPS fix roughly every 15 minutes instead of polling continuously. The instant an SOS fires, that changes completely: a retry loop runs in parallel with a high-accuracy fix request under a strict timeout. If both are too slow, it falls back to the last cached location rather than waiting.",
  },
  {
    id: "02",
    title: "Ghost Journey Recovery",
    short:
      "If Android kills the app mid-journey, AyuGuard detects the missed deadline on relaunch and still fires the alert.",
    body:
      "On every app boot or resume, AyuGuard checks the last saved Journey Mode state. If the countdown had already expired while the app was killed or suspended, it detects the negative time delta and resumes the SOS workflow — as if the timer never stopped.",
  },
  {
    id: "03",
    title: "Context-Aware Alarm Behaviour",
    short:
      "Manual SOS is loud immediately; Journey Mode stays silent until the final 13 seconds.",
    body:
      "Manual SOS uses a short, user-configurable hold-and-countdown (4–60s, default 9s) with a loud alarm for the full countdown. Journey Mode escalation uses a longer timer (default 10s) and stays silent until the final seconds — because it more often means a forgotten check-in, not an active threat.",
  },
  {
    id: "04",
    title: "Works From a Locked Pocket",
    short:
      "A foreground service and wake lock keep the emergency loop alive even when the screen is off.",
    body:
      "When an SOS is armed, the native layer starts a foreground service with a location service type and acquires a system wake lock for the duration of the sequence — so the alert survives even when the screen turns off and Android suspends background work.",
  },
  {
    id: "05",
    title: "Physical Delivery Confirmation",
    short:
      "The phone vibrates at the exact moment the SMS is handed to the network — not when a button is tapped.",
    body:
      "The device vibrates the instant the outgoing message is handed to Android's SMS system, not on button press. This gives a felt, physical guarantee that the SOS entered the cellular network — not just that the app tried to send it.",
  },
  {
    id: "06",
    title: "Offline Crash Forensics",
    short:
      "A built-in diagnostic layer catches crashes and corrupted assets without any cloud telemetry.",
    body:
      "AyuGuard installs its own crash handler that serializes stack traces to on-device storage. A separate diagnostic routine inspects bundled image assets for valid file signatures — the exact mechanism that caught a real corrupted-PNG issue during this project's own build process.",
  },
  {
    id: "07",
    title: "Zero-Backend, Offline-First",
    short: "No server, no database, no login. The alert path runs entirely over SMS.",
    body:
      "Every piece of AyuGuard's data — trusted contacts, journey state, crash logs, settings — is stored only on the device. The emergency alert is dispatched over the standard cellular SMS protocol, not an internet API call.",
  },
  {
    id: "08",
    title: "Battery-First AMOLED UI",
    short: "A true 0-pixel-black theme, chosen for real OLED power savings, not just style.",
    body:
      "Alongside system default and light themes, AyuGuard offers a true AMOLED Black theme using pure black rather than dark-grey surfaces — on OLED displays, a pure-black pixel is switched off entirely, measurably reducing power draw.",
  },
];

export const architectureLayers = [
  "React UI — Application Layer",
  "Capacitor Bridge",
  "Native Android Service Layer",
  "GPS · SmsManager · Foreground Service · Notifications",
];

export const techStack = [
  { name: "React", role: "Builds the application's screens and interaction logic." },
  {
    name: "Capacitor",
    role: "Bridges the web UI to native Android APIs and packages the app for Android.",
  },
  {
    name: "Android (Native Service Layer)",
    role: "Handles location, SMS, notifications, and background execution — the parts that must survive the OS trying to kill the app.",
  },
  {
    name: "GitHub",
    role: "Version control and the distribution channel for release builds via GitHub Releases.",
  },
];

export const stats = [
  { value: "~3", suffix: "Months", label: "Development duration" },
  { value: "40", suffix: "+", label: "Builds tested" },
  { value: "20", suffix: "+", label: "Major bugs fixed" },
  { value: "15", suffix: "+", label: "Major features" },
  { value: "10", suffix: "+", label: "Application screens" },
];

export const testingTable = [
  { module: "Manual SOS", approach: "Hold-to-trigger testing across configured timer range (4–60s)", status: "Passed" },
  { module: "Journey Mode", approach: "Full-duration monitoring, manual escalation, and forced-kill recovery testing", status: "Passed" },
  { module: "Location Fallback", approach: "Verified retry loop, high-accuracy fetch, and cached fallback under poor signal", status: "Passed" },
  { module: "SMS Delivery", approach: "Delivery and multipart-message testing across network conditions", status: "Passed" },
  { module: "Vibration Handoff", approach: "Confirmed timing against actual SMS dispatch, not button press", status: "Passed" },
  { module: "Theme System", approach: "Verified System Default, AMOLED Black, and Light modes", status: "Passed" },
  { module: "Crash Forensics", approach: "Verified crash logging and asset-corruption detection using known-bad test assets", status: "Passed" },
];

export const faqs = [
  {
    q: "Does AyuGuard need an internet connection to work?",
    a: "No. The emergency alert path runs entirely over the standard cellular SMS network, not an internet API call. AyuGuard is built as a zero-backend, offline-first app — there is no server, no database, and no login.",
  },
  {
    q: "Where is my data stored?",
    a: "Only on your device. Trusted contacts, journey state, crash logs, and settings never leave the phone. There is no cloud sync and no data collection of any kind.",
  },
  {
    q: "What happens if Android kills the app during a Journey?",
    a: "AyuGuard checks the last saved Journey Mode state on every app boot or resume. If the countdown had already expired while the app was killed, it detects the missed deadline and immediately resumes the SOS workflow — this is Ghost Journey Recovery, Section 5.2 of the project report.",
  },
  {
    q: "Will the SOS alarm work from inside a locked pocket?",
    a: "Yes. When an SOS is armed, a native foreground service starts and a system wake lock is acquired, keeping the emergency loop alive even when the screen is off and the OS would otherwise suspend background work.",
  },
  {
    q: "How do I know the SOS message actually sent?",
    a: "The phone vibrates at the exact moment the outgoing SMS is handed to Android's SMS system — not when the SOS button is pressed. That gives a physical, felt confirmation that the alert entered the cellular network.",
  },
  {
    q: "How many trusted contacts can I add?",
    a: "Up to five. Emergency SMS goes only to the contacts you've explicitly added, stored solely on-device, and the list persists across app updates.",
  },
  {
    q: "Is the SMS location link accurate if I'm indoors or in a basement?",
    a: "AyuGuard runs a short retry loop with a high-accuracy GPS request under a strict timeout the instant SOS fires. If that's too slow — common indoors — it falls back to the last cached location instead of sending nothing.",
  },
  {
    q: "Why was the app briefly flagged by Google Play Protect?",
    a: "As a newly signed, independently distributed APK with no established reputation, an early release build triggered Play Protect's reputation-based warning. The build was verified clean with VirusTotal — this is a common warning for new, independently signed APKs, not a sign of an actual issue.",
  },
];

export const screens = [
  {
    src: "/screenshots/home-sos.png",
    alt: "AyuGuard home screen with the hold-to-trigger SOS button",
    label: "Home Screen",
    caption:
      "One large hold-to-trigger SOS button, a live status indicator, and two shortcuts to Journey Mode and Trusted Contacts.",
  },
  {
    src: "/screenshots/journey-setup.png",
    alt: "Journey Mode setup screen with duration and vehicle options",
    label: "Journey Setup",
    caption:
      "Pick a duration, optionally log a vehicle and number plate, and see exactly how the auto-SOS escalation works.",
  },
  {
    src: "/screenshots/journey-active.png",
    alt: "Journey Mode active countdown screen",
    label: "Journey Active",
    caption:
      "The countdown moves to the notification bar while GPS caching runs quietly in the background.",
  },
  {
    src: "/screenshots/trusted-contacts.png",
    alt: "Trusted contacts screen",
    label: "Trusted Contacts",
    caption: "Up to five contacts, stored solely on-device, receive the emergency SMS.",
  },
  {
    src: "/screenshots/countdown.png",
    alt: "SOS dispatch countdown before sending",
    label: "SOS Countdown",
    caption: "A final countdown before dispatch, with an option to send immediately or cancel.",
  },
  {
    src: "/screenshots/sms-sent.png",
    alt: "Emergency SMS message sent by AyuGuard",
    label: "Emergency SMS",
    caption:
      "A bilingual SMS — English and Gujarati — with an offline Google Maps link, battery level, and vehicle details.",
  },
  {
    src: "/screenshots/notification.png",
    alt: "Journey Mode Active notification in the status bar",
    label: "Background Monitoring",
    caption: "Journey Mode keeps running from the notification bar, even with the app closed.",
  },
  {
    src: "/screenshots/settings.png",
    alt: "AyuGuard settings screen",
    label: "Settings",
    caption:
      "Theme, alarm sound, vibration, and independently configurable Journey and Manual SOS timers.",
  },
];
