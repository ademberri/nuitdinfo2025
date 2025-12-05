export interface Attack {
  name: string
  type: "health" | "privacy" | "gold" | "sanity"
  damage: number
  icon: string
  description: string
}

export interface PlayerCard {
  name: string
  type: string
  description: string
}

export interface Minigame {
  type: "minesweeper" | "dino" | "snake" | "invaders"
  title: string
  instruction: string
}

export interface Boss {
  name: string
  subtitle: string
  type: string
  health: number
  attacks: Attack[] // Changed from single attack to array
  counter: PlayerCard
  minigame: Minigame
  color: string
  secondaryColor: string
  icon: string
  tagline: string
}

export const BOSSES: Boss[] = [
  {
    name: "MICRO-SOFT",
    subtitle: "The Monopolist",
    type: "microsoft",
    health: 100,
    attacks: [
      {
        name: "FORCED UPDATE",
        type: "health",
        damage: 25,
        icon: "download",
        description: "Rebooting in 3... 2... 1...",
      },
      { name: "BLUE SCREEN", type: "sanity", damage: 20, icon: "monitor", description: "Your PC ran into a problem" },
      { name: "CORTANA SPAM", type: "sanity", damage: 15, icon: "mic", description: "Hi! I'm Cortana!" },
      { name: "EDGE INJECTION", type: "health", damage: 22, icon: "globe", description: "Set Edge as default?" },
    ],
    counter: {
      name: "DEBIAN STABLE",
      type: "debian",
      description: "Unbreakable stability",
    },
    minigame: {
      type: "minesweeper",
      title: "MINESWEEPER",
      instruction: "Click 3 safe squares to win!",
    },
    color: "#00A4EF",
    secondaryColor: "#7FBA00",
    icon: "window",
    tagline: "RESISTANCE IS FUTILE. UPDATE NOW.",
  },
  {
    name: "GOGGLE",
    subtitle: "The All-Seeing Eye",
    type: "google",
    health: 100,
    attacks: [
      { name: "AD TRACKER", type: "privacy", damage: 30, icon: "eye", description: "We know what you did..." },
      { name: "CAPTCHA LOOP", type: "sanity", damage: 18, icon: "image", description: "Select all traffic lights" },
      { name: "DATA HARVEST", type: "privacy", damage: 28, icon: "database", description: "Collecting everything..." },
      { name: "YOUTUBE ADS", type: "sanity", damage: 22, icon: "play", description: "Skip in 30 seconds..." },
    ],
    counter: {
      name: "FIREFOX + UBLOCK",
      type: "firefox",
      description: "The Privacy Shield",
    },
    minigame: {
      type: "dino",
      title: "TRACKER ESCAPE",
      instruction: "Jump over 3 cactuses to escape!",
    },
    color: "#EA4335",
    secondaryColor: "#FBBC05",
    icon: "eye",
    tagline: "WE KNOW EVERYTHING. WE SEE EVERYTHING.",
  },
  {
    name: "FRUIT CO.",
    subtitle: "The Walled Garden",
    type: "apple",
    health: 100,
    attacks: [
      { name: "DONGLE HELL", type: "gold", damage: 20, icon: "usb", description: "You need another adapter" },
      { name: "PLANNED OBSOLESCENCE", type: "gold", damage: 25, icon: "battery", description: "Battery health: 12%" },
      { name: "GENIUS BAR BILL", type: "gold", damage: 35, icon: "receipt", description: "$999 for a stand" },
      { name: "ECOSYSTEM LOCK", type: "health", damage: 18, icon: "lock", description: "Works only with iPhone" },
    ],
    counter: {
      name: "FRAMEWORK LAPTOP",
      type: "framework",
      description: "Right to Repair",
    },
    minigame: {
      type: "snake",
      title: "REPAIR SNAKE",
      instruction: "Eat 5 apples without hitting walls!",
    },
    color: "#A3AAAE",
    secondaryColor: "#555555",
    icon: "apple",
    tagline: "YOU WILL BUY. YOU WILL COMPLY.",
  },
  {
    name: "FACE-BOOK",
    subtitle: "The Mind Harvester",
    type: "facebook",
    health: 100,
    attacks: [
      { name: "DOOM SCROLL", type: "sanity", damage: 25, icon: "scrollText", description: "Just one more post..." },
      { name: "FAKE NEWS", type: "sanity", damage: 28, icon: "newspaper", description: "Misinformation spreading..." },
      { name: "PRIVACY LEAK", type: "privacy", damage: 30, icon: "unlock", description: "Data sold to advertisers" },
      { name: "METAVERSE TRAP", type: "gold", damage: 22, icon: "headset", description: "Buy virtual land!" },
    ],
    counter: {
      name: "MASTODON",
      type: "mastodon",
      description: "Federated Freedom",
    },
    minigame: {
      type: "invaders",
      title: "LIKE INVADERS",
      instruction: "Shoot down 5 Like icons!",
    },
    color: "#1877F2",
    secondaryColor: "#42B72A",
    icon: "thumbsDown",
    tagline: "YOUR DATA FEEDS THE MACHINE.",
  },
  {
    name: "AMAZ0N",
    subtitle: "The Warehouse Overlord",
    type: "amazon",
    health: 100,
    attacks: [
      { name: "PRIME ADDICTION", type: "gold", damage: 30, icon: "package", description: "Free shipping if you..." },
      { name: "WAREHOUSE CRUNCH", type: "health", damage: 22, icon: "timer", description: "15 min break denied" },
      { name: "ALEXA LISTENING", type: "privacy", damage: 25, icon: "mic", description: "Always recording..." },
      { name: "COUNTERFEIT FLOOD", type: "gold", damage: 20, icon: "copy", description: "Fake products everywhere" },
    ],
    counter: {
      name: "LOCAL SHOP",
      type: "local",
      description: "Support small business",
    },
    minigame: {
      type: "snake",
      title: "WAREHOUSE ESCAPE",
      instruction: "Collect 5 packages without getting caught!",
    },
    color: "#FF9900",
    secondaryColor: "#232F3E",
    icon: "package",
    tagline: "CONSUME. SUBSCRIBE. OBEY.",
  },
  {
    name: "X-CORP",
    subtitle: "The Chaos Engine",
    type: "twitter",
    health: 100,
    attacks: [
      {
        name: "ALGORITHM MANIPULATION",
        type: "sanity",
        damage: 25,
        icon: "shuffle",
        description: "Boosting rage bait...",
      },
      {
        name: "VERIFICATION SCAM",
        type: "gold",
        damage: 20,
        icon: "badgeCheck",
        description: "$8/month for a checkmark",
      },
      { name: "BOT ARMY", type: "sanity", damage: 22, icon: "bot", description: "Fake engagement rising" },
      { name: "API PAYWALL", type: "gold", damage: 28, icon: "lock", description: "$42,000/month for access" },
    ],
    counter: {
      name: "RSS FEEDS",
      type: "rss",
      description: "Chronological freedom",
    },
    minigame: {
      type: "invaders",
      title: "TWEET STORM",
      instruction: "Shoot down 5 toxic tweets!",
    },
    color: "#000000",
    secondaryColor: "#1DA1F2",
    icon: "x",
    tagline: "FREE SPEECH*. *TERMS APPLY.",
  },
  {
    name: "ORACLE",
    subtitle: "The License Reaper",
    type: "oracle",
    health: 100,
    attacks: [
      { name: "LICENSE AUDIT", type: "gold", damage: 35, icon: "scale", description: "We found a violation..." },
      { name: "JAVA TRAP", type: "health", damage: 20, icon: "coffee", description: "Update required to continue" },
      { name: "VENDOR LOCK-IN", type: "gold", damage: 28, icon: "chain", description: "Migration will cost more" },
      { name: "ENTERPRISE FEES", type: "gold", damage: 32, icon: "building", description: "Per-core licensing" },
    ],
    counter: {
      name: "POSTGRESQL",
      type: "postgres",
      description: "True open source DB",
    },
    minigame: {
      type: "minesweeper",
      title: "LICENSE MINEFIELD",
      instruction: "Avoid 3 license violations!",
    },
    color: "#F80000",
    secondaryColor: "#312D2A",
    icon: "scale",
    tagline: "PAY UP OR SHUT DOWN.",
  },
  {
    name: "ADOBE",
    subtitle: "The Subscription Vampire",
    type: "adobe",
    health: 100,
    attacks: [
      { name: "SUBSCRIPTION TRAP", type: "gold", damage: 28, icon: "creditCard", description: "Cancel fee: $500" },
      { name: "CLOUD HOSTAGE", type: "gold", damage: 25, icon: "cloud", description: "Your files are ours now" },
      { name: "FEATURE REMOVAL", type: "health", damage: 18, icon: "trash", description: "This feature is now paid" },
      { name: "AI THEFT", type: "privacy", damage: 30, icon: "sparkles", description: "Training on your art..." },
    ],
    counter: {
      name: "GIMP + INKSCAPE",
      type: "foss",
      description: "Free creative tools",
    },
    minigame: {
      type: "dino",
      title: "CANCEL ESCAPE",
      instruction: "Dodge 3 cancel fee pop-ups!",
    },
    color: "#FF0000",
    secondaryColor: "#330000",
    icon: "creditCard",
    tagline: "CANCEL? THAT'LL COST YOU.",
  },
]

export function getRandomAttack(boss: Boss): Attack {
  const randomIndex = Math.floor(Math.random() * boss.attacks.length)
  return boss.attacks[randomIndex]
}

export const DECOY_CARDS: PlayerCard[] = [
  { name: "VIM MASTER", type: "vim", description: "Exit if you can" },
  { name: "GPG KEY", type: "gpg", description: "Encrypt everything" },
  { name: "TOR BROWSER", type: "tor", description: "Anonymity layer" },
  { name: "DDOS ATTACK", type: "ddos", description: "Overwhelm servers" },
  { name: "VPN SHIELD", type: "vpn", description: "Hide your tracks" },
  { name: "OPEN SOURCE LEAK", type: "leak", description: "Expose the code" },
  { name: "LINUX KERNEL", type: "kernel", description: "Core power" },
  { name: "GIT BLAME", type: "git", description: "Find the culprit" },
  { name: "LOCAL SHOP", type: "local", description: "Support small business" },
  { name: "RSS FEEDS", type: "rss", description: "Chronological freedom" },
  { name: "POSTGRESQL", type: "postgres", description: "True open source DB" },
  { name: "GIMP + INKSCAPE", type: "foss", description: "Free creative tools" },
]

export function generateRandomHand(correctCard: PlayerCard): { hand: PlayerCard[]; correctIndex: number } {
  // Shuffle decoys and pick 2 (exclude the correct card type)
  const shuffledDecoys = [...DECOY_CARDS]
    .filter((card) => card.type !== correctCard.type)
    .sort(() => Math.random() - 0.5)
  const decoys = shuffledDecoys.slice(0, 2)

  // Random position for correct card (0, 1, or 2)
  const correctIndex = Math.floor(Math.random() * 3)

  // Build hand with correct card at random position
  const hand: PlayerCard[] = []
  let decoyIndex = 0

  for (let i = 0; i < 3; i++) {
    if (i === correctIndex) {
      hand.push(correctCard)
    } else {
      hand.push(decoys[decoyIndex])
      decoyIndex++
    }
  }

  return { hand, correctIndex }
}
