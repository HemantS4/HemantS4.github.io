// Auto-generated from projectsData.js split. Edit freely.
/** @typedef {import('./schema.js').Project} Project */

import { BASE_URL } from './schema.js'

/** @type {Project} */
export const project = {
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
  }
