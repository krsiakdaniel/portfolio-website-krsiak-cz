import { YEARS } from '@/lib/utils/constants/yearsExperience'
import { OtherExperienceData } from '@/lib/utils/typeDefinitions/interfaces'

export const otherExperienceFrontEnd: OtherExperienceData[] = [
  {
    id: 1,
    company: 'Freelance',
    role: 'Web Developer / Consultant',
    description: `${YEARS.consultantWebsites} years · part-time — I used to create websites for small companies.`,
  },
  {
    id: 2,
    company: 'Freelance',
    role: 'Web Developer',
    description: `${YEARS.webCoder} year — First web company job coding website layouts.`,
  },
]
