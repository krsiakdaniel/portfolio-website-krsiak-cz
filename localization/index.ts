// Backward compatibility - TEXT aggregation object
import { PAGE_HOME } from '@/features/home/localization'
import { CAREER_PATH, RESUME } from '@/features/resume/localization'
import { STATUS } from '@/features/status/localization'
import { TESTIMONIALS } from '@/features/testimonials/localization'
import { WHO_I_AM } from '@/features/who-i-am/localization'

import { ARIA_LABELS } from './accessibility/aria'
// Backward compatibility - TEXT_DATA aggregation object
import { BADGES } from './constants/badges'
import { CONTACT, MISC } from './misc'
import {
  CAREER_PATH as CAREER_PATH_DATA,
  CAREER_REACT_DEV,
  CAREER_TESTING,
  CAREER_WEB_DEV,
  JOBS,
  OTHER_EXPERIENCE,
} from './pages/careers'
import { COMPANIES, MY_WORK, PROJECTS, PROJECT_INFORMATION, WORK } from './pages/projects'
import { TESTIMONIALS as TESTIMONIALS_DATA } from './pages/testimonials'
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
export { CAREER_PATH, RESUME } from '@/features/resume/localization'
export { STATUS } from '@/features/status/localization'
export { TESTIMONIALS } from '@/features/testimonials/localization'
export { INTRODUCTION } from './pages/whoIAm'
export { SOUTH_KOREA, WHO_I_AM, WHO_I_AM_INTRODUCTION } from '@/features/who-i-am/localization'

// Accessibility
export { ARIA_LABELS } from './accessibility/aria'
export { IMAGE_ALT } from './accessibility/imageAlts'

// Metadata
export { META_DEFAULT } from './metadata/meta-default'
export { META_HOME } from '@/features/home/localization'

// Metadata - Projects - Work
export { META_GROUPON } from '@/features/work-groupon/localization'
export { META_KOMERCNI_BANKA } from '@/features/work-komercni-banka/localization'
export { META_KOOPERATIVA } from '@/features/work-kooperativa/localization'
export { META_MORAVIA } from '@/features/work-moravia/localization'
export { META_O2ITS_AI_POWERED_CHAT_DASHBOARD } from '@/features/work-o2its-ai-powered-chat-dashboard/localization'
export { META_O2ITS_PUBLIC_TENDERS_PORTAL } from '@/features/work-o2its-public-tenders-portal/localization'
export { META_PROJECTS_OVERVIEW_WORK } from '@/features/work-experience/localization'
export { META_SMARTSUPP_DASHBOARD } from '@/features/work-smartsupp-dashboard/localization'
export { META_SMARTSUPP_HELP } from '@/features/work-smartsupp-help/localization'
export { META_SMARTSUPP_WEB } from '@/features/work-smartsupp-web/localization'

// Metadata - Resume
export { META_RESUME } from '@/features/resume/localization'

// Metadata - Projects - Personal
export { META_KOREAN_EASY } from '@/features/personal-korean-easy/localization'
export { META_KRSIAK } from '@/features/personal-krsiak/localization'
export { META_PROJECTS_OVERVIEW_PERSONAL } from '@/features/personal-projects/localization'

// Metadata - Other pages
export { META_STATUS } from '@/features/status/localization'
export { META_TESTIMONIALS } from '@/features/testimonials/localization'
export { META_WHO_I_AM } from '@/features/who-i-am/localization'

// Misc
export { ANALYTICS_WARNING, CONTACT, MISC } from './misc'

// Data
export { BADGES } from './constants/badges'
export {
  CAREER_PATH as CAREER_PATH_DATA,
  CAREER_REACT_DEV,
  CAREER_TESTING,
  CAREER_WEB_DEV,
  JOBS,
  OTHER_EXPERIENCE,
} from './pages/careers'
export {
  PROJECTS_PERSONAL_KRSIAK,
  PROJECTS_PERSONAL_KRSIAK_OVERVIEW,
} from './pages/projects/personal-krsiak'
export {
  PROJECTS_PERSONAL_KOREAN_EASY,
  PROJECTS_PERSONAL_KOREAN_EASY_OVERVIEW,
} from './pages/projects/personal-korean-easy'
export {
  PROJECTS_WORK_GROUPON,
  PROJECTS_WORK_GROUPON_OVERVIEW,
} from './pages/projects/work-groupon'
export {
  PROJECTS_WORK_KOMERCNI_BANKA,
  PROJECTS_WORK_KOMERCNI_BANKA_OVERVIEW,
} from './pages/projects/work-komercni-banka'
export {
  PROJECTS_WORK_KOOPERATIVA,
  PROJECTS_WORK_KOOPERATIVA_OVERVIEW,
} from './pages/projects/work-kooperativa'
export {
  PROJECTS_WORK_MORAVIA,
  PROJECTS_WORK_MORAVIA_OVERVIEW,
} from './pages/projects/work-moravia'
export {
  PROJECTS_WORK_O2ITS_AI_CHAT_DASHBOARD,
  PROJECTS_WORK_O2ITS_AI_CHAT_DASHBOARD_OVERVIEW,
} from './pages/projects/work-o2its-ai-powered-chat-dashboard'
export {
  PROJECTS_WORK_O2ITS_PUBLIC_TENDERS_PORTAL,
  PROJECTS_WORK_O2ITS_PUBLIC_TENDERS_PORTAL_OVERVIEW,
} from './pages/projects/work-o2its-public-tenders-portal'
export {
  PROJECTS_WORK_SMARTSUPP_DASHBOARD,
  PROJECTS_WORK_SMARTSUPP_DASHBOARD_OVERVIEW,
} from './pages/projects/work-smartsupp-dashboard'
export {
  PROJECTS_WORK_SMARTSUPP_HELP,
  PROJECTS_WORK_SMARTSUPP_HELP_OVERVIEW,
} from './pages/projects/work-smartsupp-help'
export {
  PROJECTS_WORK_SMARTSUPP_WEB,
  PROJECTS_WORK_SMARTSUPP_WEB_OVERVIEW,
} from './pages/projects/work-smartsupp-web'
export { TESTIMONIALS as TESTIMONIALS_DATA } from './pages/testimonials'
export { PAGE_HOME } from '@/features/home/localization'

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
  ...OTHER_EXPERIENCE,
  ...PAGE_HOME,
}

// Empty metadata objects for backward compatibility
export const META_DATA_PAGES = {}
export const META_DATA_PAGES_PROJECTS_WORK = {}
export const META_DATA_PAGES_PROJECTS_PERSONAL = {}
