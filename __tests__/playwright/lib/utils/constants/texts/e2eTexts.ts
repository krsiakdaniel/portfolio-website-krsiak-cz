import { EM_DASH } from '@/lib/utils/constants/specialCharacters'

import { ICON_EMOJI } from '@/localization/constants/iconsEmoji'
import { PROJECTS } from '@/localization/pages/projects'
import { RESUME } from '@/localization/pages/resume'
import { TESTIMONIALS } from '@/localization/pages/testimonials'
import { COMMON_VALUES } from '@/localization/ui/common'
import { HOME } from '@/localization/ui/navigation'

import { WHO_I_AM } from '@/features/who-i-am/localization'

/**
 * Page heading texts as rendered in the DOM (emoji + title).
 * These match the textContent of <h1> elements across the site.
 */
export const PAGE_HEADINGS = {
  whoIAm: `${ICON_EMOJI.wavingHand}${WHO_I_AM.whoIAm}`,
  workExperience: `${ICON_EMOJI.manTechnologist.lightSkinTone}${PROJECTS.workExperience}`,
  resume: `${ICON_EMOJI.memo}${RESUME.resume}`,
  personalProjects: `${ICON_EMOJI.rocket}${PROJECTS.personalProjects}`,
  testimonials: `${ICON_EMOJI.speechBalloon}${TESTIMONIALS.testimonials}`,
} as const

/**
 * Hero section texts as rendered in the DOM.
 */
export const HERO_TEXTS = {
  heading: COMMON_VALUES.nameDanielKrsiak,
  headingSmall: `${COMMON_VALUES.reactDeveloper}${EM_DASH}${COMMON_VALUES.typeScript} &\u00A0${COMMON_VALUES.next}`,
  paragraph: `${HOME.heroText}\u00A0${ICON_EMOJI.flagCzechRepublic}`,
} as const

/**
 * Navigation and UI texts reused across tests.
 */
export const UI_TEXTS = {
  logo: HOME.logo,
  footerHome: HOME.logo,
  status: 'Status',
  projectDetails: 'Project details',
} as const
