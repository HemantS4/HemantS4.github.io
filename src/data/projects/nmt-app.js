// Auto-generated from projectsData.js split. Edit freely.
/** @typedef {import('./schema.js').Project} Project */

import { BASE_URL } from './schema.js'

/** @type {Project} */
export const project = {
  id: 'nmt-app',
  title: 'Lumen — Companion for Nuclear-Medicine Therapy',
  category: 'UI/UX & Research',
  year: '2025',
  description:
    'A patient-side companion for people undergoing radionuclide therapy (I-131, Lu-177, Y-90). The app translates clinical instructions into plain language, paces the daily recovery routine, and keeps the care team one tap away.',
  shortDescription: 'From isolation to awareness — a quiet companion through radionuclide therapy.',
  tools: ['Figma', 'User interviews', 'Rapid prototyping', 'UX writing', 'Clinical review'],
  thumbnail: `${BASE_URL}images/projects/Nuclear Medicine-UI-UX/Nuclear 1.png`,

  overview:
    "Radionuclide therapy works, but the days around it are often spent in silence. Patients come home with photocopied sheets and a vague fear of hugging their kids. Doctors burn energy repeating the same safety script. Lumen sits between them — a quiet companion that explains the isotope, paces the daily routine, and gently answers the questions patients are too embarrassed to ask again.",

  role: 'Lead UX, research synthesis, prototyping',
  duration: '6 weeks · ongoing',
  teamSize: '3 — Sairaj, Tejas, Hemant',
  platform: ['iOS', 'Android', 'Web companion'],

  prototypeUrl: 'nmt-prototype.html',

  links: {
    live: `${BASE_URL}nmt-prototype.html`
  },

  extendedSections: [
    {
      title: 'Why this project',
      content:
        "We spoke to five patients who had just finished I-131 ablation and two endocrinologists at a tertiary hospital. The pattern was uncomfortable: every patient knew they were safe eventually, and none of them knew **when**. Doctors knew the answer but had already said it four times that morning. The gap wasn't knowledge; it was translation — turning a 20-minute consult into something a scared person could reach for at 2 a.m.",
    },
    {
      title: 'What research told us',
      content:
        "**Fear concentrates on contact.** The sharpest question across every interview was some variation of \"when can I hold my child again?\" — not \"what is beta radiation?\"\n\n**Diet is where people slip.** Low-iodine restrictions last longer than the strict isolation phase. Patients routinely forget by day 10.\n\n**Doctors are repeating themselves.** Three of three clinicians flagged \"same five questions, every patient\" as their biggest workflow drain.\n\n**Hydration is a lever nobody uses.** Flushing the isotope faster is one of the few things a patient can actively do. Most apps treat it as a checkbox; it deserves a pacer.",
    },
    {
      title: 'Design principles',
      content:
        "**Plain over precise.** \"Keep 2 m from kids for 5 days\" beats \"maintain ≥2 m separation during isotope elimination.\"\n\n**One quiet accent.** A single indigo against a near-white neutral; semantic colour (green/amber/red) is used only when a patient needs to notice something.\n\n**Pace, don't nag.** Reminders arrive on a schedule a patient could choose themselves. No streaks, no gamification.\n\n**Clinical trust, consumer polish.** The app is read by anxious people, not optimised users — hierarchy, type, and spacing follow consumer-grade standards, with a doctor's name visible on every piece of guidance.",
    },
    {
      title: 'Pre-home flow — the four screens we added',
      content:
        "The first version launched the patient straight into their day. In testing, two of five participants stopped before Home because the app had never asked them which isotope they were on. The pre-home flow fixes that:\n\n**Splash.** A single sentence of intent — *From isolation, to awareness.* — and a soft orb that cues the medical, not the gamified, tone.\n\n**Onboarding.** Three slides, no accounts yet: know your isotope · build a safe routine · stay connected to care. Skippable.\n\n**Sign in.** Hospital SSO first, patient ID second — the two routes that match how Indian tertiary hospitals already issue credentials. Password is a fallback, not the default.\n\n**Treatment setup.** The one screen that makes the rest of the app meaningful: which isotope, when the dose was given, who the doctor is, and what the patient worries about most. Every later screen reads from this.",
    },
    {
      title: 'The daily care loop',
      content:
        "Home opens on *today* — a progress band for isolation, the day's appointments, and four tasks that are small enough to finish: water, walk, flush, log. The hydration pacer is the only task that goes beyond a checkbox: eight glasses, a 42-minute reminder ring, and a line that tells the patient *each extra glass is roughly two hours less isolation*. That causal link, pulled from the clinical team's own talking points, is what turns a checkbox into a lever.",
    },
    {
      title: 'Learn — the layer doctors used to repeat',
      content:
        "Explore holds the three therapeutic isotopes and short learning clips. The isotope detail page has the half-life, radiation type, a plain-language *About*, and three FAQs — including the one everyone asks. **Can I hug my kids?** opens a dedicated answer with a day-by-day chip row (Avoid · days 1–5 → Brief hugs · day 6+ → Normal · day 10) and the three precautions that cover 90% of the restriction window. The decay chart isn't decoration — it reads 91.7% activity remaining after 24 h, which is the actual value for I-131 at an 8.0-day half-life.",
    },
    {
      title: 'Plan ahead and awareness',
      content:
        "Schedule carries the one view clinicians asked for first: a short calendar with the dose check, the follow-up, and the day isolation ends — marked in green, because that is the day most patients plan around. Booking is three fields, not six. Notifications are plain English and dated; the first one every morning is a safety check-in, not a marketing nudge. Profile holds the care team with a one-tap chat, because the thing a patient most needs at 2 a.m. is a human they already trust.",
    },
    {
      title: 'What the prototype proves',
      content:
        "The interactive prototype embedded below runs the end-to-end flow — welcome through profile — in a real iPhone frame. Every tappable surface routes correctly; the auto-play tour walks all 15 screens in order with narration, so the design can be screen-recorded without a human in the loop. Try the FAQ answer, the hydration pacer, and the booking confirmation; those are the three moments the research told us the app has to get right.",
    },
    {
      title: 'What is next',
      content:
        "**Clinical validation.** A small pilot at the partnering hospital in Kerala, measuring (a) repeat-question volume on the doctor's side and (b) low-iodine diet adherence on the patient's side.\n\n**Multilingual.** Malayalam and Tamil, in that order. The copy is already short enough to translate cleanly; the FAQ answer will need an Arabic/RTL review once we add any gulf-region hospitals.\n\n**Caregiver mode.** Several patients asked us to show the app to their adult child instead. A view that mirrors the restrictions from the caregiver's side is the next scoped feature.",
    },
  ],

  challenges: [
    'Translating clinical safety language into something anxious people can read without feeling patronised.',
    'Designing restrictions that fade on the correct day — not a flat 2-week block that patients ignore by day 4.',
    'Earning clinical trust in a consumer-feeling app without making it look like a hospital form.',
    'Keeping the first-run flow short enough that a tired patient finishes it.',
  ],

  solutions: [
    'A single plain-language style, reviewed line-by-line by the endocrinology team before shipping.',
    'A day-indexed restriction model: every FAQ answer, chip row, and notification reads from the patient\'s own treatment start date.',
    'Doctor name on every piece of guidance, and a chat row inside each anxious moment.',
    'Four pre-home screens — splash, onboarding, sign-in, treatment setup — each carrying one decision, no more.',
  ],

  features: [
    'Isotope-aware home screen that adapts to I-131, Lu-177, or Y-90.',
    'Hydration pacer with a causal line connecting glasses to isolation hours.',
    '"Can I hug my kids?" FAQ with a day-by-day chip row and three concrete precautions.',
    'Clinician-authored decay chart (reads 91.7% at 24 h for I-131 — real arithmetic, not a stock curve).',
    'Three-field appointment booking with doctor-first ordering.',
    'Safety check-in notifications on the morning schedule patients actually read.',
    'Care-team chat row inside the FAQ, so the next question goes to a human the patient already knows.',
  ],

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
    `${BASE_URL}images/projects/Nuclear Medicine-UI-UX/Nuclear 17.png`,
  ],
}
