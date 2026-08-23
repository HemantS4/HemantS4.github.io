/**
 * @file Project schema (JSDoc — IDE autocomplete, no build step).
 *
 * Adding a new project?
 *   1. Copy an existing file in this folder as a template.
 *   2. Fill in the fields typed here. IDE will flag missing ones.
 *   3. Add the export to ./index.js in the position you want it to appear.
 *
 * All fields are optional except the ones marked required in the typedef.
 */

/**
 * @typedef {Object} ProjectLink
 * @property {string} [gdd]         — Link to Game Design Doc HTML
 * @property {string} [conceptGdd]  — Concept GDD
 * @property {string} [gameGdd]     — Game GDD
 * @property {string} [ppt]         — Slides / PDF
 * @property {string} [live]        — Live product URL
 * @property {string} [repo]        — Source code URL
 * @property {string} [itchIo]      — itch.io page URL
 */

/**
 * @typedef {Object} ExtendedSection
 * @property {string}   title
 * @property {string}   content            — Markdown-lite body. Supports **bold** and lists.
 * @property {string}  [image]             — Single image filename (relative to project folder).
 * @property {string[]}[images]            — Multiple images (full URLs).
 * @property {string}  [video]             — Video URL.
 * @property {string}  [videoUrl]          — Alt video URL field.
 */

/**
 * @typedef {Object} MetricEntry
 * @property {string|number} value
 * @property {string} label
 * @property {string} [description]
 * @property {string} [color]
 * @property {string} [unit]
 */

/**
 * @typedef {Object} ResearchData
 * @property {MetricEntry[]} [keyMetrics]
 * @property {MetricEntry[]} [researchFindings]
 * @property {MetricEntry[]} [userBarriers]
 * @property {MetricEntry[]} [octalysisBalance]
 */

/**
 * @typedef {Object} Project
 * @property {string}    id                — REQUIRED. URL slug. Lowercase, hyphen-separated.
 * @property {string}    title             — REQUIRED. Display title.
 * @property {string}    category          — REQUIRED. Short category label.
 * @property {string}    year              — Display year (e.g. '2025' or '2023-2025').
 * @property {string}    description       — Long-form summary.
 * @property {string}    shortDescription  — One-line tile blurb.
 * @property {string[]}  tools             — Tools/tech chip list.
 * @property {string}    thumbnail         — Full URL to the tile image.
 * @property {string}    [externalPage]    — If set, tile links here instead of /project/:id.
 * @property {string}    [overview]        — Overview paragraph on the detail page.
 * @property {string}    [role]            — Your role.
 * @property {string}    [duration]        — e.g. '2 weeks', 'Ongoing'.
 * @property {string}    [teamSize]        — e.g. 'Solo', '3 people'.
 * @property {string[]}  [platform]        — Target platforms.
 * @property {ExtendedSection[]} [extendedSections]
 * @property {string[]}  [challenges]
 * @property {string[]}  [solutions]
 * @property {string[]}  [features]
 * @property {ResearchData} [researchData]
 * @property {string[]}  [gallery]         — Full-URL image list for the detail-page gallery.
 * @property {string}    [videoUrl]        — Embed or file URL.
 * @property {ProjectLink} [links]
 * @property {boolean}   [isHidden]        — Excluded from Projects list; still routable by id.
 */

/**
 * Base URL for asset paths. Prefixed to every relative asset URL.
 * Configured by Vite's `base` option (see vite.config.js).
 */
export const BASE_URL = import.meta.env.BASE_URL || '/'

/**
 * Prefix an asset path with BASE_URL. Use in project files so paths stay portable
 * when the site is served from a subdirectory (GitHub Pages does this).
 *
 * @param {string} path — Path relative to /public (leading slash optional).
 * @returns {string}
 */
export const asset = (path) => `${BASE_URL}${path.replace(/^\/+/, '')}`
