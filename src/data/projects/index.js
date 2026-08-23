// Barrel index for src/data/projects/
//
// Ordering here IS the display order on the site. Reorder freely.
// Add a new project: create <slug>.js, then import + list it below.
// To hide a project from the Projects grid without removing it,
// set `isHidden: true` on the project object.

import { project as nmt_app       } from './nmt-app.js'
import { project as flowlog       } from './flowlog.js'
import { project as introsense    } from './introsense.js'
import { project as neurosense    } from './neurosense.js'
import { project as pack_less     } from './pack-less.js'
import { project as ammo_batics   } from './ammo-batics.js'
import { project as flow_and_hold } from './flow-and-hold.js'
import { project as moti          } from './moti.js'
import { project as dp2_motor_play} from './dp2-motor-play.js'
import { project as artwork       } from './artwork.js'

/** @typedef {import('./schema.js').Project} Project */

/** @type {Project[]} */
export const projectsData = [
  nmt_app,
  flowlog,
  introsense,
  neurosense,
  pack_less,
  ammo_batics,
  flow_and_hold,
  moti,
  dp2_motor_play,
  artwork,
]

/**
 * Look up a project by its `id`. Includes hidden projects (they're
 * still routable at /project/:id even if not shown on the Projects grid).
 * @param {string} id
 * @returns {Project | undefined}
 */
export const getProjectById = (id) =>
  projectsData.find((p) => p.id === id)

/**
 * Return the next and previous projects for prev/next detail-page nav.
 * Skips hidden projects so the visible flow doesn't accidentally surface
 * them, but if the user is already ON a hidden project, we walk the full
 * list so the arrows still work.
 * @param {string} currentId
 * @returns {{ next: Project, previous: Project }}
 */
export const getAdjacentProjects = (currentId) => {
  const current = projectsData.find((p) => p.id === currentId)
  const pool = current && current.isHidden
    ? projectsData
    : projectsData.filter((p) => !p.isHidden)
  const i = pool.findIndex((p) => p.id === currentId)
  const n = pool.length
  return {
    next:     pool[(i + 1) % n],
    previous: pool[(i - 1 + n) % n],
  }
}
