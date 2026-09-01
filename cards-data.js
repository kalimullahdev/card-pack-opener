// Card Roster and Metadata for Card Pack Opener

const CARDS_DATA = [
  {
    id: "celestial-valkyrie",
    name: "Astrid, Aurora Valkyrie",
    title: "Celestial Sovereign",
    element: "Celestial",
    elementIcon: "✨",
    rarity: "mythic",
    cost: 8,
    attack: 9900,
    defense: 9400,
    lore: "Born from the first starlight, she cleaves darkness with twin blades of pure aurora.",
    ability: "Heaven's Judgment: Purges all enemy buffs and strikes for 250% divine damage.",
    colorTheme: {
      primary: "#f43f5e",
      secondary: "#ec4899",
      accent: "#a855f7",
      glow: "rgba(244, 63, 94, 0.6)",
      holoGradient: "linear-gradient(135deg, #ff71ce, #01cdfe, #05ffa1, #b967ff, #fffb96)"
    },
    svgArt: `
      <svg viewBox="0 0 240 200" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="valkWing" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#fff" />
            <stop offset="40%" stop-color="#f472b6" />
            <stop offset="80%" stop-color="#c084fc" />
            <stop offset="100%" stop-color="#60a5fa" />
          </linearGradient>
          <radialGradient id="auroraGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#fbcfe8" stop-opacity="0.9"/>
            <stop offset="50%" stop-color="#c084fc" stop-opacity="0.5"/>
            <stop offset="100%" stop-color="#3b82f6" stop-opacity="0"/>
          </radialGradient>
        </defs>
        <circle cx="120" cy="100" r="90" fill="url(#auroraGlow)"/>
        <!-- Left Wing -->
        <path d="M120,110 C90,60 40,50 10,70 C30,95 70,115 100,125 C60,110 30,125 20,145 C50,150 90,140 120,135 Z" fill="url(#valkWing)" opacity="0.95"/>
        <!-- Right Wing -->
        <path d="M120,110 C150,60 200,50 230,70 C210,95 170,115 140,125 C180,110 210,125 220,145 C190,150 150,140 120,135 Z" fill="url(#valkWing)" opacity="0.95"/>
        <!-- Halo -->
        <ellipse cx="120" cy="45" rx="35" ry="10" fill="none" stroke="#fef08a" stroke-width="4" filter="drop-shadow(0 0 8px #fde047)"/>
        <!-- Body Armor & Helmet -->
        <path d="M105,75 L135,75 L140,130 L120,165 L100,130 Z" fill="#e2e8f0" stroke="#f8fafc" stroke-width="2"/>
        <path d="M110,80 L130,80 L125,120 L115,120 Z" fill="#38bdf8"/>
        <!-- Helmet Crest -->
        <path d="M120,35 L125,70 L115,70 Z" fill="#fde047"/>
        <circle cx="120" cy="65" r="14" fill="#fed7aa"/>
        <!-- Visor -->
        <path d="M112,62 Q120,58 128,62 Q120,68 112,62 Z" fill="#0284c7"/>
        <!-- Twin Swords -->
        <line x1="85" y1="40" x2="135" y2="175" stroke="#38bdf8" stroke-width="4" stroke-linecap="round"/>
        <line x1="155" y1="40" x2="105" y2="175" stroke="#f472b6" stroke-width="4" stroke-linecap="round"/>
        <!-- Stars -->
        <circle cx="50" cy="40" r="2" fill="#fff" filter="drop-shadow(0 0 3px #fff)"/>
        <circle cx="190" cy="35" r="3" fill="#fff" filter="drop-shadow(0 0 3px #fff)"/>
        <circle cx="30" cy="120" r="1.5" fill="#fff"/>
        <circle cx="210" cy="115" r="2" fill="#fff"/>
      </svg>
    `
  },
  {
    id: "solaris-dragon",
    name: "Solaris the Sunforged",
    title: "Apex Solar Wyrm",
    element: "Fire",
    elementIcon: "🔥",
    rarity: "legendary",
    cost: 7,
    attack: 9500,
    defense: 8200,
    lore: "Carved inside the heart of an erupting star, its breath ignites stellar supernovas.",
    ability: "Solar Flare: Burns all battleground cards for 800 residual fire damage per turn.",
    colorTheme: {
      primary: "#f59e0b",
      secondary: "#ef4444",
      accent: "#fbbf24",
      glow: "rgba(245, 158, 11, 0.6)",
      holoGradient: "linear-gradient(135deg, #f59e0b, #ef4444, #fbbf24, #f97316)"
    },
    svgArt: `
      <svg viewBox="0 0 240 200" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="sunBurst" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#fef08a" stop-opacity="1"/>
            <stop offset="50%" stop-color="#f97316" stop-opacity="0.8"/>
            <stop offset="100%" stop-color="#7c2d12" stop-opacity="0"/>
          </radialGradient>
          <linearGradient id="dragonScales" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#fde047"/>
            <stop offset="50%" stop-color="#ea580c"/>
            <stop offset="100%" stop-color="#991b1b"/>
          </linearGradient>
        </defs>
        <circle cx="120" cy="95" r="85" fill="url(#sunBurst)"/>
        <!-- Corona Rays -->
        <g stroke="#fde047" stroke-width="2" opacity="0.6">
          <line x1="120" y1="5" x2="120" y2="25"/>
          <line x1="120" y1="165" x2="120" y2="185"/>
          <line x1="30" y1="95" x2="50" y2="95"/>
          <line x1="190" y1="95" x2="210" y2="95"/>
          <line x1="55" y1="35" x2="70" y2="50"/>
          <line x1="185" y1="35" x2="170" y2="50"/>
          <line x1="55" y1="155" x2="70" y2="140"/>
          <line x1="185" y1="155" x2="170" y2="140"/>
        </g>
        <!-- Dragon Head & Horns -->
        <path d="M120,40 L145,15 L135,50 L160,35 L145,70 L175,65 L145,90 L165,115 L120,105 L75,115 L95,90 L65,65 L95,70 L80,35 L105,50 L95,15 Z" fill="url(#dragonScales)" stroke="#fef08a" stroke-width="1.5"/>
        <!-- Dragon Snout & Maw -->
        <path d="M100,90 L120,135 L140,90 L130,110 L110,110 Z" fill="#7f1d1d"/>
        <!-- Glowing Eyes -->
        <polygon points="100,75 112,72 108,79" fill="#fff" filter="drop-shadow(0 0 5px #38bdf8)"/>
        <polygon points="140,75 128,72 132,79" fill="#fff" filter="drop-shadow(0 0 5px #38bdf8)"/>
        <!-- Solar Core -->
        <circle cx="120" cy="155" r="18" fill="#fef08a" filter="drop-shadow(0 0 10px #f97316)"/>
        <circle cx="120" cy="155" r="8" fill="#fff"/>
      </svg>
    `
  },
  {
    id: "cosmic-singularity",
    name: "Omniscient Void Eye",
    title: "Harbinger of Infinity",
    element: "Cosmic",
    elementIcon: "🌌",
    rarity: "mythic",
    cost: 10,
    attack: 10000,
    defense: 9800,
    lore: "It observes all timelines simultaneously, collapsing possibilities into absolute entropy.",
    ability: "Event Horizon: Absorbs opposing active spells and copies the highest card stats.",
    colorTheme: {
      primary: "#8b5cf6",
      secondary: "#06b6d4",
      accent: "#f43f5e",
      glow: "rgba(139, 92, 246, 0.7)",
      holoGradient: "linear-gradient(135deg, #00f2fe, #4facfe, #8b5cf6, #ff0844)"
    },
    svgArt: `
      <svg viewBox="0 0 240 200" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="voidCore" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#030712"/>
            <stop offset="40%" stop-color="#1e1b4b"/>
            <stop offset="70%" stop-color="#4c1d95"/>
            <stop offset="90%" stop-color="#06b6d4"/>
            <stop offset="100%" stop-color="#8b5cf6" stop-opacity="0"/>
          </radialGradient>
        </defs>
        <!-- Accretion Ring -->
        <ellipse cx="120" cy="100" rx="95" ry="35" fill="none" stroke="#06b6d4" stroke-width="6" opacity="0.8" transform="rotate(-20 120 100)"/>
        <ellipse cx="120" cy="100" rx="95" ry="35" fill="none" stroke="#ec4899" stroke-width="3" opacity="0.7" transform="rotate(25 120 100)"/>
        <circle cx="120" cy="100" r="65" fill="url(#voidCore)"/>
        <!-- Galactic Swirls -->
        <path d="M120,45 Q160,70 150,110 T90,130" fill="none" stroke="#a78bfa" stroke-width="3" stroke-linecap="round"/>
        <path d="M120,155 Q80,130 90,90 T150,70" fill="none" stroke="#38bdf8" stroke-width="3" stroke-linecap="round"/>
        <!-- Central Cosmic Iris -->
        <ellipse cx="120" cy="100" rx="30" ry="40" fill="#000" stroke="#a855f7" stroke-width="3"/>
        <ellipse cx="120" cy="100" rx="15" ry="25" fill="#3b82f6"/>
        <circle cx="120" cy="100" r="7" fill="#fff" filter="drop-shadow(0 0 8px #fff)"/>
        <!-- Floating Celestial Runes -->
        <circle cx="60" cy="60" r="3" fill="#f43f5e"/>
        <circle cx="180" cy="140" r="3" fill="#06b6d4"/>
        <circle cx="70" cy="145" r="2" fill="#a855f7"/>
        <circle cx="170" cy="55" r="2" fill="#fbbf24"/>
      </svg>
    `
  },
  {
    id: "void-leviathan",
    name: "Abyssal Leviathan",
    title: "Behemoth of the Deep",
    element: "Abyss",
    elementIcon: "🌊",
    rarity: "legendary",
    cost: 7,
    attack: 9200,
    defense: 8800,
    lore: "Dwells within the Mariana Trench of the astral sea, swallowing tidal continents whole.",
    ability: "Tsunami Crash: Drowns enemy board, locking active card abilities for 1 turn.",
    colorTheme: {
      primary: "#0284c7",
      secondary: "#0d9488",
      accent: "#38bdf8",
      glow: "rgba(2, 132, 199, 0.6)",
      holoGradient: "linear-gradient(135deg, #0284c7, #0d9488, #38bdf8, #2dd4bf)"
    },
    svgArt: `
      <svg viewBox="0 0 240 200" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="abyssGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#0c4a6e"/>
            <stop offset="60%" stop-color="#0369a1"/>
            <stop offset="100%" stop-color="#0f766e"/>
          </linearGradient>
        </defs>
        <!-- Deep Sea Bioluminescence Background -->
        <circle cx="120" cy="100" r="85" fill="#082f49" opacity="0.6"/>
        <!-- Serpentine Body -->
        <path d="M40,160 Q80,180 130,150 T200,80 Q180,30 130,50 T60,110" fill="none" stroke="url(#abyssGrad)" stroke-width="26" stroke-linecap="round"/>
        <!-- Dorsal Glowing Spines -->
        <g fill="#22d3ee" filter="drop-shadow(0 0 6px #06b6d4)">
          <polygon points="120,38 125,20 132,40"/>
          <polygon points="145,45 152,25 158,50"/>
          <polygon points="175,65 185,48 185,75"/>
          <polygon points="100,150 95,168 110,152"/>
        </g>
        <!-- Monster Head -->
        <path d="M45,110 Q20,105 15,85 Q35,70 65,80 Q75,100 45,110 Z" fill="#0284c7" stroke="#38bdf8" stroke-width="2"/>
        <!-- Glowing Maw & Bioluminescent dots -->
        <circle cx="35" cy="85" r="4" fill="#67e8f9" filter="drop-shadow(0 0 4px #fff)"/>
        <path d="M22,92 L40,94" stroke="#e0f2fe" stroke-width="2"/>
        <circle cx="70" cy="65" r="2.5" fill="#2dd4bf"/>
        <circle cx="110" cy="60" r="3" fill="#2dd4bf"/>
        <circle cx="160" cy="90" r="3.5" fill="#2dd4bf"/>
        <circle cx="140" cy="140" r="2.5" fill="#2dd4bf"/>
      </svg>
    `
  },
  {
    id: "chrono-sage",
    name: "Aethelgard Chrono-Mage",
    title: "Master of Hours",
    element: "Arcane",
    elementIcon: "⌛",
    rarity: "epic",
    cost: 6,
    attack: 7800,
    defense: 6900,
    lore: "Rewinds lost battles and accelerates decaying spells into devastating temporal storms.",
    ability: "Time Loop: Re-triggers your strongest ability and grants +1000 ATK instantly.",
    colorTheme: {
      primary: "#9333ea",
      secondary: "#6366f1",
      accent: "#c084fc",
      glow: "rgba(147, 51, 234, 0.6)",
      holoGradient: "linear-gradient(135deg, #9333ea, #6366f1, #c084fc, #a855f7)"
    },
    svgArt: `
      <svg viewBox="0 0 240 200" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="chronoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#c084fc"/>
            <stop offset="100%" stop-color="#4f46e5"/>
          </linearGradient>
        </defs>
        <circle cx="120" cy="100" r="80" fill="#2e1065" opacity="0.7"/>
        <!-- Hourglass Structure -->
        <path d="M85,45 L155,45 L135,95 L155,145 L85,145 L105,95 Z" fill="none" stroke="#e9d5ff" stroke-width="4"/>
        <polygon points="95,50 145,50 120,90" fill="url(#chronoGrad)" opacity="0.8"/>
        <polygon points="120,105 140,140 100,140" fill="url(#chronoGrad)" opacity="0.9"/>
        <!-- Golden Time Orbs -->
        <circle cx="120" cy="98" r="4" fill="#fde047" filter="drop-shadow(0 0 6px #eab308)"/>
        <!-- Clock dial ring -->
        <circle cx="120" cy="95" r="68" fill="none" stroke="#a855f7" stroke-dasharray="6,6" stroke-width="2"/>
        <!-- Roman / Arcane Ticks -->
        <line x1="120" y1="30" x2="120" y2="40" stroke="#fde047" stroke-width="3"/>
        <line x1="120" y1="150" x2="120" y2="160" stroke="#fde047" stroke-width="3"/>
        <line x1="55" y1="95" x2="65" y2="95" stroke="#fde047" stroke-width="3"/>
        <line x1="175" y1="95" x2="185" y2="95" stroke="#fde047" stroke-width="3"/>
      </svg>
    `
  },
  {
    id: "cyber-shinobi",
    name: "Shinobi-09 Cyber Phantom",
    title: "Shadow Netrunner",
    element: "Tech",
    elementIcon: "⚡",
    rarity: "epic",
    cost: 5,
    attack: 8400,
    defense: 7100,
    lore: "Infiltrates encrypted cyber-grids, severing core matrices with high-frequency plasma blades.",
    ability: "Ghost Protocol: Cannot be targeted by spells on entry and attacks twice.",
    colorTheme: {
      primary: "#10b981",
      secondary: "#06b6d4",
      accent: "#34d399",
      glow: "rgba(16, 185, 129, 0.6)",
      holoGradient: "linear-gradient(135deg, #10b981, #06b6d4, #a7f3d0, #047857)"
    },
    svgArt: `
      <svg viewBox="0 0 240 200" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="cyberNeon" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#34d399"/>
            <stop offset="100%" stop-color="#06b6d4"/>
          </linearGradient>
        </defs>
        <!-- Cyber grid background -->
        <g stroke="#064e3b" stroke-width="1" opacity="0.6">
          <line x1="40" y1="40" x2="200" y2="40"/>
          <line x1="40" y1="80" x2="200" y2="80"/>
          <line x1="40" y1="120" x2="200" y2="120"/>
          <line x1="40" y1="160" x2="200" y2="160"/>
          <line x1="60" y1="20" x2="60" y2="180"/>
          <line x1="120" y1="20" x2="120" y2="180"/>
          <line x1="180" y1="20" x2="180" y2="180"/>
        </g>
        <!-- Ninja Mask & Visor -->
        <path d="M100,60 L140,60 L148,110 L120,135 L92,110 Z" fill="#0f172a" stroke="#34d399" stroke-width="2"/>
        <path d="M102,78 L138,78 L134,92 L106,92 Z" fill="#06b6d4" filter="drop-shadow(0 0 8px #34d399)"/>
        <!-- Hood & Shoulders -->
        <path d="M80,105 L100,50 L140,50 L160,105 L180,165 L60,165 Z" fill="none" stroke="#10b981" stroke-width="3"/>
        <!-- Dual Cyber Katana -->
        <line x1="45" y1="30" x2="155" y2="170" stroke="#34d399" stroke-width="3.5" filter="drop-shadow(0 0 6px #10b981)"/>
        <line x1="195" y1="30" x2="85" y2="170" stroke="#38bdf8" stroke-width="3.5" filter="drop-shadow(0 0 6px #06b6d4)"/>
      </svg>
    `
  },
  {
    id: "ember-wolf",
    name: "Pyre Wolf",
    title: "Hound of Cinders",
    element: "Fire",
    elementIcon: "🔥",
    rarity: "rare",
    cost: 4,
    attack: 6400,
    defense: 5200,
    lore: "Packs of pyre wolves hunt in volcanic ridges, leaving trails of molten lava.",
    ability: "Pack Frenzy: Gains +1200 ATK for each allied Fire card on the board.",
    colorTheme: {
      primary: "#ea580c",
      secondary: "#dc2626",
      accent: "#f97316",
      glow: "rgba(234, 88, 12, 0.5)",
      holoGradient: "linear-gradient(135deg, #ea580c, #dc2626, #f97316)"
    },
    svgArt: `
      <svg viewBox="0 0 240 200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="120" cy="100" r="75" fill="#450a0a" opacity="0.8"/>
        <!-- Wolf Head Geometry -->
        <polygon points="120,40 150,85 170,45 155,100 165,140 120,165 75,140 85,100 70,45 90,85" fill="#ea580c" stroke="#f97316" stroke-width="2"/>
        <polygon points="120,60 140,95 120,140 100,95" fill="#f97316"/>
        <!-- Glowing Yellow Eyes -->
        <polygon points="102,90 112,87 108,94" fill="#fde047" filter="drop-shadow(0 0 4px #eab308)"/>
        <polygon points="138,90 128,87 132,94" fill="#fde047" filter="drop-shadow(0 0 4px #eab308)"/>
        <!-- Flame aura -->
        <path d="M120,30 Q125,15 130,25 Q135,10 140,30" stroke="#fde047" stroke-width="3" fill="none"/>
      </svg>
    `
  },
  {
    id: "frost-golem",
    name: "Glacier Titan",
    title: "Frozen Sentinel",
    element: "Frost",
    elementIcon: "❄️",
    rarity: "rare",
    cost: 5,
    attack: 6100,
    defense: 8900,
    lore: "Sculpted from ancient permafrost, unyielding to even the hottest dragon flames.",
    ability: "Sub-Zero Barrier: Reduces all incoming damage by 50% for 2 turns.",
    colorTheme: {
      primary: "#0284c7",
      secondary: "#38bdf8",
      accent: "#bae6fd",
      glow: "rgba(56, 189, 248, 0.5)",
      holoGradient: "linear-gradient(135deg, #0284c7, #38bdf8, #bae6fd)"
    },
    svgArt: `
      <svg viewBox="0 0 240 200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="120" cy="100" r="75" fill="#082f49" opacity="0.8"/>
        <!-- Crystal Ice Shards -->
        <polygon points="120,35 150,70 120,105 90,70" fill="#7dd3fc" stroke="#e0f2fe" stroke-width="2"/>
        <polygon points="70,75 100,120 65,150 45,100" fill="#38bdf8" opacity="0.9"/>
        <polygon points="170,75 140,120 175,150 195,100" fill="#38bdf8" opacity="0.9"/>
        <polygon points="120,105 155,160 120,175 85,160" fill="#0284c7"/>
        <circle cx="120" cy="70" r="6" fill="#fff" filter="drop-shadow(0 0 8px #38bdf8)"/>
      </svg>
    `
  },
  {
    id: "shadow-assassin",
    name: "Vesper, Shadow Stalker",
    title: "Nightblade",
    element: "Shadow",
    elementIcon: "🗡️",
    rarity: "rare",
    cost: 4,
    attack: 7100,
    defense: 4800,
    lore: "Steps between shadows without a sound, leaving only a crescent feather behind.",
    ability: "Backstab: Bypasses enemy defense armor completely on first hit.",
    colorTheme: {
      primary: "#6b21a8",
      secondary: "#3b0764",
      accent: "#a855f7",
      glow: "rgba(107, 33, 168, 0.5)",
      holoGradient: "linear-gradient(135deg, #6b21a8, #3b0764, #a855f7)"
    },
    svgArt: `
      <svg viewBox="0 0 240 200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="120" cy="100" r="75" fill="#1e1b4b" opacity="0.8"/>
        <path d="M120,40 C100,60 80,90 85,140 C100,165 140,165 155,140 C160,90 140,60 120,40 Z" fill="#3b0764" stroke="#a855f7" stroke-width="2"/>
        <path d="M105,85 Q120,80 135,85 Q120,92 105,85 Z" fill="#c084fc" filter="drop-shadow(0 0 6px #c084fc)"/>
        <!-- Dagger -->
        <polygon points="120,110 124,155 120,170 116,155" fill="#f8fafc"/>
        <line x1="110" y1="155" x2="130" y2="155" stroke="#a855f7" stroke-width="2"/>
      </svg>
    `
  },
  {
    id: "ironclad-knight",
    name: "Vanguard Protector",
    title: "Shield of the Realm",
    element: "Steel",
    elementIcon: "🛡️",
    rarity: "common",
    cost: 3,
    attack: 4500,
    defense: 6200,
    lore: "Trained in the mountain fortresses, standing firm against relentless armies.",
    ability: "Fortify: Absorbs up to 2000 damage for adjacent allies.",
    colorTheme: {
      primary: "#64748b",
      secondary: "#475569",
      accent: "#94a3b8",
      glow: "rgba(100, 116, 139, 0.4)",
      holoGradient: "linear-gradient(135deg, #64748b, #475569, #94a3b8)"
    },
    svgArt: `
      <svg viewBox="0 0 240 200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="120" cy="100" r="75" fill="#1e293b" opacity="0.8"/>
        <!-- Tower Shield -->
        <path d="M90,50 L150,50 L155,115 L120,160 L85,115 Z" fill="#475569" stroke="#cbd5e1" stroke-width="3"/>
        <path d="M100,60 L140,60 L145,110 L120,145 L95,110 Z" fill="#334155"/>
        <line x1="120" y1="60" x2="120" y2="145" stroke="#cbd5e1" stroke-width="2"/>
        <line x1="95" y1="95" x2="145" y2="95" stroke="#cbd5e1" stroke-width="2"/>
        <circle cx="120" cy="95" r="8" fill="#f59e0b"/>
      </svg>
    `
  },
  {
    id: "arcane-sprite",
    name: "Lumina Fey",
    title: "Grove Whisperer",
    element: "Nature",
    elementIcon: "🌿",
    rarity: "common",
    cost: 2,
    attack: 4200,
    defense: 3800,
    lore: "Tiny guardian of ancient saplings, dancing on rays of morning sunlight.",
    ability: "Nature's Bloom: Restores 1500 HP to your hero upon deployment.",
    colorTheme: {
      primary: "#15803d",
      secondary: "#16a34a",
      accent: "#4ade80",
      glow: "rgba(22, 163, 74, 0.4)",
      holoGradient: "linear-gradient(135deg, #15803d, #16a34a, #4ade80)"
    },
    svgArt: `
      <svg viewBox="0 0 240 200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="120" cy="100" r="75" fill="#052e16" opacity="0.8"/>
        <!-- Fairy Wings -->
        <ellipse cx="95" cy="85" rx="30" ry="15" fill="#86efac" opacity="0.7" transform="rotate(-30 95 85)"/>
        <ellipse cx="145" cy="85" rx="30" ry="15" fill="#86efac" opacity="0.7" transform="rotate(30 145 85)"/>
        <!-- Sprite Body -->
        <circle cx="120" cy="95" r="14" fill="#4ade80" filter="drop-shadow(0 0 8px #22c55e)"/>
        <circle cx="120" cy="95" r="8" fill="#fff"/>
      </svg>
    `
  },
  {
    id: "storm-hawk",
    name: "Thunder Gale Raptor",
    title: "Cloud Stalker",
    element: "Lightning",
    elementIcon: "⚡",
    rarity: "common",
    cost: 3,
    attack: 5100,
    defense: 3900,
    lore: "Dives through storm clouds at Mach speed, charged with raw atmospheric electricity.",
    ability: "Static Shock: Deals 1000 quick damage on summon.",
    colorTheme: {
      primary: "#0284c7",
      secondary: "#0369a1",
      accent: "#38bdf8",
      glow: "rgba(2, 132, 199, 0.4)",
      holoGradient: "linear-gradient(135deg, #0284c7, #0369a1, #38bdf8)"
    },
    svgArt: `
      <svg viewBox="0 0 240 200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="120" cy="100" r="75" fill="#082f49" opacity="0.8"/>
        <!-- Hawk Wings -->
        <path d="M120,110 L60,50 L90,110 L30,85 L85,130 Z" fill="#0284c7" stroke="#38bdf8" stroke-width="1.5"/>
        <path d="M120,110 L180,50 L150,110 L210,85 L155,130 Z" fill="#0284c7" stroke="#38bdf8" stroke-width="1.5"/>
        <!-- Hawk Head & Beak -->
        <polygon points="120,80 135,100 120,120 105,100" fill="#e0f2fe"/>
        <polygon points="120,105 130,125 120,135 110,125" fill="#f59e0b"/>
      </svg>
    `
  }
];

// Helper to look up card by ID
function getCardById(id) {
  return CARDS_DATA.find(card => card.id === id) || CARDS_DATA[0];
}

// Weighted Random Card Picker
function getRandomCard() {
  // Rarity weights: Common (45%), Rare (30%), Epic (18%), Legendary (5%), Mythic (2%)
  const rand = Math.random() * 100;
  let targetRarity = "common";
  if (rand < 2) {
    targetRarity = "mythic";
  } else if (rand < 7) {
    targetRarity = "legendary";
  } else if (rand < 25) {
    targetRarity = "epic";
  } else if (rand < 55) {
    targetRarity = "rare";
  } else {
    targetRarity = "common";
  }

  const pool = CARDS_DATA.filter(c => c.rarity === targetRarity);
  if (pool.length > 0) {
    return pool[Math.floor(Math.random() * pool.length)];
  }
  return CARDS_DATA[Math.floor(Math.random() * CARDS_DATA.length)];
}
