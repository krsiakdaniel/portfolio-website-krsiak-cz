// Constants
export { CUSTOMERS_COUNT } from './constants/customers'
export { FLAGS_LOCALIZATION } from './constants/flags'
export { ICON_EMOJI } from './constants/icons'

// UI texts
export { CALL_TO_ACTION } from './ui/callToAction'
export { COMMON_VALUES, DIVIDER_WITH_TEXT, SHARED, SOCIAL_LINKS } from './ui/common'
export { ERROR } from './ui/errors'
export { GALLERY } from './ui/gallery'
export { FOOTER, HOME } from './ui/navigation'

// Page texts
export {
  COMPANIES,
  MY_WORK,
  PROJECT_CRYPTOMANIA,
  PROJECT_INFORMATION,
  PROJECTS,
  WORK,
} from './pages/projects'
export { CAREER_PATH, RESUME } from './pages/resume'
export { STATUS } from './pages/status'
export { TESTIMONIALS } from './pages/testimonials'
export { INTRODUCTION, SOUTH_KOREA, WHO_I_AM } from './pages/whoIAm'

// Accessibility
export { ARIA_LABELS } from './accessibility/aria'
export { IMAGE_ALT } from './accessibility/imageAlts'

// Metadata
export {
  META_CRYPTOMANIA,
  META_DEFAULT,
  META_GROUPON,
  META_HOME,
  META_KOMERCNI_BANKA,
  META_KOOPERATIVA,
  META_KRSIAK,
  META_MORAVIA,
  META_PROJECTS_OVERVIEW_PERSONAL,
  META_PROJECTS_OVERVIEW_WORK,
  META_RESUME,
  META_SMARTSUPP_DASHBOARD,
  META_SMARTSUPP_HELP,
  META_SMARTSUPP_WEB,
  META_STATUS,
  META_TESTIMONIALS,
  META_WHO_I_AM,
} from './metadata/meta'

// Misc
export { ANALYTICS_WARNING, CONTACT, EASTER_EGG, MISC } from './misc'

// Data
export { BADGES } from './data/badges'
export {
  CAREER_PATH as CAREER_PATH_DATA,
  CAREER_REACT_DEV,
  CAREER_TESTING,
  CAREER_WEB_DEV,
  JOBS,
  OTHER_EXPERIENCE,
} from './data/careers'
export {
  PAGE_HOME,
  PROJECTS_PERSONAL,
  PROJECTS_PERSONAL_OVERVIEW,
  PROJECTS_WORK,
  WORK_PROJECTS_OVERVIEW,
} from './data/projects'
export { TESTIMONIALS as TESTIMONIALS_DATA } from './data/testimonials'

// Backward compatibility - TEXT aggregation object
import { ARIA_LABELS } from './accessibility/aria'
import { CONTACT, MISC } from './misc'
import { COMPANIES, MY_WORK, PROJECT_INFORMATION, PROJECTS, WORK } from './pages/projects'
import { CAREER_PATH, RESUME } from './pages/resume'
import { STATUS } from './pages/status'
import { TESTIMONIALS } from './pages/testimonials'
import { WHO_I_AM } from './pages/whoIAm'
import { CALL_TO_ACTION } from './ui/callToAction'
import { COMMON_VALUES, SHARED, SOCIAL_LINKS } from './ui/common'
import { ERROR } from './ui/errors'
import { FOOTER, HOME } from './ui/navigation'

export const TEXT = {
  ...CALL_TO_ACTION,
  ...COMMON_VALUES,
  ...WHO_I_AM,
  ...CONTACT,
  ...SHARED,
  ...PROJECT_INFORMATION,
  ...MY_WORK,
  ...SOCIAL_LINKS,
  ...HOME,
  ...COMPANIES,
  ...RESUME,
  ...TESTIMONIALS,
  ...WORK,
  ...PROJECTS,
  ...STATUS,
  ...MISC,
  ...ERROR,
  ...FOOTER,
  ...ARIA_LABELS,
  ...CAREER_PATH,
}

// Backward compatibility - TEXT_DATA aggregation object
import { BADGES } from './data/badges'
import {
  CAREER_PATH as CAREER_PATH_DATA,
  CAREER_REACT_DEV,
  CAREER_TESTING,
  CAREER_WEB_DEV,
  JOBS,
  OTHER_EXPERIENCE,
} from './data/careers'
import {
  PAGE_HOME,
  PROJECTS_PERSONAL,
  PROJECTS_PERSONAL_OVERVIEW,
  PROJECTS_WORK,
  WORK_PROJECTS_OVERVIEW,
} from './data/projects'
import { TESTIMONIALS as TESTIMONIALS_DATA } from './data/testimonials'

export const TEXT_DATA = {
  ...TESTIMONIALS_DATA,
  ...BADGES,
  ...JOBS,
  ...CAREER_PATH_DATA,
  ...CAREER_REACT_DEV,
  ...CAREER_TESTING,
  ...CAREER_WEB_DEV,
  ...PROJECTS_WORK,
  ...WORK_PROJECTS_OVERVIEW,
  ...OTHER_EXPERIENCE,
  ...PAGE_HOME,
  ...PROJECTS_PERSONAL,
  ...PROJECTS_PERSONAL_OVERVIEW,
}

// Empty metadata objects for backward compatibility
export const META_DATA_PAGES = {}
export const META_DATA_PAGES_PROJECTS_WORK = {}
export const META_DATA_PAGES_PROJECTS_PERSONAL = {}
