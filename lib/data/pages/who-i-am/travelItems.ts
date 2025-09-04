import { TravelItem } from '@/lib/utils/typeDefinitions/interfaces'

import { ARIA_LABELS, ICON_EMOJI, WHO_I_AM } from '@/localization/english'

export const travelItems: TravelItem[] = [
  {
    id: WHO_I_AM.idCZ,
    icon: ICON_EMOJI.flagCzechRepublic,
    iconAria: ARIA_LABELS.emoji.flag.czechRepublic,
    text: WHO_I_AM.textCzechRepublic,
  },
  {
    id: WHO_I_AM.idSK,
    icon: ICON_EMOJI.flagSlovakia,
    iconAria: ARIA_LABELS.emoji.flag.slovakia,
    text: WHO_I_AM.textSlovakia,
  },
  {
    id: WHO_I_AM.idFI,
    icon: ICON_EMOJI.flagAlandIslands,
    iconAria: ARIA_LABELS.emoji.flag.alandIslands,
    text: WHO_I_AM.textAlandIslands,
  },
  {
    id: WHO_I_AM.idKR,
    icon: ICON_EMOJI.flagSouthKorea,
    iconAria: ARIA_LABELS.emoji.flag.southKorea,
    text: WHO_I_AM.textKorea,
  },
]
