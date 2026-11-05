// ============================================================
// Homepage sections + nav registry — single source of truth.
//
// To change what appears on the homepage, or its order:
//   → edit `homepageSections` below.
// To change nav labels or order:
//   → edit `navItems` below.
//
// Rules:
//   • `sectionId` must match the DOM `id` set inside the component
//     (e.g. Hero renders <section id="home">). It's used by the
//     scrollspy to highlight the active nav link. Omit `sectionId`
//     for sections that shouldn't be tracked (e.g. Footer).
//   • `navItems[].id` should match one of the `sectionId` values,
//     unless it's a standalone anchor.
// ============================================================

import Hero     from '../components/Hero'
import Projects from '../components/Projects'
import About    from '../components/About'
import Contact  from '../components/Contact'
import Footer   from '../components/Footer'

/**
 * @typedef {Object} HomepageSection
 * @property {React.ComponentType} component  — Rendered as-is inside <main>.
 * @property {string} [sectionId]             — DOM id observed by the scrollspy.
 */

/** @type {HomepageSection[]} */
export const homepageSections = [
  { component: Hero,     sectionId: 'home'     },
  { component: Projects, sectionId: 'projects' },
  { component: About,    sectionId: 'about'    },
  { component: Contact,  sectionId: 'contact'  },
  { component: Footer                          },
]

/**
 * @typedef {Object} NavItem
 * @property {string} id     — Matches a `sectionId` (or in-page anchor).
 * @property {string} label  — Display text.
 */

/** @type {NavItem[]} */
export const navItems = [
  { id: 'home',     label: 'Home'     },
  { id: 'projects', label: 'Projects' },
  { id: 'about',    label: 'About'    },
  { id: 'contact',  label: 'Contact'  },
]

/** IDs the scrollspy observes (derived — do not edit). */
export const observedSectionIds = homepageSections
  .map((s) => s.sectionId)
  .filter(Boolean)
