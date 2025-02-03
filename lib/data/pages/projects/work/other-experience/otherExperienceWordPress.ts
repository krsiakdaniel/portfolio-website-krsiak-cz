import { SHARED } from '@/localization/english'

import { YEARS } from '@/lib/utils/constants/yearsExperience'
import { OtherExperienceData } from '@/lib/utils/typeDefinitions/interfaces'

export const otherExperienceWordPress: OtherExperienceData[] = [
  {
    id: 1,
    company: 'Freelance',
    role: 'WordPress Developer /\u00A0Consultant',
    description: `${YEARS.consultantWordPress} years ${SHARED.middleDot} part-time ${SHARED.emDash} Websites for small companies.`,
  },
]
