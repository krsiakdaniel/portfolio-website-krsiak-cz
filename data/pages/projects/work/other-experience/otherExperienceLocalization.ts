import { OtherExperienceData } from '@/lib/types/interfaces'
import { ARIA_LABELS, ICON_EMOJI, OTHER_EXPERIENCE } from '@/localization'

export const otherExperienceLocalization: OtherExperienceData[] = [
  {
    id: 1,
    icon: ICON_EMOJI.globeShowingEuropeAfrica,
    iconAriaLabel: ARIA_LABELS.emoji.globe.showingEuropeAfrica,
    emojiIcons: [
      { emoji: ICON_EMOJI.flagUnitedKingdom, ariaLabel: ARIA_LABELS.emoji.flag.unitedKingdom },
      { emoji: ICON_EMOJI.flagCzechRepublic, ariaLabel: ARIA_LABELS.emoji.flag.czechRepublic },
      { emoji: ICON_EMOJI.flagSpain, ariaLabel: ARIA_LABELS.emoji.flag.spain },
      { emoji: ICON_EMOJI.flagFrance, ariaLabel: ARIA_LABELS.emoji.flag.france },
      { emoji: ICON_EMOJI.flagHungary, ariaLabel: ARIA_LABELS.emoji.flag.hungary },
      { emoji: ICON_EMOJI.flagGermany, ariaLabel: ARIA_LABELS.emoji.flag.germany },
      { emoji: ICON_EMOJI.flagItaly, ariaLabel: ARIA_LABELS.emoji.flag.italy },
      { emoji: ICON_EMOJI.flagNetherlands, ariaLabel: ARIA_LABELS.emoji.flag.netherlands },
      { emoji: ICON_EMOJI.flagPoland, ariaLabel: ARIA_LABELS.emoji.flag.poland },
    ],
    company: OTHER_EXPERIENCE.localization.smartsupp.company,
    role: OTHER_EXPERIENCE.localization.smartsupp.role,
    years: OTHER_EXPERIENCE.localization.smartsupp.years,
    description: OTHER_EXPERIENCE.localization.smartsupp.description,
  },
]
