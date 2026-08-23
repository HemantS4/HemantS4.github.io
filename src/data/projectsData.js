// Back-compat shim.
//
// Project data now lives in ./projects/, one file per project.
//   • Edit an existing project → open  src/data/projects/<id>.js
//   • Add a new project        → copy any file in src/data/projects/,
//                                 then register it in src/data/projects/index.js
//   • Change display order     → reorder the array in src/data/projects/index.js
//
// This file just re-exports so existing imports keep working.

export {
  projectsData,
  getProjectById,
  getAdjacentProjects,
} from './projects/index.js'
