export interface ReleaseInfo {
  version: string;
  tag: string;
  date: string;
  fileName: string;
  downloadUrl: string;
  mirrorDownloadUrl: string;
  githubReleaseUrl: string;
  fileSize: string;
  sha256: string;
  minAndroid: string;
  targetArchitecture: string;
  testedGameVersion: string;
  rootRequirement: string;
  applicationId: string;
  downloadsCount: string;
  changelog: string[];
}

export const CURRENT_RELEASE: ReleaseInfo = {
  version: "1.0.0",
  tag: "v1.0.0",
  date: "November 11, 2026",
  fileName: "PgSphere-NR.apk",
  downloadUrl: "https://github.com/vishu39/PgSphereRN_Web/releases/latest/download/PgSphere-NR.apk",
  mirrorDownloadUrl: "/downloads/PgSphere-NR.apk",
  githubReleaseUrl: "https://github.com/vishu39/PgSphereRN_Web/releases/tag/v1.0.0",
  fileSize: "191.5 MB",
  sha256: "08BD5CB573A25A91FE6F414B9A4412FB415D86F364A77906DF67B3B5B22071DC",
  minAndroid: "Android 10 (API 29) to Android 15",
  targetArchitecture: "ARM64-v8a",
  testedGameVersion: "Pokémon GO 0.435.2",
  rootRequirement: "None (100% Non-Root)",
  applicationId: "com.nianticlabs.pokemongo",
  downloadsCount: "8,920+",
  changelog: [
    "Standalone Non-Root APK architecture — zero root or LSPosed needed",
    "Early ContentProvider bootstrap initiates before Unity engine initializes",
    "Integrated floating in-game HUD overlay for instant on-screen feature control",
    "High-speed C++ IL2CPP memory hooks with zero UI latency",
    "Real-time 100% IV and Great/Ultra PvP League stat overlay on encounters",
    "Smart background Auto-Spin with inventory quota control & auto-pause",
    "Precision Fast Catch bypass with automatic curveball and berry assistance",
    "Direct in-game location engine & joystick without external mock location apps"
  ]
};

export const FEATURES_LIST = [
  {
    id: "nr-native-core",
    title: "Non-Root Standalone Engine",
    category: "Architecture",
    badge: "Zero Root Required",
    description: "Operates directly within the app runtime via a bootstrap ContentProvider. No Magisk, KernelSU, or LSPosed framework required.",
    icon: "ShieldCheck"
  },
  {
    id: "ingame-overlay-menu",
    title: "Floating In-Game HUD Menu",
    category: "User Experience",
    badge: "Integrated UI",
    description: "Access all mod settings, toggles, and live stats without leaving Pokémon GO. Tap the discreet sphere icon to toggle settings on the fly.",
    icon: "Sliders"
  },
  {
    id: "iv-scanner",
    title: "Instant IV & PvP League Scanner",
    category: "Combat & Stats",
    badge: "Encounter Overlay",
    description: "Calculates precise Attack/Defense/Stamina IV stats and Great/Ultra League rankings the millisecond an encounter triggers.",
    icon: "Scan"
  },
  {
    id: "auto-spin",
    title: "Smart Auto-Spin PokéStops",
    category: "Automation",
    badge: "Auto Loop",
    description: "Automatically spins nearby PokéStops and Gym photo disks with randomized human-like intervals and auto-pause when bag is full.",
    icon: "RotateCw"
  },
  {
    id: "fast-catch",
    title: "Precision Fast Catch Assist",
    category: "Capture",
    badge: "Speed Boost",
    description: "Bypass tedious catch animations with customizable ball prioritization, automatic berry feeding, and 100% curveball trajectory.",
    icon: "Target"
  },
  {
    id: "direct-location",
    title: "Direct Location & Joystick",
    category: "Navigation",
    badge: "Built-In GPS",
    description: "Internal location delivery with responsive on-screen joystick, walking speed regulation, and safe cooldown timers without mock location apps.",
    icon: "Compass"
  }
];

export const INSTALL_STEPS = [
  {
    step: "01",
    title: "Download PgSphere-NR APK",
    summary: "Download the latest PgSphere-NR standalone release package directly to your Android device.",
    details: "Tap the download button to save PgSphere-NR.apk to your phone's Downloads folder.",
    badge: "Prerequisite"
  },
  {
    step: "02",
    title: "Allow Unknown Sources & Install",
    summary: "Enable 'Install from Unknown Sources' in your browser or file manager and install the package.",
    details: "If prompted by Google Play Protect, choose 'Install anyway'. Note: If you have the official Play Store version, uninstall it first.",
    badge: "Installation"
  },
  {
    step: "03",
    title: "Grant Overlay Permission",
    summary: "Grant the 'Display over other apps' system permission so the floating mod menu can render over Pokémon GO.",
    details: "Settings -> Apps -> PgSphere-NR -> Display over other apps -> Allowed.",
    badge: "Permission"
  },
  {
    step: "04",
    title: "Launch Game & Enjoy",
    summary: "Open Pokémon GO. The discreet floating PgSphere icon appears instantly. Tap to configure your features.",
    details: "Log in with your Pokémon Trainer Club (PTC) or Google browser account. Burner/spare account strongly recommended.",
    badge: "Ready to Play"
  }
];

export const FAQS = [
  {
    q: "Do I need a rooted phone to run PgSphere-NR?",
    a: "No! That is the defining advantage of PgSphere-NR. It is engineered specifically for phones without root. You do NOT need Magisk, KernelSU, APatch, or LSPosed. Any stock, unrooted 64-bit Android phone can run it."
  },
  {
    q: "How does PgSphere-NR work without root?",
    a: "Unlike the rooted edition which relies on the LSPosed Zygisk framework, PgSphere-NR injects a tiny bootstrap ContentProvider and native C++ library directly into the game package. Android automatically starts the ContentProvider before the main game engine, allowing IL2CPP hooks and our floating menu to run seamlessly."
  },
  {
    q: "Do I need to uninstall the original Pokémon GO from Play Store first?",
    a: "Yes. Android requires all apps with the same package identifier or updates to have matching signing keys. Because PgSphere-NR is signed with a custom key for non-root execution, you must uninstall the official Play Store version before installing PgSphere-NR."
  },
  {
    q: "Which account login methods are supported?",
    a: "Pokémon Trainer Club (PTC) accounts work out of the box with zero configuration. Google login works via the integrated browser-based sign-in flow. We strongly advise using a spare or burner account for any testing."
  },
  {
    q: "Which Android versions and architectures are supported?",
    a: "PgSphere-NR is compiled for 64-bit ARM64-v8a devices running Android 10, 11, 12, 13, 14, and 15. Older 32-bit (armeabi-v7a) phones are not supported."
  },
  {
    q: "Does PgSphere-NR require a separate Mock Location app?",
    a: "No! Because PgSphere-NR runs inside the game process, location delivery is handled internally by the mod. You do not need to enable 'Select mock location app' in Android Developer Options."
  },
  {
    q: "How do game updates work?",
    a: "Whenever Pokémon GO releases a major game update, a new build of PgSphere-NR is published matching the new game version. You simply download and install the new update APK."
  }
];
