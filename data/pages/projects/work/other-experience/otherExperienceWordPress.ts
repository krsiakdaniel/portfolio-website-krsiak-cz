import { SKILL_SVG } from '@/data/shared/skill-icons/skillSvgPaths'

import { OtherExperienceData } from '@/lib/types/interfaces'
import { ARIA_LABELS, ICON_EMOJI, OTHER_EXPERIENCE } from '@/localization'

export const otherExperienceWordPress: OtherExperienceData[] = [
  {
    id: 1,
    icon: ICON_EMOJI.manTechnologist.lightSkinTone,
    iconAriaLabel: ARIA_LABELS.emoji.manTechnologist.lightSkinTone,
    svgIcons: [SKILL_SVG.javascript, SKILL_SVG.php, SKILL_SVG.wordpress],
    company: OTHER_EXPERIENCE.wordPress.company,
    role: OTHER_EXPERIENCE.wordPress.role,
    years: OTHER_EXPERIENCE.wordPress.years,
    description: OTHER_EXPERIENCE.wordPress.description,
  },
]
