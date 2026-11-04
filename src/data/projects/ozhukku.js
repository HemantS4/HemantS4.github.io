/** @typedef {import('./schema.js').Project} Project */

import { BASE_URL } from './schema.js'

/** @type {Project} */
export const project = {
    id: 'ozhukku',
    title: 'Ozhukku',
    category: 'UX Case Study · Systems & Interaction Design',
    year: '2026',
    description: 'A flood control-room console for a district emergency operations centre, anchored in the Kerala floods of August 2018: a map of where people are waiting, three things that need a person right now, and a handover the next shift can read in five minutes.',
    shortDescription: 'Flood control-room console, Kerala 2018',
    tools: ['Figma', 'FigJam', 'Desk Research', 'Systems Design'],
    thumbnail: `${BASE_URL}images/projects/ozhukku/thumbnail.webp`,
    externalPage: `${BASE_URL}ozhukku.html`,

    overview: 'Ozhukku (ഒഴുക്ക്, “flow”) imagines one tool for a district flood control room: a map the whole room can read, a desk for acting, and a handover that writes itself during the shift. Self-initiated concept; scenario data is synthetic and illustrations are AI-generated.',

    role: 'Solo — research, UX, UI, validation',
    duration: '4 weeks',
    teamSize: 'Solo',
    platform: ['Desktop', 'Wall display'],

    extendedSections: [],
    gallery: [
      `${BASE_URL}images/projects/ozhukku/screen-desk.webp`,
      `${BASE_URL}images/projects/ozhukku/screen-wall.webp`,
      `${BASE_URL}images/projects/ozhukku/screen-normal.webp`,
      `${BASE_URL}images/projects/ozhukku/screen-logcall.webp`,
      `${BASE_URL}images/projects/ozhukku/screen-merge.webp`,
      `${BASE_URL}images/projects/ozhukku/screen-merged.webp`,
      `${BASE_URL}images/projects/ozhukku/screen-handover.webp`,
      `${BASE_URL}images/projects/ozhukku/skel-v1.webp`,
      `${BASE_URL}images/projects/ozhukku/skel-v2.webp`,
      `${BASE_URL}images/projects/ozhukku/photo-navy-aerial-1.webp`,
      `${BASE_URL}images/projects/ozhukku/photo-navy-heli-rescue.webp`,
      `${BASE_URL}images/projects/ozhukku/photo-kottayam-wading.webp`,
    ],
}
