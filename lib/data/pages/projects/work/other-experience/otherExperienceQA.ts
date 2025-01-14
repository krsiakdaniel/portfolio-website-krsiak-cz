import { MONTHS, YEARS } from '@/lib/utils/constants/yearsExperience'
import { OtherExperienceData } from '@/lib/utils/interfaces/interfaces'

export const otherExperienceQA: OtherExperienceData[] = [
  {
    id: 1,
    company: 'Smartsupp',
    role: 'QA Automation - Team Leader',
    description: `${MONTHS.qaTeamLeaderAtSmartsupp} months — Set up Cypress E2E testing for SaaS company.`,
  },
  {
    id: 2,
    company: 'RWS - Moravia IT',
    role: 'Localization - Tester',
    description: `${YEARS.localizationTester} years — Testing Windows 7 + Windows Store layouts.`,
  },
]
