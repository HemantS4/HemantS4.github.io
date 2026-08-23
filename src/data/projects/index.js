// Barrel index for src/data/projects/
// Ordering here IS the display order on the site. Reorder freely.
// Add a new project: create <slug>.js, then import + list it below.

import { project as nmt_app } from './nmt-app.js'
import { project as flowlog } from './flowlog.js'
import { project as introsense } from './introsense.js'
import { project as neurosense } from './neurosense.js'
import { project as pack_less } from './pack-less.js'
import { project as flow_and_hold } from './flow-and-hold.js'
import { project as moti } from './moti.js'
import { project as dp2_motor_play } from './dp2-motor-play.js'
import { project as artwork } from './artwork.js'

/** @typedef {import('./schema.js').Project} Project */

/** @type {Project[]} */
export const projectsData = [
  nmt_app,
  flowlog,
  introsense,
  neurosense,
  pack_less,
  flow_and_hold,
  moti,
  dp2_motor_play,
  artwork,
]

/**
 * Look up a project by its `id`.
 * @param {string} id
 * @returns {Project | undefined}
 */
export const getProjectById = (id) =>
  projectsData.find((p) => p.id === id)

/**
 * Return the next and previous projects (wraps around).
 * @param {string} currentId
 * @returns {{ next: Project, previous: Project }}
 */
export const getAdjacentProjects = (currentId) => {
  const i = projectsData.findIndex((p) => p.id === currentId)
  const n = projectsData.length
  return {
    next: projectsData[(i + 1) % n],
    previous: projectsData[(i - 1 + n) % n],
  }
}
