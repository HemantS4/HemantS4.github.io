// Auto-generated from projectsData.js split. Edit freely.
/** @typedef {import('./schema.js').Project} Project */

import { BASE_URL } from './schema.js'

const img = (n) => `${BASE_URL}images/projects/Nuclear Medicine-UI-UX/Nuclear ${n}.png`

/** @type {Project} */
export const project = {
  id: 'nmt-app',
  title: 'Lumen — Companion for Nuclear-Medicine Therapy',
  category: 'UI/UX & Research',
  year: '2025',
  description:
    'A patient-side companion for radionuclide therapy (I-131, Lu-177, Y-90). Translates clinical instructions into plain language, paces daily recovery, keeps the care team one tap away.',
  shortDescription: 'From isolation to awareness — a quiet companion through radionuclide therapy.',
  tools: ['Figma', 'User interviews', 'Rapid prototyping', 'UX writing', 'Clinical review'],
  thumbnail: img(1),

  overview:
    'Lumen sits between patients and clinicians during the quietest part of therapy — the days after the dose. The app explains the isotope, paces the daily routine, and gently answers the questions patients are too embarrassed to ask again.',

  role: 'Lead UX, research, prototyping',
  duration: '6 weeks · ongoing',
  teamSize: '3 — Sairaj, Tejas, Hemant',
  platform: ['iOS', 'Android', 'Web companion'],

  prototypeUrl: 'nmt-prototype.html',

  links: {
    live: `${BASE_URL}nmt-prototype.html`,
  },

  extendedSections: [
    {
      title: 'From isolation to awareness',
      content:
        'Designing clarity for patients undergoing nuclear-medicine therapy. A six-week project with Sairaj and Tejas.',
      images: [img(1), img(2), img(3)],
    },
    {
      title: 'Grounding the work in evidence',
      content:
        'We started by reading the research — isotope decay, safety measures, patient-education literature — so the app would speak from a foundation, not from guesses.',
      images: [img(4), img(5), img(6)],
    },
    {
      title: 'Mapping the gap between patient and doctor',
      content:
        'Patients carry confusion and anxiety; doctors carry fatigue from repeating the same safety script. The design brief lives in the gap between the two.',
      images: [img(7), img(8), img(9), img(10)],
    },
    {
      title: 'The brief',
      content:
        'Design a human-centred tracker that explains the isotope in plain words, paces the daily routine, and reduces the repeat-question load on the doctor.',
      images: [img(11), img(12)],
    },
    {
      title: 'Moving towards the solution',
      content:
        'A daily card for today\'s schedule and precautions, a calendar for what\'s next, and an Isotope Info tab with plain-language answers and short learning clips.',
      images: [img(13), img(14)],
    },
    {
      title: 'The screens that mattered most',
      content:
        'The isotope detail page, the schedule, and the "Can I hug my kids?" answer. The decay chart reads 91.7% remaining at 24 h — the real value for I-131 at an 8-day half-life, not a stock curve.',
      images: [img(15), img(16), img(17)],
    },
    {
      title: 'What we added after the audit — the pre-home flow',
      content:
        "The first version launched straight into Home. Testing surfaced the gap: the app had never asked which isotope the patient was on. Four new screens close that:\n\n**Splash** — one line of intent, no CTA noise.\n**Onboarding** — three skippable slides: isotope · routine · care.\n**Sign in** — hospital SSO first, patient ID second, password last.\n**Treatment setup** — isotope, dose date, doctor, worries. Every later screen reads from this.",
    },
  ],

  challenges: [
    'Translating clinical safety language into something anxious people read without feeling patronised.',
    'Restrictions that fade on the correct day, not a flat 2-week block patients ignore by day 4.',
    'Keeping first-run short enough that a tired patient finishes it.',
  ],

  solutions: [
    'Plain-language style reviewed line-by-line by the endocrinology team.',
    'Day-indexed model: every FAQ, chip, and notification reads from the patient\'s own start date.',
    'Four pre-home screens, each carrying one decision only.',
  ],

  features: [
    'Isotope-aware home screen that adapts to I-131, Lu-177, or Y-90.',
    'Hydration pacer linking each glass to isolation hours saved.',
    '"Can I hug my kids?" FAQ with a day-by-day chip row.',
    'Clinician-authored decay chart with real arithmetic.',
    'Care-team chat row inside every anxious moment.',
  ],

  gallery: [],
}
