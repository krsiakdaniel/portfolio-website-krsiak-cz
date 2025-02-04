import { SkillsInfo } from '@/lib/utils/typeDefinitions/interfaces'
import { ICON_EMOJI } from '@/localization/english'
import { CAREER_REACT_DEV } from '@/localization/english-texts-data'

export const careerReactDev: SkillsInfo[] = [
  {
    id: 0,
    text: `${ICON_EMOJI.speechBalloon} ${CAREER_REACT_DEV.smartsupp.text}`,
    years: CAREER_REACT_DEV.smartsupp.duration,
  },
  {
    id: 1,
    text: `${ICON_EMOJI.bank} ${CAREER_REACT_DEV.kb.text}`,
    years: CAREER_REACT_DEV.kb.duration,
  },
  {
    id: 2,
    text: `${ICON_EMOJI.umbrellaWithRainDrops} ${CAREER_REACT_DEV.koop.text}`,
    years: CAREER_REACT_DEV.koop.duration,
  },
]
