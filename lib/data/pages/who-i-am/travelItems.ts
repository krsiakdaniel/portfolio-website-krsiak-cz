import { TravelItem } from '@/lib/utils/typeDefinitions/interfaces'

import { ICON_EMOJI, WHO_I_AM } from '@/localization/english'

export const travelItems: TravelItem[] = [
  {
    id: WHO_I_AM.idCZ,
    flag: ICON_EMOJI.flagCzechRepublic,
    text: WHO_I_AM.textCzechRepublic,
  },
  {
    id: WHO_I_AM.idSK,
    flag: ICON_EMOJI.flagSlovakia,
    text: WHO_I_AM.textSlovakia,
  },
  {
    id: WHO_I_AM.idFI,
    flag: ICON_EMOJI.flagAlandIslands,
    text: WHO_I_AM.textAlandIslands,
  },
  {
    id: WHO_I_AM.idKR,
    flag: ICON_EMOJI.flagSouthKorea,
    text: WHO_I_AM.textKorea,
  },
]
