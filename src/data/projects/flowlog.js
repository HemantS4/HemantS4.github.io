// Auto-generated from projectsData.js split. Edit freely.
/** @typedef {import('./schema.js').Project} Project */

import { BASE_URL } from './schema.js'

/** @type {Project} */
export const project = {
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
  }
