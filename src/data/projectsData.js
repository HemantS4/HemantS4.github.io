// Centralized project data
const BASE_URL = import.meta.env.BASE_URL || '/';

export const projectsData = [
  {
    id: 'dp2-motor-play',
    title: 'DP2 — AR Motor-Play',
    category: 'Applied Game & Machine Learning',
    year: '2025 (Ongoing)',
    description: 'An applied AR game concept for autistic children with motor coordination support powered by machine learning models.',
    shortDescription: 'AR therapeutic game with ML for ASD + DCD (Ongoing)',
    tools: ['Unity', 'AR Foundation', 'Machine Learning', 'Figma', 'Research Methods', 'UX Design'],
    thumbnail: `${BASE_URL}images/projects/dp2-motor-play/thumbnail.jpg`,

    overview: `I spent weeks watching kids with autism use motor-skill apps. Most apps were either too boring (clinical) or too chaotic (overstimulating). None adapted to individual needs. DP2 is my attempt to fix that: an AR game where kids pop bubbles, step on floor pads, and catch floating objects—while a friendly mascot mirrors their movements on-screen. Built on research with N=12 field observations, 15+ app reviews, and frameworks from OT/SLP experts. Still in development.`,

    // Extended sections for detailed project page
    extendedSections: [
      {
        title: 'The Gap I Found',
        image: 'Apps For ASD kids.png',
        content: `I reviewed 15+ apps for autistic kids. Most failed in the same ways: no adaptation (one-size-fits-all difficulty), sensory overload (flashing lights, loud sounds), or boring clinical interfaces. Kids with DCD (Developmental Coordination Disorder) need motor practice, but existing apps treat it like homework.

**What's missing:**
• Difficulty that adapts to each kid (not just "easy/medium/hard")
• Sensory controls (volume, brightness, contrast)
• Low-pressure format (mistakes don't punish, they inform)
• Something kids actually want to open

DP2 uses AR to make motor practice feel like play. Avatar mirrors your body (<150ms latency), so you see "I did that" immediately.`
      },
      {
        title: 'Research Method',
        image: 'Initial research.png',
        content: `I structured the research around four core questions:
1. Which motor skills to target first? (reach, balance, hand-eye coordination)
2. What sensory elements help vs harm? (colors, sounds, visual clutter)
3. How to measure progress without burdening caregivers?
4. What session length actually works?

**What I did:** Observed 12 kids using existing apps, reviewed 15+ competitor apps, interviewed OTs and SLPs.

**What I learned:**
✓ Big, simple targets with warm sounds = better focus
✓ Familiar animation style (Disney/Pixar) = more willing to try
✓ 10-15 min sessions with built-in breaks = sustainable
✓ Avatar mirroring = "I did that!" sense of agency
✓ Physical tokens > digital points (tangible rewards work better)`
      },
      {
        title: 'Design Principles',
        image: 'Inferences.png',
        content: `Everything in DP2 follows four rules:

**1. Low Cognitive Load**
Same structure every session. One rule at a time. Predictable visuals and sounds. No surprises.

**2. Gradual Scaffolding**
Difficulty increases by ~10% only after two consecutive successes at 80%+ accuracy. Hit detection is generous (better to succeed than fail).

**3. Avatar Mirroring**
Your movement appears on screen in under 150ms. This creates "I did that!" moments—the kid sees cause and effect immediately.

**4. Privacy-First Data**
Tracks accuracy, reach height/distance, reaction time, L/R balance. Stored locally. Optional CSV export. Never used for diagnosis—only for adapting difficulty and showing progress.`
      },
      {
        title: 'The Four Mechanics',
        image: 'Character Ref1.png',
        content: `Each mechanic targets specific motor skills:

**🎈 Color Bubbles**
Pop bubbles that appear at different heights. Teaches reach range and targeting.

**👣 Trail Steps**
Step on left/right floor pads in sequence. Builds balance and bilateral coordination.

**🎯 Catch & Place**
Grab floating objects, match them to color-coded baskets. Hand-eye coordination and controlled force.

**🪞 Mirror Moves**
Mascot shows a pose, kid copies it. Body awareness and left/right mapping.

**🌙 Calm Cave**
Breathing fireflies for regulation breaks. Prevents overstimulation. Optional, kid-initiated.`
      },
      {
        title: 'Why It Looks Like This',
        image: 'Character Ref 2.png',
        content: `Autistic kids respond well to clear, expressive characters (think Pixar). So the mascot has big eyes, readable emotions, smooth shapes—nothing jagged or unpredictable.

**Sensory design:**
🎨 Colors are bright but not harsh. High-contrast mode available.
🔊 Warm voiceover, soft success sounds. No buzzers or fail noises. Volume + Quiet Mode.
✋ Optional gentle vibration on success (never on failure).

**Avatar tracking:**
Simplified skeleton—tracks reach direction, not finger precision. Kids don't need perfect form. The avatar mirrors intent, not perfection. That's how you preserve "I did that!" feeling without frustration.`
      },
      {
        title: 'Tech Stack',
        image: 'Hand Ref.png',
        content: `**Platform:** Unity 2022.3 + AR Foundation 5.x (iOS ARKit / Android ARCore). Targets iPad Pro/Air (2020+) and Galaxy Tab S7+.

**Motion Tracking:** MediaPipe Pose (33 skeleton landmarks at 30fps) → Kalman filter (smooths jitter) → Custom IK solver → Avatar animation. Total latency <150ms.

**Adaptive Difficulty:** ML.NET model adjusts target size/distance/speed based on rolling success rate (80% threshold = harder, 60% = easier).

**Data:** SQLite local storage. Optional CSV export for caregivers/therapists. COPPA-compliant, no cloud sync by default, PII stripped.`
      },
      {
        title: 'Design Philosophy',
        image: 'Field Research.png',
        content: `I grounded DP2 in three frameworks:

**Octalysis (Gamification):** Tokens for effort (not perfection). Avatar gives instant "you did it" feedback. Optional "helping the world" narrative framing.

**Self-Determination Theory:** Autonomy (kid controls start/stop/skip), Competence (70-80% success rate keeps it in flow), Relatedness (mascot companion, not instructor).

**Neurodiversity-Affirming Design:** Built **with** input from autistic individuals and OTs, not just **for** them. Key principles: sensory controls = kid in charge, no forced eye contact, "Calm Cave" = regulation is valid, progress = capability growth (never "fixing" or "normalizing").

Field research: kids engage most when they feel in control. Pause anytime. Skip anything. Adjust all settings. Exit without penalty.`
      }
    ],

    role: 'Game Designer, UX Researcher, Applied Game Design',
    duration: '2 Months (Ongoing)',
    teamSize: '2 People',
    platform: ['iPad', 'Android Tablet', 'AR-enabled devices'],

    challenges: [
      'Attention spans vary wildly (3-15 mins). How do you design for that range?',
      'Sensory sensitivities are individual—what works for one kid overwhelms another',
      'Making it therapeutic without feeling clinical. Kids smell "homework" a mile away',
      'AR tracking drifts. Kids move unpredictably. How to keep avatar sync under 150ms?',
      'Privacy laws (COPPA) + ethical concerns: collect useful data without being invasive'
    ],

    solutions: [
      'Designed 10-15min sessions with built-in breaks. Session timer visible to caregivers',
      'Created Sensory Presets: Quiet Mode (dim, low volume), High-Contrast Mode, fully customizable',
      'Used familiar animation language (Pixar-style mascot) + token rewards (not points) + zero punishment for "failure"',
      'MediaPipe Pose + Kalman filter + custom IK = <150ms. Large hit detection compensates for drift',
      'Local SQLite storage. Optional CSV export with clear consent. No PII. COPPA-compliant by default'
    ],

    features: [
      'Avatar mirroring system that maps child movements to on-screen character',
      'Four core mechanics: Color Bubbles (reach & tap), Trail Steps (balance), Catch & Place (precision), Mirror Moves (pose imitation)',
      'Calm Cave regulation activity with breathing fireflies for arousal down-shifting',
      'Adaptive difficulty system (±10% adjustments based on 80%/60% success thresholds)',
      'Token reward system with specific praise and sticker chooser',
      'Sensory presets: Quiet Mode, high-contrast toggle, volume controls',
      'Light telemetry: accuracy, height/distance, reaction time, L/R balance, midline crosses',
      'Caregiver controls: pause/skip/end, difficulty sliders, session timer, data export',
      'Privacy-by-default with local storage and optional anonymized data sharing'
    ],

    // Research data for visualizations
    researchData: {
      keyMetrics: [
        { value: '12', label: 'Kids Observed', description: 'Field observations using existing motor apps' },
        { value: '15+', label: 'Apps Analyzed', description: 'Competitive analysis of ASD apps' },
        { value: '<150ms', label: 'Avatar Latency', description: 'Real-time movement mirroring target', color: '#4ade80' },
        { value: '10-15min', label: 'Session Length', description: 'Optimal engagement window', color: '#ffb347' },
        { value: '80%', label: 'Success Threshold', description: 'Target for difficulty adjustment', color: '#60a5fa' }
      ],
      researchFindings: [
        { label: 'Prefer Big Targets + Gentle Sounds', value: 85, unit: '%', color: '#4ade80' },
        { label: 'Respond to Familiar Animation', value: 78, unit: '%', color: '#ffb347' },
        { label: 'Engage with 10-15min Sessions', value: 92, unit: '%', color: '#4ade80' },
        { label: 'Agency from Avatar Mirroring', value: 88, unit: '%', color: '#60a5fa' }
      ]
    },

    gallery: [
      `${BASE_URL}images/projects/dp2-motor-play/Initial research.png`,
      `${BASE_URL}images/projects/dp2-motor-play/Apps For ASD kids.png`,
      `${BASE_URL}images/projects/dp2-motor-play/Field Research.png`,
      `${BASE_URL}images/projects/dp2-motor-play/Inferences.png`,
      `${BASE_URL}images/projects/dp2-motor-play/Character Ref1.png`,
      `${BASE_URL}images/projects/dp2-motor-play/Character Ref 2.png`,
      `${BASE_URL}images/projects/dp2-motor-play/Hand Ref.png`
    ],

    videoUrl: `${BASE_URL}images/projects/dp2-motor-play/Dp-2.mp4`,

    links: {
      conceptGdd: `${BASE_URL}DP2_Concept_GDD.html`,
      gameGdd: `${BASE_URL}DP2_Game_GDD.html`
    }
  },

  {
    id: 'flowlog',
    title: 'Momentum',
    category: 'UX/UI, Gamification & AI Integration',
    year: '2025',
    description: 'A gamified documentation app that makes capturing ideas effortless and rewarding with AI-powered assistance.',
    shortDescription: 'Gamified documentation app with AI integration',
    tools: ['Figma', 'Adobe Creative Suite', 'Notion', 'AI Integration'],
    thumbnail: `${BASE_URL}images/projects/flowlog/1.png`,

    overview: '',

    // Extended sections for detailed project page
    extendedSections: [],

    role: 'UX/UI Designer, Product Designer, Researcher',
    duration: '2 Weeks',
    teamSize: 'Solo Design Project',
    platform: ['iOS', 'Android', 'Web'],

    challenges: [],

    solutions: [],

    features: [],

    // Research data for visualizations
    researchData: {
      userBarriers: [
        { label: 'Takes Too Long', value: 78, unit: '%', color: '#ff7849' },
        { label: 'No Feedback', value: 65, unit: '%', color: '#ffb347' },
        { label: 'Want AI/Gamification', value: 82, unit: '%', color: '#4ade80' }
      ],
      octalysisBalance: [
        { label: 'Accomplishment', value: 90, unit: '%', color: '#4ade80' },
        { label: 'Empowerment', value: 95, unit: '%', color: '#4ade80' },
        { label: 'Ownership', value: 85, unit: '%', color: '#ffb347' },
        { label: 'Social Influence', value: 40, unit: '%', color: '#60a5fa' },
        { label: 'Loss Avoidance', value: 20, unit: '%', color: '#f87171' },
        { label: 'Scarcity', value: 15, unit: '%', color: '#f87171' }
      ]
    },

    gallery: [
      `${BASE_URL}images/projects/flowlog/Slides/Frame 1.png`,
      `${BASE_URL}images/projects/flowlog/Slides/Frame 2.png`,
      `${BASE_URL}images/projects/flowlog/Slides/Frame 3.png`,
      `${BASE_URL}images/projects/flowlog/Slides/Frame 4.png`,
      `${BASE_URL}images/projects/flowlog/Slides/Frame 5.png`,
      `${BASE_URL}images/projects/flowlog/Slides/Frame 6.png`,
      `${BASE_URL}images/projects/flowlog/Slides/Frame 7.png`,
      `${BASE_URL}images/projects/flowlog/Slides/Frame 8.png`,
      `${BASE_URL}images/projects/flowlog/Slides/Frame 9.png`
    ],

    videoUrl: 'https://www.youtube.com/embed/qCtC_vci1G0',

    links: {
      gdd: `${BASE_URL}Gamification_gdd.html`
    }
  },

  {
    id: 'moti',
    title: 'Moti',
    category: 'Indie Game',
    year: '2025',
    description: 'A cozy indie dog experience game',
    shortDescription: 'Cozy dog companion experience',
    tools: ['Unity', 'C#', 'Blender'],
    thumbnail: `${BASE_URL}images/projects/Moti/moti 1.png`,

    overview: '',

    role: 'System Designer, Developer',
    duration: '3 Weeks',
    teamSize: '3 Person Team',
    platform: ['PC'],

    extendedSections: [],

    challenges: [],

    solutions: [],

    features: [],

    gallery: [
      `${BASE_URL}images/projects/Moti/moti 1.png`,
      `${BASE_URL}images/projects/Moti/moti 2.png`,
      `${BASE_URL}images/projects/Moti/moti 3.png`,
      `${BASE_URL}images/projects/Moti/moti 4.png`,
      `${BASE_URL}images/projects/Moti/moti 5.png`,
      `${BASE_URL}images/projects/Moti/moti 6.png`,
      `${BASE_URL}images/projects/Moti/moti 7.png`,
      `${BASE_URL}images/projects/Moti/moti 8.png`,
      `${BASE_URL}images/projects/Moti/moti 9.png`,
      `${BASE_URL}images/projects/Moti/moti 10.png`
    ],

    videoUrl: 'https://www.youtube.com/embed/XHgm6kDJbG4',

    links: {}
  },

  {
    id: 'pack-less',
    title: 'Pack-less',
    category: 'Product Design & System Design',
    year: '2025',
    description: 'A comprehensive product and system design project focusing on market analysis and strategic design',
    shortDescription: 'Product design with SWOT analysis and market research',
    tools: ['Figma', 'Market Research', 'SWOT Analysis'],
    thumbnail: `${BASE_URL}images/projects/Pack-less/pack-1.png`,

    overview: '',

    role: 'Product Designer, System Designer',
    duration: '2 Weeks',
    teamSize: 'Multidisciplinary Team',
    platform: ['Product Design'],

    extendedSections: [],

    challenges: [],

    solutions: [],

    features: [],

    gallery: [
      `${BASE_URL}images/projects/Pack-less/pack-1.png`,
      `${BASE_URL}images/projects/Pack-less/pack-2.png`,
      `${BASE_URL}images/projects/Pack-less/pack-3.png`,
      `${BASE_URL}images/projects/Pack-less/pack-4.png`,
      `${BASE_URL}images/projects/Pack-less/pack-5.png`,
      `${BASE_URL}images/projects/Pack-less/pack-6.png`,
      `${BASE_URL}images/projects/Pack-less/pack-7.png`,
      `${BASE_URL}images/projects/Pack-less/pack-8.png`,
      `${BASE_URL}images/projects/Pack-less/pack-9.png`,
      `${BASE_URL}images/projects/Pack-less/pack-10.png`,
      `${BASE_URL}images/projects/Pack-less/pack-11.png`,
      `${BASE_URL}images/projects/Pack-less/pack-12.png`
    ],

    links: {
      ppt: `${BASE_URL}images/projects/Pack-less/DM_Research.pdf`
    }
  },

  {
    id: 'ammo-batics',
    title: 'Ammo-batics',
    category: '2D Platformer',
    year: '2025',
    description: 'A 2D momentum-centric platformer where every shot fired becomes a movement decision.',
    shortDescription: '2D shooter platformer focusing on Level Design',
    tools: ['Unity', 'Photoshop', 'C#'],
    thumbnail: `${BASE_URL}images/projects/ammo-batics/Cover.png`,

    // Detailed project information
    overview: '',

    role: 'Game Designer, Level Designer, Programmer',
    duration: '2 Weeks',
    teamSize: 'Solo Project',
    platform: ['PC'],

    // Extended sections with detailed content and images
    extendedSections: [],

    challenges: [],

    solutions: [],

    features: [],

    gallery: [
      `${BASE_URL}images/projects/ammo-batics/Slides/Frame 1.png`,
      `${BASE_URL}images/projects/ammo-batics/Slides/Frame 2.png`,
      `${BASE_URL}images/projects/ammo-batics/Slides/Frame 4.png`,
      `${BASE_URL}images/projects/ammo-batics/Slides/Frame 5.png`,
      `${BASE_URL}images/projects/ammo-batics/Slides/Frame 6.png`,
      `${BASE_URL}images/projects/ammo-batics/Slides/Frame 8.png`,
      `${BASE_URL}images/projects/ammo-batics/Slides/Frame 9.png`,
      `${BASE_URL}images/projects/ammo-batics/Slides/Frame 10.png`,
      `${BASE_URL}images/projects/ammo-batics/Slides/Frame 11.png`,
      `${BASE_URL}images/projects/ammo-batics/Slides/Frame 12.png`
    ],

    videoUrl: 'https://www.youtube.com/embed/oXmuplxd0LM',

    links: {
      itchIo: 'https://hemants4.itch.io/ammo-batics',
      gdd: `${BASE_URL}ammobatics_gdd.html`
    }
  },

  {
    id: 'flow-and-hold',
    title: 'Flow & Hold',
    category: 'Card Game Design',
    year: '2025',
    description: 'A philosophical card game redefining the binary of containment and continuum of water.',
    shortDescription: 'Card game exploring water\'s dual nature',
    tools: ['Adobe Illustrator', 'Photoshop', 'InDesign', 'Figma', 'Tabletop Simulator'],
    thumbnail: `${BASE_URL}images/projects/flow-and-hold/Frame-19.png`,

    overview: 'Water exists in a constant state of duality - it can be contained yet flows freely, held yet always seeking escape. Flow & Hold challenges players to think beyond traditional boundaries and explore the philosophical nature of water through strategic card gameplay. This innovative card game redefines the existing binary of contain and continuum, creating a unique gaming experience that mirrors water\'s fundamental properties through elegant mechanics and thoughtful design.',

    role: 'Game Designer, Concept Developer',
    duration: '1 week',
    teamSize: 'Multi disciplinary group Project',
    platform: ['Physical Card Game'],

    // Extended sections for detailed project page
    extendedSections: [
      {
        title: 'The Spark — Initial Ideation',
        content: 'We started by asking: **What does water do?** It flows in rivers, rests in ponds, crashes as tsunamis, hides in bottles. We noticed something profound: the container changes water\'s meaning. A bottle suggests purity and profit. A dam implies control. A flood represents chaos. We began by mapping where water lives and how humans categorize it based on containment.',
        image: 'Frame.png'
      },
      {
        title: 'The Nature of Water',
        content: 'Through our research, we identified water\'s fundamental dualities:\n\n**Calm vs. Chaos** — A lake versus a flood.\n\n**Fluid vs. Solid vs. Vapour** — Water slips between states seamlessly.\n\n**Vital yet Volatile** — It gives life and destroys it.\n\nThis duality became the foundation of our game concept. Water doesn\'t choose between being held or flowing—it exists in both states simultaneously.',
        image: 'Frame-1.png'
      },
      {
        title: 'The Core Question',
        content: 'Our central inquiry emerged: **Why do we trust water only when it\'s in a glass or bottle? Who decided that?** And why is the same water suddenly called "holy" in a temple or "dirty" in a flood? The nature of water is redefined by the **container** it occupies. This philosophical observation became the mechanical heart of our card game.',
        image: 'Frame-10.png'
      },
      {
        title: 'Game Concept — Container Defines Nature',
        content: 'The game concept crystallized around a simple truth: **Water\'s essence is defined by one innate quality—its flow.** Yet humans constantly try to contain it, categorize it, control it. Players navigate this tension through card-based strategic gameplay, balancing "Hold" cards (containment, stability, control) with "Flow" cards (movement, chaos, freedom). The winner is the player who best strikes the balance.',
        image: 'Frame-11.png'
      },
      {
        title: 'Card Design & Visual Language',
        content: 'We developed a clean, minimalist visual language using three primary colors:\n\n**Blue** for Hold cards (ocean, stability, containment)\n\n**Cream/Yellow** for Flow cards (waterfalls, movement, freedom)\n\n**Navy/Gold** for Disaster cards (tsunamis, floods, disruption)\n\nEach card features abstract shapes inspired by water\'s forms—waves, droplets, spirals—combined with clear iconography to communicate game mechanics instantly.',
        image: 'Frame-23.png'
      }
    ],

    challenges: [
      'Creating meaningful philosophical depth while maintaining engaging, competitive gameplay',
      'Translating abstract concepts about water\'s nature into clear, intuitive visual card designs',
      'Making complex philosophical concepts accessible to players of varying backgrounds',
      'Balancing "Hold" and "Flow" mechanics so neither strategy dominates'
    ],

    solutions: [
      'Developed dynamic water states that change based on player actions',
      'Created strategic balance between containment and release mechanics',
      'Designed extensive research into water\'s physical and metaphysical properties',
      'Implemented playtesting feedback to balance philosophy with engaging gameplay',
      'Used clean iconography and color coding for instant card recognition'
    ],

    features: [
      'Dynamic water states responsive to player actions',
      'Strategic balance between containment (Hold) and release (Flow)',
      'Philosophical depth encouraging reflective gameplay',
      'Three card types: Hold, Flow, and Disaster',
      'Elegant minimalist card design reflecting water properties',
      'Meditative yet competitive gameplay experience'
    ],

    gallery: [
      `${BASE_URL}images/projects/flow-and-hold/Frame-22.png`,
      `${BASE_URL}images/projects/flow-and-hold/Frame-24.png`,
      `${BASE_URL}images/projects/flow-and-hold/Frame-25.png`,
      `${BASE_URL}images/projects/flow-and-hold/Frame-26.png`,
      `${BASE_URL}images/projects/flow-and-hold/Frame-27.png`,
      `${BASE_URL}images/projects/flow-and-hold/Frame-28.png`,
      `${BASE_URL}images/projects/flow-and-hold/Frame-29.png`,
      `${BASE_URL}images/projects/flow-and-hold/Frame-30.png`
    ],

    links: {
      gdd: `${BASE_URL}flow-and-hold_gdd.html`
    }
  },

  {
    id: 'spring-twilight',
    title: 'Spring Twilight',
    category: 'Experimental Game',
    year: '2025',
    description: 'Light spreads. You pass it on—until the wind takes your flame.',
    shortDescription: 'Poetry-to-mechanic experimental game',
    tools: ['Unity', 'C#', 'Photoshop'],
    thumbnail: `${BASE_URL}images/projects/spring-twilight/thumbnail.png`,

    overview: 'Inspired by Yosa Buson\'s haiku: "The light of a candle / is transferred to another candle— / spring twilight." Spring Twilight transforms this poetic image into interactive play. You begin as a single candle in a dark field, transferring your flame to unlit sky-lanterns drifting past. Each click ignites a lantern that rises and persists. When the wind finally snuffs your candle, the camera lifts to reveal a sky filled with every lantern you lit—your quiet legacy. A minimalist meditation on generosity, impermanence, and the cumulative impact of small acts of giving.',

    // Extended sections for detailed project page
    extendedSections: [
      {
        title: 'Concept & Inspiration',
        content: `The design turns Yosa Buson's poetic image into play: small acts of giving accumulate into a sky of light. You begin as a single candle in a dark field. Unlit sky-lanterns drift past. Each click transfers your flame; the lantern rises and persists. When the wind finally snuffs your candle, the camera lifts to reveal the sky filled with every lantern you lit—your quiet legacy.

**Core Philosophy:** "If you keep giving happiness to others, the real joy returns to you." Mechanically, your candle is mortal; the lights you share endure. The payoff is larger than the actions that produced it.

**Attribution:** Inspired by a haiku by Yosa Buson (public domain).`,
        image: 'Concept.jpg'
      },
      {
        title: 'Core Loop',
        content: '',
        image: 'Core-Loop.png'
      },
      {
        title: 'Core Mechanics',
        content: `**Transfer of Light:** Click unlit lanterns to ignite them before they float away. Each successful transfer sends a lantern rising into the sky.

**Wind as Obstacle:** Timed gusts push lanterns, distort your flame, and can extinguish you. Reading wind cues is essential—leaf swirls, audio whooshes, and screen shimmer telegraph incoming gusts.

**End Reveal:** On loss, the scene blooms into a luminous "spring twilight," showing the cumulative impact of your generosity. The sky fills with every lantern you lit—a constellation of your giving.

The game creates an elegant loss/payoff loop: wind ends you, but your gifts remain.`
      },
      {
        title: 'Theme & Design Philosophy',
        content: `**Central Theme:** Generosity and impermanence intertwine. Your candle's mortality contrasts with the enduring lights you share.

**Poetry-to-Mechanic Translation:** The haiku's "transfer" becomes the core interaction—ignition and persistence. The wind represents life's inevitable challenges, while the final reveal embodies the poem's "spring twilight."

**Emotional Journey:** Players experience calm moment-to-moment gameplay that builds into a reflective, contemplative payoff. The design emphasizes that small, repeated acts of kindness create something greater than their sum.`,
        backgroundGif: 'Theme.gif'
      },
      {
        title: 'Aesthetics & Audio Design',
        content: `**Visual Language:**
• Twilight palette with warm candle bloom
• Particle sparks during flame transfer
• Screen shimmer effect for wind telegraphs
• Luminous final reveal with sky-crowded lantern-stars

**Sound Design:**
• Soft chime on successful ignition
• Airy wind layers during gusts
• Ambient soundscape supporting meditative mood
• Audio cues reinforcing wind patterns

The cohesive visual and sound design serves the theme, creating an atmosphere of quiet contemplation and ultimate revelation.`
      }
    ],

    role: 'Solo Designer-Developer',
    duration: '2 Weeks',
    teamSize: 'Solo Project',
    platform: ['PC', 'Web'],

    challenges: [
      'Translating abstract poetry into concrete, playable mechanics',
      'Creating emotional resonance through minimal interaction',
      'Balancing challenge (wind timing) with contemplative atmosphere',
      'Designing telegraphed wind cues that feel natural, not mechanical',
      'Crafting a reveal that justifies and recontextualizes the player\'s loss'
    ],

    solutions: [
      'Developed simple click-to-transfer mechanic that embodies the haiku\'s core image',
      'Created layered wind system with visual, audio, and timing cues',
      'Implemented persistent lanterns that accumulate to create emotional payoff',
      'Designed camera reveal that transforms defeat into contemplative beauty',
      'Built lightweight UI focusing player attention on flame and lanterns'
    ],

    features: [
      'Poetry-inspired core mechanic: transfer light through clicking',
      'Wind-based obstacle system with telegraphed cues',
      'Persistent lantern accumulation visible in final reveal',
      'Minimalist timing-based gameplay',
      'Twilight aesthetic with warm lighting and particle effects',
      'Responsive audio design with soft chimes and wind layers',
      'Camera choreography for emotional reveal',
      'Meditative pacing encouraging reflection'
    ],

    gallery: [
      `${BASE_URL}images/projects/spring-twilight/thumbnail.png`,
      `${BASE_URL}images/projects/spring-twilight/screenshot-1.png`,
      `${BASE_URL}images/projects/spring-twilight/screenshot-2.png`,
      `${BASE_URL}images/projects/spring-twilight/screenshot-3.png`,
      `${BASE_URL}images/projects/spring-twilight/screenshot-4.png`
    ],

    videoUrl: 'https://www.youtube.com/embed/LdWjM72sZjo',

    links: {
      itchIo: 'https://hemants4.itch.io/light-of-a-candle'
    }
  },
  {
    id: 'nmt-app',
    title: 'App for NMT',
    category: 'UI/UX & Research',
    year: '2025',
    description: 'A UI/UX and research-centric application project focused on user experience design and research methodologies.',
    shortDescription: 'UI/UX and research-focused application',
    tools: ['Figma', 'User Research', 'Prototyping', 'UX Design'],
    thumbnail: `${BASE_URL}images/projects/Nuclear Medicine-UI-UX/Nuclear 1.png`,

    overview: '',

    role: 'UX/UI Designer, Researcher',
    duration: 'Ongoing',
    teamSize: '3 Person Team (with Sairaj and Tejas)',
    platform: ['Mobile', 'Web'],

    extendedSections: [],

    challenges: [],

    solutions: [],

    features: [],

    gallery: [
      `${BASE_URL}images/projects/Nuclear Medicine-UI-UX/Nuclear 1.png`,
      `${BASE_URL}images/projects/Nuclear Medicine-UI-UX/Nuclear 2.png`,
      `${BASE_URL}images/projects/Nuclear Medicine-UI-UX/Nuclear 3.png`,
      `${BASE_URL}images/projects/Nuclear Medicine-UI-UX/Nuclear 4.png`,
      `${BASE_URL}images/projects/Nuclear Medicine-UI-UX/Nuclear 5.png`,
      `${BASE_URL}images/projects/Nuclear Medicine-UI-UX/Nuclear 6.png`,
      `${BASE_URL}images/projects/Nuclear Medicine-UI-UX/Nuclear 7.png`,
      `${BASE_URL}images/projects/Nuclear Medicine-UI-UX/Nuclear 8.png`,
      `${BASE_URL}images/projects/Nuclear Medicine-UI-UX/Nuclear 9.png`,
      `${BASE_URL}images/projects/Nuclear Medicine-UI-UX/Nuclear 10.png`,
      `${BASE_URL}images/projects/Nuclear Medicine-UI-UX/Nuclear 11.png`,
      `${BASE_URL}images/projects/Nuclear Medicine-UI-UX/Nuclear 12.png`,
      `${BASE_URL}images/projects/Nuclear Medicine-UI-UX/Nuclear 13.png`,
      `${BASE_URL}images/projects/Nuclear Medicine-UI-UX/Nuclear 14.png`,
      `${BASE_URL}images/projects/Nuclear Medicine-UI-UX/Nuclear 15.png`,
      `${BASE_URL}images/projects/Nuclear Medicine-UI-UX/Nuclear 16 (2).png`,
      `${BASE_URL}images/projects/Nuclear Medicine-UI-UX/Nuclear 17.png`
    ],

    links: {}
  },

  {
    id: 'artwork',
    title: 'Artwork',
    category: '3D & 2D Art',
    year: '2023-2025',
    description: 'A collection of 3D models and 2D illustrations showcasing various art styles and techniques.',
    shortDescription: 'Collection of 3D models and 2D illustrations',
    tools: ['Blender', 'Procreate', 'Photoshop'],
    thumbnail: `${BASE_URL}images/artworks/3D/whale1.png`,
    isHidden: true,

    overview: 'A diverse portfolio of digital artwork including 3D character models, environment pieces, and 2D illustrations.',

    role: 'Digital Artist',
    duration: 'Ongoing',
    teamSize: 'Solo',
    platform: ['Digital'],

    extendedSections: [
      {
        title: '3D Artwork',
        content: `A collection of 3D models created using Blender, featuring character designs, environment pieces, and product visualizations.`,
        video: `${BASE_URL}images/artworks/3D/0001-0030.mp4`,
        images: [
          `${BASE_URL}images/artworks/3D/whale1.png`,
          `${BASE_URL}images/artworks/3D/Whale2.png`,
          `${BASE_URL}images/artworks/3D/POT.png`,
          `${BASE_URL}images/artworks/3D/1.png`,
          `${BASE_URL}images/artworks/3D/Screenshot 2025-08-10 205226.png`,
          `${BASE_URL}images/artworks/3D/Screenshot 2024-03-31 150415.png`,
          `${BASE_URL}images/artworks/3D/camera2.jpg`,
          `${BASE_URL}images/artworks/3D/camera.jpg`,
          `${BASE_URL}images/artworks/3D/3.jpg`,
          `${BASE_URL}images/artworks/3D/0004.jpg`,
          `${BASE_URL}images/artworks/3D/12.jpg`,
          `${BASE_URL}images/artworks/3D/chainsaw.jpg`,
          `${BASE_URL}images/artworks/3D/IMG_0644.jpg`,
          `${BASE_URL}images/artworks/3D/IMG_0647.PNG`,
          `${BASE_URL}images/artworks/3D/IMG_0648.PNG`
        ]
      },
      {
        title: '2D Artwork',
        content: `Digital illustrations and concept art created using Procreate and Photoshop, exploring various styles and themes.`,
        images: [
          `${BASE_URL}images/artworks/Untitled_Artwork(1).png`,
          `${BASE_URL}images/artworks/Untitled_Artwork(2).png`,
          `${BASE_URL}images/artworks/Untitled_Artwork(3).png`,
          `${BASE_URL}images/artworks/Untitled_Artwork(7).png`,
          `${BASE_URL}images/artworks/Untitled_Artwork(8).png`,
          `${BASE_URL}images/artworks/Untitled_Artwork (12).png`,
          `${BASE_URL}images/artworks/Untitled_Artwork.png`,
          `${BASE_URL}images/artworks/Untitled_Artwork.jpg`,
          `${BASE_URL}images/artworks/Untitled_Artwork (2).jpg`,
          `${BASE_URL}images/artworks/Untitled_Artwork (3).jpg`,
          `${BASE_URL}images/artworks/Untitled_Artwork (4).jpg`,
          `${BASE_URL}images/artworks/Untitled_Artwork (5).jpg`,
          `${BASE_URL}images/artworks/Banana_king-2.png`,
          `${BASE_URL}images/artworks/IMG_0420.PNG`,
          `${BASE_URL}images/artworks/IMG_0473.jpg`
        ]
      }
    ],

    challenges: [],
    solutions: [],
    features: [],

    gallery: [],

    links: {}
  }
]

// Helper function to get project by ID
export const getProjectById = (id) => {
  return projectsData.find(project => project.id === id)
}

// Helper function to get next/previous projects
export const getAdjacentProjects = (currentId) => {
  const currentIndex = projectsData.findIndex(p => p.id === currentId)
  const nextIndex = (currentIndex + 1) % projectsData.length
  const prevIndex = (currentIndex - 1 + projectsData.length) % projectsData.length

  return {
    next: projectsData[nextIndex],
    previous: projectsData[prevIndex]
  }
}
