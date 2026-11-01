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
        'Patients come home with photocopied sheets and a vague fear of hugging their kids. Doctors burn energy repeating the same safety script. Lumen is the layer in between.',
      images: [img(1), img(2), img(3)],
    },
    {
      title: 'What research told us',
      content:
        "Five patient interviews, two endocrinologists. The sharp question was never *what is beta radiation?* — it was *when can I hold my child again?* Diet slips around day 10. Doctors are repeating themselves five times a morning. Hydration is the one lever patients can actually pull.",
      images: [img(4), img(5), img(6), img(7)],
    },
    {
      title: 'Design brief',
      content:
        'Plain over precise. One quiet accent. Pace, don\'t nag. Clinical trust, consumer polish. Every piece of guidance carries the doctor\'s name.',
      images: [img(8), img(9), img(10), img(11)],
    },
    {
      title: 'Moving towards the solution',
      content:
        'A daily card for today\'s schedule and precautions, a calendar for what\'s next, and gentle reminders for scans, diet, and medication pauses. An Isotope Info tab gives patients plain-language answers and short learning clips.',
      images: [img(12), img(13)],
    },
    {
      title: 'The screens that mattered most',
      content:
        'Schedule, isotope detail, and the "Can I hug my kids?" answer. The decay chart reads 91.7% activity remaining at 24 h — the real value for I-131 at an 8-day half-life, not a stock curve.',
      images: [img(14), img(15), img(16), img(17)],
    },
    {
      title: 'What we added after the audit — the pre-home flow',
      content:
        "The first version launched straight into Home. Testing surfaced the gap: the app had never asked which isotope the patient was on. Four new screens close that:\n\n**Splash** — one line of intent, no CTA noise.\n**Onboarding** — three skippable slides: isotope · routine · care.\n**Sign in** — hospital SSO first, patient ID second, password last.\n**Treatment setup** — isotope, dose date, doctor, worries. Every later screen reads from this.",
    },
    {
      title: 'Try the prototype',
      content:
        'Fifteen screens, every tap wired. Hit **Auto-play tour** inside the prototype above to screen-record a hands-free walkthrough.',
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

  gallery: [img(1)],
}
