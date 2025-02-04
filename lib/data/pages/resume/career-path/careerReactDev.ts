import { SkillsInfo } from '@/lib/utils/typeDefinitions/interfaces'
import { ICON_EMOJI } from '@/localization/english'
import { TEXT_DATA } from '@/localization/english-texts-data'

export const careerReactDev: SkillsInfo[] = [
  {
    id: 0,
    text: `${ICON_EMOJI.speechBalloon} ${TEXT_DATA.smartsupp.text}`,
    years: TEXT_DATA.smartsupp.duration,
  },
  {
    id: 1,
    text: `${ICON_EMOJI.bank} ${TEXT_DATA.kb.text}`,
    years: TEXT_DATA.kb.duration,
  },
  {
    id: 2,
    text: `${ICON_EMOJI.umbrellaWithRainDrops} ${TEXT_DATA.koop.text}`,
    years: TEXT_DATA.koop.duration,
  },
]
