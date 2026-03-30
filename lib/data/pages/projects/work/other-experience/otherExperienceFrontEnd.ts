import { SKILL_SVG } from '@/lib/data/pages/projects/work/other-experience/skillSvgPaths'

import { OtherExperienceData } from '@/lib/utils/typeDefinitions/interfaces'

import { ICON_EMOJI, OTHER_EXPERIENCE } from '@/localization'

export const otherExperienceFrontEnd: OtherExperienceData[] = [
  {
    id: 1,
    icon: ICON_EMOJI.manTechnologist.lightSkinTone,
    svgIcons: [SKILL_SVG.html, SKILL_SVG.css, SKILL_SVG.javascript],
    company: OTHER_EXPERIENCE.frontEnd.freelance.company,
    role: OTHER_EXPERIENCE.frontEnd.freelance.role,
    years: OTHER_EXPERIENCE.frontEnd.freelance.years,
    description: OTHER_EXPERIENCE.frontEnd.freelance.description,
  },
]
