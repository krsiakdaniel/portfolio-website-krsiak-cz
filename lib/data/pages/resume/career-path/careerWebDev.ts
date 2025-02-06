import { ICON_EMOJI } from '@/localization/english'
import { CAREER_WEB_DEV } from '@/localization/english-texts-data'

import { SkillsInfo } from '@/lib/utils/typeDefinitions/interfaces'

export const careerWebDev: SkillsInfo[] = [
  {
    id: 0,
    icon: ICON_EMOJI.manTechnologist.lightSkinTone,
    text: CAREER_WEB_DEV.smartsupp.text,
    years: CAREER_WEB_DEV.smartsupp.years,
  },
  {
    id: 1,
    icon: ICON_EMOJI.moneyBag,
    text: CAREER_WEB_DEV.freelanceWeb.text,
    years: CAREER_WEB_DEV.freelanceWeb.years,
  },
  {
    id: 2,
    icon: ICON_EMOJI.desktopComputer,
    text: CAREER_WEB_DEV.freelanceCoder.text,
    years: CAREER_WEB_DEV.freelanceCoder.years,
  },
]
