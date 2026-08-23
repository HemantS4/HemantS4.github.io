/** @typedef {import('./schema.js').Project} Project */

import { BASE_URL } from './schema.js'

/** @type {Project} */
export const project = {
  id: 'ammo-batics',
  title: 'Ammo-batics',
  category: '2D Platformer',
  year: '2025',
  description: 'A 2D momentum-centric platformer where every shot fired becomes a movement decision.',
  shortDescription: '2D shooter platformer focusing on level design',
  tools: ['Unity', 'Photoshop', 'C#'],
  thumbnail: `${BASE_URL}images/projects/ammo-batics/Cover.png`,

  // Hidden from the Projects list, still routable at /project/ammo-batics.
  // Flip to false (or delete this line) to publish.
  isHidden: true,

  overview: '',

  role: 'Game Designer, Level Designer, Programmer',
  duration: '2 weeks',
  teamSize: 'Solo',
  platform: ['PC'],

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
    `${BASE_URL}images/projects/ammo-batics/Slides/Frame 12.png`,
  ],

  videoUrl: 'https://www.youtube.com/embed/oXmuplxd0LM',

  links: {
    itchIo: 'https://hemants4.itch.io/ammo-batics',
    gdd: `${BASE_URL}ammobatics_gdd.html`,
  },
}
