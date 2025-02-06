import { SkillsInfo } from '@/lib/utils/typeDefinitions/interfaces'
import { ICON_EMOJI } from '@/localization/english'
import { CAREER_REACT_DEV } from '@/localization/english-texts-data'

export const careerReactDev: SkillsInfo[] = [
  {
    id: 0,
    icon: ICON_EMOJI.speechBalloon,
    text: CAREER_REACT_DEV.smartsupp.text,
    years: CAREER_REACT_DEV.smartsupp.duration,
  },
  {
    id: 1,
    icon: ICON_EMOJI.bank,
    text: CAREER_REACT_DEV.komercniBanka.text,
    years: CAREER_REACT_DEV.komercniBanka.duration,
  },
  {
    id: 2,
    icon: ICON_EMOJI.umbrellaWithRainDrops,
    text: CAREER_REACT_DEV.kooperativa.text,
    years: CAREER_REACT_DEV.kooperativa.duration,
  },
]
