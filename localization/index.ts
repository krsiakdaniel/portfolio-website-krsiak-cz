// Backward compatibility - TEXT aggregation object
import { ARIA_LABELS } from './accessibility/aria'
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
import { PROJECTS_PERSONAL, PROJECTS_PERSONAL_OVERVIEW } from './data/projects/personalProjects'
import { PROJECTS_WORK, WORK_PROJECTS_OVERVIEW } from './data/projects/workProjects'
import { TESTIMONIALS as TESTIMONIALS_DATA } from './data/testimonials'
import { CONTACT, MISC } from './misc'
import { PAGE_HOME } from './pages/home'
import { COMPANIES, MY_WORK, PROJECTS, PROJECT_INFORMATION, WORK } from './pages/projects'
import { CAREER_PATH, RESUME } from './pages/resume'
import { STATUS } from './pages/status'
import { TESTIMONIALS } from './pages/testimonials'
import { WHO_I_AM } from './pages/whoIAm'
import { CALL_TO_ACTION } from './ui/callToAction'
import { COMMON_VALUES, SHARED, SOCIAL_LINKS } from './ui/common'
import { ERROR } from './ui/errors'
import { FOOTER, HOME } from './ui/navigation'

// Constants
export { CUSTOMERS_COUNT } from './constants/customers'
export { FLAGS_LOCALIZATION, ICON_EMOJI } from './constants/iconsEmoji'

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
  PROJECTS,
  PROJECT_INFORMATION,
  PROJECT_KOREAN_EASY,
  PROJECT_KRSIAK,
  PROJECT_O2ITS,
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
export { META_DEFAULT } from './metadata/meta-default'
export { META_HOME } from './metadata/pages/meta-home'

// Metadata - Projects - Work
export { META_GROUPON } from './metadata/projects/work/meta-groupon'
export { META_KOMERCNI_BANKA } from './metadata/projects/work/meta-komercni-banka'
export { META_KOOPERATIVA } from './metadata/projects/work/meta-kooperativa'
export { META_MORAVIA } from './metadata/projects/work/meta-moravia'
export { META_O2ITS_AI_POWERED_CHAT_DASHBOARD } from './metadata/projects/work/meta-o2its-ai-powered-chat-dashboard'
export { META_O2ITS_PUBLIC_TENDERS_PORTAL } from './metadata/projects/work/meta-o2its-public-tenders-portal'
export { META_PROJECTS_OVERVIEW_WORK } from './metadata/projects/work/meta-projects-overview-work'
export { META_SMARTSUPP_DASHBOARD } from './metadata/projects/work/meta-smartsupp-dashboard'
export { META_SMARTSUPP_HELP } from './metadata/projects/work/meta-smartsupp-help'
export { META_SMARTSUPP_WEB } from './metadata/projects/work/meta-smartsupp-web'

// Metadata - Resume
export { META_RESUME } from './metadata/pages/meta-resume'

// Metadata - Projects - Personal
export { META_KOREAN_EASY } from './metadata/projects/personal/meta-korean-easy'
export { META_KRSIAK } from './metadata/projects/personal/meta-krsiak'
export { META_PROJECTS_OVERVIEW_PERSONAL } from './metadata/projects/personal/meta-projects-overview-personal'

// Metadata - Other pages
export { META_STATUS } from './metadata/pages/meta-status'
export { META_TESTIMONIALS } from './metadata/pages/meta-testimonials'
export { META_WHO_I_AM } from './metadata/pages/meta-who-i-am'

// Misc
export { ANALYTICS_WARNING, CONTACT, MISC } from './misc'

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
export { PROJECTS_PERSONAL, PROJECTS_PERSONAL_OVERVIEW } from './data/projects/personalProjects'
export { PROJECTS_WORK, WORK_PROJECTS_OVERVIEW } from './data/projects/workProjects'
export { TESTIMONIALS as TESTIMONIALS_DATA } from './data/testimonials'
export { PAGE_HOME } from './pages/home'

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
