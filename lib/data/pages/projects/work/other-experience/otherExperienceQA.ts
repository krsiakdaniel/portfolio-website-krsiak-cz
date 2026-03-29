import { SKILL_SVG } from '@/lib/data/pages/projects/work/other-experience/skillSvgPaths'

import { OtherExperienceData } from '@/lib/utils/typeDefinitions/interfaces'

import { ICON_EMOJI, OTHER_EXPERIENCE } from '@/localization'

export const otherExperienceQA: OtherExperienceData[] = [
  {
    id: 1,
    icon: '🤖',
    svgIcons: [SKILL_SVG.javascript, SKILL_SVG.typescript, SKILL_SVG.cypress],
    company: OTHER_EXPERIENCE.qualityAssurance.smartsupp.company,
    role: OTHER_EXPERIENCE.qualityAssurance.smartsupp.role,
    years: OTHER_EXPERIENCE.qualityAssurance.smartsupp.years,
    description: OTHER_EXPERIENCE.qualityAssurance.smartsupp.description,
  },
  {
    id: 2,
    icon: ICON_EMOJI.ladyBug,
    svgIcons: [SKILL_SVG.html, SKILL_SVG.css, SKILL_SVG.javascript],
    company: OTHER_EXPERIENCE.qualityAssurance.moravia.company,
    role: OTHER_EXPERIENCE.qualityAssurance.moravia.role,
    years: OTHER_EXPERIENCE.qualityAssurance.moravia.years,
    description: OTHER_EXPERIENCE.qualityAssurance.moravia.description,
  },
]
