import { TravelItem } from '@/lib/utils/typeDefinitions/interfaces'

import { ICON_EMOJI, WHO_I_AM } from '@/localization/english'

export const travelItems: TravelItem[] = [
  {
    id: 'cz',
    icon: ICON_EMOJI.evergreenTree,
    flag: ICON_EMOJI.flagCzechRepublic,
    text: WHO_I_AM.textCzechRepublic,
  },
  {
    id: 'sk',
    icon: ICON_EMOJI.mountain,
    flag: ICON_EMOJI.flagSlovakia,
    text: WHO_I_AM.textSlovakia,
  },
  {
    id: 'fi',
    icon: ICON_EMOJI.ship,
    flag: ICON_EMOJI.flagAlandIslands,
    text: WHO_I_AM.textAlandIslands,
  },
  {
    id: 'kr',
    icon: ICON_EMOJI.japaneseCastle,
    flag: ICON_EMOJI.flagSouthKorea,
    text: WHO_I_AM.textKorea,
  },
]
