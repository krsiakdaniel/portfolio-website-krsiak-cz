import { ICON_EMOJI } from '@/localization/english'
import { TEXT_DATA } from '@/localization/english-texts-data'

import { TestimonialItem } from '@/lib/utils/typeDefinitions/interfaces'

import personRobert from '@/public/images/webp/testimonials/fitness/robert-kesterson.webp'
import personShane from '@/public/images/webp/testimonials/fitness/shane-duquette.webp'

export const fitnessCoachTestimonials: TestimonialItem[] = [
  {
    id: TEXT_DATA.fitness.shane.name,
    personPhoto: personShane,
    personIcon: ICON_EMOJI.manLiftingWeights,
    personName: TEXT_DATA.fitness.shane.name,
    personJob: TEXT_DATA.fitness.shane.job,
    testimonialText: TEXT_DATA.fitness.shane.text,
    link: 'https://bonytobeastly.com/about-us/',
  },
  {
    id: TEXT_DATA.fitness.robert.name,
    personPhoto: personRobert,
    personIcon: ICON_EMOJI.personLiftingWeights,
    personName: TEXT_DATA.fitness.robert.name,
    personJob: TEXT_DATA.fitness.robert.job,
    testimonialText: TEXT_DATA.fitness.robert.text,
  },
]
