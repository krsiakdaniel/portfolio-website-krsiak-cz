import { ICON_EMOJI } from '@/localization/english'
import { CAREER_TESTING } from '@/localization/english-texts-data'

import { SkillsInfo } from '@/lib/utils/typeDefinitions/interfaces'

export const careerTesting: SkillsInfo[] = [
  {
    id: 0,
    icon: ICON_EMOJI.robot,
    text: CAREER_TESTING.qaLead.text,
    years: CAREER_TESTING.qaLead.years,
  },
  {
    id: 1,
    icon: ICON_EMOJI.flagCzechRepublic,
    text: CAREER_TESTING.locManager.text,
    years: CAREER_TESTING.locManager.years,
  },
  {
    id: 2,
    icon: ICON_EMOJI.ninja,
    text: CAREER_TESTING.locTester.text,
    years: CAREER_TESTING.locTester.years,
  },
]
