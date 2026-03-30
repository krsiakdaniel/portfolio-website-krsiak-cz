import { OtherExperienceData } from '@/lib/utils/typeDefinitions/interfaces'

import { ICON_EMOJI, OTHER_EXPERIENCE } from '@/localization'

export const otherExperienceLocalization: OtherExperienceData[] = [
  {
    id: 1,
    icon: ICON_EMOJI.globeShowingEuropeAfrica,
    emojiIcons: [
      ICON_EMOJI.flagUnitedKingdom,
      ICON_EMOJI.flagCzechRepublic,
      ICON_EMOJI.flagSpain,
      ICON_EMOJI.flagFrance,
      ICON_EMOJI.flagHungary,
      ICON_EMOJI.flagGermany,
      ICON_EMOJI.flagItaly,
      ICON_EMOJI.flagNetherlands,
      ICON_EMOJI.flagPoland,
    ],
    company: OTHER_EXPERIENCE.localization.smartsupp.company,
    role: OTHER_EXPERIENCE.localization.smartsupp.role,
    years: OTHER_EXPERIENCE.localization.smartsupp.years,
    description: OTHER_EXPERIENCE.localization.smartsupp.description,
  },
]
