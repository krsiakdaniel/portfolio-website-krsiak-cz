import { SKILL_SVG } from '@/data/shared/skill-icons/skillSvgPaths'
import { OtherExperienceData } from '@/lib/types/interfaces'
import { ARIA_LABELS, ICON_EMOJI, OTHER_EXPERIENCE } from '@/localization'

export const otherExperienceFrontEnd: OtherExperienceData[] = [
  {
    id: 1,
    icon: ICON_EMOJI.manTechnologist.lightSkinTone,
    iconAriaLabel: ARIA_LABELS.emoji.manTechnologist.lightSkinTone,
    svgIcons: [SKILL_SVG.html, SKILL_SVG.css, SKILL_SVG.javascript],
    company: OTHER_EXPERIENCE.frontEnd.freelance.company,
    role: OTHER_EXPERIENCE.frontEnd.freelance.role,
    years: OTHER_EXPERIENCE.frontEnd.freelance.years,
    description: OTHER_EXPERIENCE.frontEnd.freelance.description,
  },
]
