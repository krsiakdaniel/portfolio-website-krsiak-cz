import { ICON_EMOJI } from '@/localization/english'
import { TEXT_DATA } from '@/localization/english-texts-data'

import { EXTERNAL_URL } from '@/lib/utils/constants/urls/externalUrls'
import { TestimonialItem } from '@/lib/utils/typeDefinitions/interfaces'

import personMarco from '@/public/images/webp/testimonials/fitness/marco-walker-ng.webp'
import personRobert from '@/public/images/webp/testimonials/fitness/robert-kesterson.webp'
import personShane from '@/public/images/webp/testimonials/fitness/shane-duquette.webp'
import personSteve from '@/public/images/webp/testimonials/fitness/steve-mcmanus.webp'

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
  {
    id: TEXT_DATA.fitness.marco.name,
    personPhoto: personMarco,
    personIcon: ICON_EMOJI.manLiftingWeights,
    personName: TEXT_DATA.fitness.marco.name,
    personJob: TEXT_DATA.fitness.marco.job,
    personCompany: TEXT_DATA.fitness.marco.company,
    testimonialText: TEXT_DATA.fitness.marco.text,
    link: EXTERNAL_URL.bonyToBeastly,
    linkText: TEXT_DATA.fitness.marco.linkText,
  },
  {
    id: TEXT_DATA.fitness.steve.name,
    personPhoto: personSteve,
    personIcon: ICON_EMOJI.personLiftingWeights,
    personName: TEXT_DATA.fitness.steve.name,
    personJob: TEXT_DATA.fitness.steve.job,
    personCompany: TEXT_DATA.fitness.steve.company,
    testimonialText: TEXT_DATA.fitness.steve.text,
  },
]
