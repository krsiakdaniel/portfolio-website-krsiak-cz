import { ICON_EMOJI } from '@/localization/english'
import { TEXT_DATA } from '@/localization/english-texts-data'

import { TestimonialItem } from '@/lib/utils/typeDefinitions/interfaces'

import personShane from '@/public/images/webp/testimonials/fitness/shane-duquette.webp'

export const fitnessCoachTestimonials: TestimonialItem[] = [
  {
    id: TEXT_DATA.fitnessCoach.name,
    personPhoto: personShane,
    personIcon: ICON_EMOJI.manLiftingWeights,
    personName: TEXT_DATA.fitnessCoach.name,
    personJob: TEXT_DATA.fitnessCoach.job,
    testimonialText: TEXT_DATA.fitnessCoach.text,
  },
]
