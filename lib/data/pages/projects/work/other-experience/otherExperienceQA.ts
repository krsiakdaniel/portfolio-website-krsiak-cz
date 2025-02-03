import { SHARED } from '@/localization/english'

import { MONTHS, YEARS } from '@/lib/utils/constants/yearsExperience'
import { OtherExperienceData } from '@/lib/utils/typeDefinitions/interfaces'

export const otherExperienceQA: OtherExperienceData[] = [
  {
    id: 1,
    company: 'Smartsupp',
    role: 'QA Automation - Team Leader',
    description: `${MONTHS.qaTeamLeaderAtSmartsupp} months ${SHARED.emDash} Set up Cypress E2E testing for SaaS company.`,
  },
  {
    id: 2,
    company: 'RWS - Moravia IT',
    role: 'Localization - Tester',
    description: `${YEARS.localizationTester} years ${SHARED.emDash} Testing Windows 7 + Windows Store layouts.`,
  },
]
