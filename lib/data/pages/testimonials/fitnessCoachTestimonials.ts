import { ICON_EMOJI } from '@/localization/english'
import { TEXT_DATA } from '@/localization/english-texts-data'

import { EXTERNAL_URL } from '@/lib/utils/constants/urls/externalUrls'
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
    personCompany: TEXT_DATA.fitness.shane.company,
    testimonialText: TEXT_DATA.fitness.shane.text,
    link: EXTERNAL_URL.bonyToBeastly,
    linkText: TEXT_DATA.fitness.shane.linkText,
  },
  {
    id: TEXT_DATA.fitness.robert.name,
    personPhoto: personRobert,
    personIcon: ICON_EMOJI.personLiftingWeights,
    personName: TEXT_DATA.fitness.robert.name,
    personJob: TEXT_DATA.fitness.robert.job,
    personCompany: TEXT_DATA.fitness.robert.company,
    testimonialText: TEXT_DATA.fitness.robert.text,
  },
]
