import { SHARED } from '@/localization/english'

import { YEARS } from '@/lib/utils/constants/yearsExperience'
import { OtherExperienceData } from '@/lib/utils/typeDefinitions/interfaces'

export const otherExperienceFrontEnd: OtherExperienceData[] = [
  {
    id: 1,
    company: 'Freelance',
    role: 'Web Developer /\u00A0Consultant',
    description: `${YEARS.consultantWebsites} years ${SHARED.middleDot} part-time ${SHARED.emDash} Websites for small companies.`,
  },
]
