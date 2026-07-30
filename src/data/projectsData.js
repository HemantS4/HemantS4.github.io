// Centralized project data
const BASE_URL = import.meta.env.BASE_URL || '/';

export const projectsData = [

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
    teamSize: '3 people',
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
    id: 'flowlog',
    title: 'Momentum',
    category: 'UX/UI, Gamification & AI Integration',
    year: '2025',
    description: 'A gamified documentation app that makes capturing ideas effortless and rewarding with AI-powered assistance.',
    shortDescription: 'Gamified documentation app with AI integration',
    tools: ['Figma', 'Adobe Creative Suite', 'Notion', 'AI Integration'],
    thumbnail: `${BASE_URL}images/projects/flowlog/1.png`,
    externalPage: `${BASE_URL}momentum.html`,

    overview: 'Documentation doesn\'t have to feel like a chore. Momentum transforms the act of capturing ideas into a rewarding experience by combining gamification principles with AI assistance. Users face two major barriers: the task takes too long (78%) and there\'s no feedback (65%). By implementing token-based rewards, real-time AI suggestions, and a clear progress system, Momentum makes documentation feel like progress, not punishment.',

    // Extended sections for detailed project page
    extendedSections: [
      {
        title: 'The Problem',
        content: `Users struggle with documentation for clear reasons:

**User Barriers:**
• 78% say documentation takes too long
• 65% want immediate feedback while capturing ideas
• 82% are interested in AI and gamification features

The core issue: documentation feels like overhead. It interrupts the flow of thought. By the time users finish typing, they\'ve lost momentum. They need a tool that keeps up with their thinking—and rewards them for capturing it.`
      },
      {
        title: 'Gamification Framework – Octalysis',
        content: `I designed Momentum around Octalysis, Yu-kai Chou\'s gamification framework, prioritizing the drives that motivate documentation:

**High Priority (Motivate Effort):**
• Accomplishment (90%) – Every doc fragment feels like progress
• Empowerment (95%) – AI autocomplete and smart suggestions
• Ownership (85%) – Users organize and refine their own ideas

**Lower Priority (Avoid Negative Drives):**
• Social Influence (40%) – Optional sharing, not mandatory
• Loss Avoidance (20%) – No penalty for incomplete docs
• Scarcity (15%) – No artificial time pressure

The design emphasizes positive motivation: "You did that!" over "You\'re behind."`,
        image: 'Framework.png'
      },
      {
        title: 'Core Mechanics',
        content: `**Quick Capture:** Click once to start recording. AI suggests categories, tags, and completions in real-time.

**Token Rewards:** Earn tokens for:
• Starting a doc (1 token)
• Adding tags or connections (1 token each)
• Completing a thought (3 tokens)
• Sharing with team (2 tokens, optional)

**Streaks & Milestones:** Visual progress showing consecutive days of capturing. Hitting 7, 30, and 100-day milestones unlocks customization rewards.

**Smart Organization:** AI learns your categories and automatically suggests where new ideas belong.`,
        image: 'The momentum loop.png'
      },
      {
        title: 'Who It\'s For',
        content: `Momentum serves multiple user archetypes:

**The Busy Professional** – Needs quick capture with zero friction. Loves voice-to-text and AI-generated summaries.

**The Creative Dreamer** – Struggles with blank page syndrome. Benefits from prompts, mood tracking, and visual inspiration.

**The Overwhelmed Parent** – Wants to preserve memories without guilt. Thrives with auto-photo timelines and forgiveness for gaps.

**The Growth Seeker** – Tracks metrics obsessively. Drives streaks, progress reports, and visible achievement systems.

The design adapts to each persona while maintaining core mechanics that work universally: capture, organize, earn, reflect, personalize.`,
        image: 'Who It is for.png'
      },
      {
        title: 'AI Integration',
        content: `Momentum uses AI to remove friction:

• **Autocomplete suggestions** – Finishes sentences based on your pattern
• **Automatic tagging** – Categorizes ideas without manual work
• **Connection detection** – Links related ideas across your knowledge base
• **Smart summaries** – Generates 1-line summaries for quick review

The AI never overwrites—it suggests. Users stay in control, which is critical for Empowerment (95% in Octalysis).`,
        image: 'Howitworks.png'
      },
      {
        title: 'Why This Works',
        content: `Documentation apps fail because they ask: "How do I reduce friction?" Momentum asks: "How do I make friction feel good?"

By combining **accomplishment** (tokens, streaks), **empowerment** (AI assists, you decide), and **ownership** (your rules, your structure), Momentum transforms documentation from a chore into a habit.

Research shows users with this combination engage 3x more than those using traditional tools.`
      }
    ],

    role: 'UX/UI Designer, Product Designer, Gamification Specialist',
    duration: '2 weeks',
    teamSize: 'Solo',
    platform: ['iOS', 'Android', 'Web'],

    challenges: [
      'Documentation tools are crowded—how to stand out with a small team?',
      'Gamification can feel fake. How to make rewards feel earned, not gimmicky?',
      'AI suggestions must be helpful without being intrusive or controlling',
      'Balancing speed (auto-capture) with quality (thoughtful reflection)'
    ],

    solutions: [
      'Focused on a specific pain point (feedback loop) rather than trying to replace all tools',
      'Used Octalysis framework to root gamification in psychology, not arbitrary points',
      'Designed AI as a co-pilot, not a replacement—users always have final say',
      'Built in buffer time: capture fast, refine later. Two-step flow removes pressure'
    ],

    features: [
      'One-click idea capture with optional voice-to-text',
      'AI-powered auto-tagging and categorization',
      'Token reward system tied to meaningful actions',
      'Streak counter and milestone celebrations',
      'Smart linking—AI connects related ideas automatically',
      'Real-time AI suggestions for completion and expansion',
      'Team sharing with optional collaborative refinement',
      'Knowledge graph visualization of connected ideas',
      'Dark mode and focus-friendly interface'
    ],

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

    gallery: [],

    videoUrl: 'https://www.youtube.com/embed/qCtC_vci1G0',

    links: {
      gdd: `${BASE_URL}Gamification_gdd.html`
    }
  },

  

  {
    id: 'introsense',
    title: 'IntroSense',
    category: 'Sensory Technology & UX Research',
    year: '2025',
    description: 'An innovative sensory interface system designed for immersive environmental awareness and user interaction.',
    shortDescription: 'Sensory interface technology system',
    tools: ['Figma', 'Miro', 'Arduino'],
    thumbnail: `${BASE_URL}images/projects/introsense/c1.png`,

    overview: '',

    role: 'UX Researcher & Designer',
    duration: '4 weeks',
    teamSize: 'Solo',
    platform: ['Interface Technology'],

    extendedSections: [],

    challenges: [],

    solutions: [],

    features: [],

    gallery: [
      `${BASE_URL}images/projects/introsense/c1.png`,
      `${BASE_URL}images/projects/introsense/c2.png`,
      `${BASE_URL}images/projects/introsense/c3.png`,
      `${BASE_URL}images/projects/introsense/c4.png`,
      `${BASE_URL}images/projects/introsense/c5.png`,
      `${BASE_URL}images/projects/introsense/c6.png`,
      `${BASE_URL}images/projects/introsense/c7.png`,
      `${BASE_URL}images/projects/introsense/c8.png`,
      `${BASE_URL}images/projects/introsense/c9.png`,
      `${BASE_URL}images/projects/introsense/c10.png`,
      `${BASE_URL}images/projects/introsense/c11.png`,
      `${BASE_URL}images/projects/introsense/c12.png`,
      `${BASE_URL}images/projects/introsense/c13.png`,
      `${BASE_URL}images/projects/introsense/c14.png`,
      `${BASE_URL}images/projects/introsense/c15.png`,
      `${BASE_URL}images/projects/introsense/c16.png`,
      `${BASE_URL}images/projects/introsense/c17.png`,
      `${BASE_URL}images/projects/introsense/c18.png`,
      `${BASE_URL}images/projects/introsense/c19.png`,
      `${BASE_URL}images/projects/introsense/c20.png`,
      `${BASE_URL}images/projects/introsense/c21.png`,
      `${BASE_URL}images/projects/introsense/c22.png`,
      `${BASE_URL}images/projects/introsense/c23.png`,
      `${BASE_URL}images/projects/introsense/c24.png`,
      `${BASE_URL}images/projects/introsense/c25.png`,
      `${BASE_URL}images/projects/introsense/c26.png`,
      `${BASE_URL}images/projects/introsense/c27.png`,
      `${BASE_URL}images/projects/introsense/c28.png`,
      `${BASE_URL}images/projects/introsense/c29.png`,
      `${BASE_URL}images/projects/introsense/c30.png`,
      `${BASE_URL}images/projects/introsense/c31.png`,
      `${BASE_URL}images/projects/introsense/c32.png`,
      `${BASE_URL}images/projects/introsense/c33.png`
    ],

    links: {}
  },

  

  {
    id: 'neurosense',
    title: 'NeuroCompass',
    category: 'Wearable Technology & UX Research',
    year: '2025',
    description: 'An adaptive multi-sensory navigation belt for high-risk environments using haptic feedback and spatial orientation.',
    shortDescription: 'Multi-signal haptic spatial navigation system',
    tools: ['Figma', 'Miro', 'Arduino'],
    thumbnail: `${BASE_URL}images/projects/Neurosense/n1.png`,

    overview: '',

    role: 'UX Researcher & Designer',
    duration: '4 weeks',
    teamSize: 'Solo',
    platform: ['Wearable'],

    extendedSections: [],

    challenges: [],

    solutions: [],

    features: [],

    gallery: [
      `${BASE_URL}images/projects/Neurosense/n1.png`,
      `${BASE_URL}images/projects/Neurosense/n2.png`,
      `${BASE_URL}images/projects/Neurosense/n3.png`,
      `${BASE_URL}images/projects/Neurosense/n4.png`,
      `${BASE_URL}images/projects/Neurosense/n5.png`,
      `${BASE_URL}images/projects/Neurosense/n6.png`,
      `${BASE_URL}images/projects/Neurosense/n7.png`,
      `${BASE_URL}images/projects/Neurosense/n8.png`,
      `${BASE_URL}images/projects/Neurosense/n9.png`,
      `${BASE_URL}images/projects/Neurosense/n10.png`,
      `${BASE_URL}images/projects/Neurosense/n11.png`,
      `${BASE_URL}images/projects/Neurosense/n12.png`,
      `${BASE_URL}images/projects/Neurosense/n13.png`,
      `${BASE_URL}images/projects/Neurosense/n14.png`,
      `${BASE_URL}images/projects/Neurosense/n15.png`,
      `${BASE_URL}images/projects/Neurosense/n16.png`,
      `${BASE_URL}images/projects/Neurosense/n17.png`,
      `${BASE_URL}images/projects/Neurosense/n18.png`,
      `${BASE_URL}images/projects/Neurosense/n19.png`,
      `${BASE_URL}images/projects/Neurosense/n20.png`,
      `${BASE_URL}images/projects/Neurosense/n21.png`,
      `${BASE_URL}images/projects/Neurosense/n22.png`,
      `${BASE_URL}images/projects/Neurosense/n23.png`,
      `${BASE_URL}images/projects/Neurosense/n24.png`,
      `${BASE_URL}images/projects/Neurosense/n25.png`,
      `${BASE_URL}images/projects/Neurosense/n26.png`,
      `${BASE_URL}images/projects/Neurosense/n27.png`,
      `${BASE_URL}images/projects/Neurosense/n28.png`,
      `${BASE_URL}images/projects/Neurosense/n29.png`,
      `${BASE_URL}images/projects/Neurosense/n30.png`,
      `${BASE_URL}images/projects/Neurosense/n31.png`,
      `${BASE_URL}images/projects/Neurosense/n32.png`,
      `${BASE_URL}images/projects/Neurosense/n33.png`,
      `${BASE_URL}images/projects/Neurosense/n34.png`,
      `${BASE_URL}images/projects/Neurosense/n35.png`,
      `${BASE_URL}images/projects/Neurosense/n36.png`,
      `${BASE_URL}images/projects/Neurosense/n37.png`,
      `${BASE_URL}images/projects/Neurosense/n38.png`,
      `${BASE_URL}images/projects/Neurosense/n39.png`
    ],

    links: {}
  },

  

  {
    id: 'pack-less',
    title: 'Pack-less',
    category: 'Product Design & System Design',
    year: '2025',
    description: 'A comprehensive product and system design project focusing on market analysis and strategic design.',
    shortDescription: 'Product design with SWOT analysis and market research',
    tools: ['Figma', 'Market Research', 'SWOT Analysis'],
    thumbnail: `${BASE_URL}images/projects/Pack-less/pack-1.png`,

    overview: '',

    role: 'Product Designer, System Designer',
    duration: '2 weeks',
    teamSize: 'Multidisciplinary team',
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
    id: 'flow-and-hold',
    title: 'Flow & Hold',
    category: 'Card Game Design',
    year: '2025',
    description: 'A philosophical card game redefining the binary of containment and continuum of water.',
    shortDescription: 'Card game exploring water\'s dual nature',
    tools: ['Adobe Illustrator', 'Photoshop', 'InDesign', 'Figma', 'Tabletop Simulator'],
    thumbnail: `${BASE_URL}images/projects/flow-and-hold/Frame-19.png`,
    externalPage: `${BASE_URL}flow-and-hold.html`,

    overview: 'Water exists in a constant state of duality - it can be contained yet flows freely, held yet always seeking escape. Flow & Hold challenges players to think beyond traditional boundaries and explore the philosophical nature of water through strategic card gameplay. This innovative card game redefines the existing binary of contain and continuum, creating a unique gaming experience that mirrors water\'s fundamental properties through elegant mechanics and thoughtful design.',

    role: 'Game Designer, Concept Developer',
    duration: '1 week',
    teamSize: 'Multidisciplinary team',
    platform: ['Physical Card Game'],

    // Extended sections for detailed project page
    extendedSections: [
      {
        title: 'The Spark – Initial Ideation',
        content: 'We started by asking: **What does water do?** It flows in rivers, rests in ponds, crashes as tsunamis, hides in bottles. We noticed something profound: the container changes water\'s meaning. A bottle suggests purity and profit. A dam implies control. A flood represents chaos. We began by mapping where water lives and how humans categorize it based on containment.',
        image: 'Frame.png'
      },
      {
        title: 'The Nature of Water',
        content: 'Through our research, we identified water\'s fundamental dualities:\n\n**Calm vs. Chaos** – A lake versus a flood.\n\n**Fluid vs. Solid vs. Vapor** – Water slips between states seamlessly.\n\n**Vital yet Volatile** – It gives life and destroys it.\n\nThis duality became the foundation of our game concept. Water doesn\'t choose between being held or flowing—it exists in both states simultaneously.',
        image: 'Frame-1.png'
      },
      {
        title: 'Visual Exploration',
        content: 'Our design process involved extensive visual experimentation to find abstract shapes and patterns that evoke water\'s dual nature. Through multiple iterations, we explored how simple geometric forms could communicate the tension between containment and flow without literal representation.',
        image: 'Frame-8.png'
      },
      {
        title: 'The Core Question',
        content: 'Our central inquiry emerged: **Why do we trust water only when it\'s in a glass or bottle? Who decided that?** And why is the same water suddenly called "holy" in a temple or "dirty" in a flood? The nature of water is redefined by the **container** it occupies. This philosophical observation became the mechanical heart of our card game.',
        image: 'Frame-10.png'
      },
      {
        title: 'Game Concept – Container Defines Nature',
        content: 'The game concept crystallized around a simple truth: **Water\'s essence is defined by one innate quality—its flow.** Yet humans constantly try to contain it, categorize it, control it. Players navigate this tension through card-based strategic gameplay, balancing "Hold" cards (containment, stability, control) with "Flow" cards (movement, chaos, freedom). The winner is the player who best strikes the balance.',
        image: 'Frame-11.png'
      },
      {
        title: 'Card Design & Visual Language',
        content: 'We developed a clean, minimalist visual language using three primary colors:\n\n**Blue** for Hold cards (ocean, stability, containment)\n\n**Cream/Yellow** for Flow cards (waterfalls, movement, freedom)\n\n**Navy/Gold** for Disaster cards (tsunamis, floods, disruption)\n\nEach card features abstract shapes inspired by water\'s forms—waves, droplets, spirals—combined with clear iconography to communicate game mechanics instantly.',
        image: 'Frame-23.png'
      },
      {
        title: 'Final Card Designs',
        content: 'Through iteration and playtesting feedback, we refined the card designs to ensure they were instantly recognizable while maintaining the philosophical elegance of the concept. The visual system evolved to support intuitive gameplay while reinforcing the metaphor of water\'s nature through every visual element.',
        image: 'Frame-24.png'
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
    duration: '3 weeks',
    teamSize: '3 people',
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
    id: 'dp2-motor-play',
    title: 'Pico Play',
    category: 'Applied Game & Machine Learning',
    year: '2025',
    description: 'An applied AR game concept for autistic children with motor coordination support powered by machine learning models.',
    shortDescription: 'AR therapeutic game with ML for ASD + DCD (ongoing)',
    tools: ['Unity', 'AR Foundation', 'Machine Learning', 'Figma', 'Research Methods', 'UX Design'],
    thumbnail: `${BASE_URL}images/projects/dp2-motor-play/thumbnail.jpg`,
    externalPage: `${BASE_URL}pico-play.html`,

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
2. What sensory elements help vs. harm? (colors, sounds, visual clutter)
3. How to measure progress without burdening caregivers?
4. What session length actually works?

**What I did:** Observed 12 kids using existing apps, reviewed 15+ competitor apps, interviewed OTs and SLPs.

**What I learned:**
• Big, simple targets with warm sounds improve focus
• Familiar animation style (Disney/Pixar) encourages engagement
• 10–15 minute sessions with built-in breaks sustain engagement
• Avatar mirroring creates "I did that!" sense of agency
• Physical tokens work better than digital points`
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
• Colors are bright but not harsh. High-contrast mode available.
• Warm voiceover, soft success sounds. No buzzers or fail noises. Volume + Quiet Mode.
• Optional gentle vibration on success (never on failure).

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

**Self-Determination Theory:** Autonomy (kid controls start/stop/skip), Competence (70–80% success rate keeps it in flow), Relatedness (mascot companion, not instructor).

**Neurodiversity-Affirming Design:** Built **with** input from autistic individuals and OTs, not just **for** them. Key principles: sensory controls = kid in charge, no forced eye contact, "Calm Cave" = regulation is valid, progress = capability growth (never "fixing" or "normalizing").

Field research: kids engage most when they feel in control. Pause anytime. Skip anything. Adjust all settings. Exit without penalty.`
      }
    ],

    role: 'Game Designer, UX Researcher, Applied Game Design',
    duration: '2 months (ongoing)',
    teamSize: 'Solo / 2 people',
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
    platform: ['Digital Art'],

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
