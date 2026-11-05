/** @typedef {import('./schema.js').Project} Project */

import { BASE_URL } from './schema.js'

/** @type {Project} */
export const project = {
    id: 'landing',
    title: 'Landing',
    category: 'UX/UI Case Study · Mobile Product Design',
    year: '2026',
    hideDetailHeroText: true,
    description: 'A mobile housing app for the first 48 hours in a new city. Three lived moves (Bangalore 2024, Kochi April 2026, Bangalore now), two peer interviews, and an audit of 99acres, NoBroker, Magicbricks and WhatsApp broker groups became three design decisions: make the hotel bill ticking in rupees honest, route trust through people the user already knows, and name the tradeoff in writing before any lock-in.',
    shortDescription: 'Housing app for the week you’re sleeping in a hotel',
    tools: ['Figma', 'Claude', 'Autoethnography', 'Interviews', 'Design Systems', 'Prototyping'],
    thumbnail: `${BASE_URL}images/projects/Landing/landing-thumbnail.png`,

    overview: '',

    role: '',
    duration: '',
    teamSize: '',
    platform: [],

    extendedSections: [],

    challenges: [],

    solutions: [],

    features: [],

    gallery: [
      `${BASE_URL}images/projects/Landing/landing-full.webp`
    ],

    links: {}
  }
