import { ICON_EMOJI } from '@/localization/english'
import { TEXT_DATA } from '@/localization/english-texts-data'

import { TestimonialItem } from '@/lib/utils/typeDefinitions/interfaces'

import personPopa from '@/public/images/webp/testimonials/work/daniel-popa.webp'
import personLosseff from '@/public/images/webp/testimonials/work/inka-losseff.webp'
import personKvapil from '@/public/images/webp/testimonials/work/roman-kvapil.webp'
import personPridalek from '@/public/images/webp/testimonials/work/vojtech-pridalek.webp'

export const workTestimonials: TestimonialItem[] = [
  {
    id: TEXT_DATA.work.losseff.name,
    personPhoto: personLosseff,
    personIcon: ICON_EMOJI.woman.officeWorker,
    personName: TEXT_DATA.work.losseff.name,
    personJob: TEXT_DATA.work.losseff.job,
    personCompany: TEXT_DATA.work.losseff.company,
    testimonialText: TEXT_DATA.work.losseff.text,
  },
  {
    id: TEXT_DATA.work.kvapil.name,
    personPhoto: personKvapil,
    personIcon: ICON_EMOJI.man.officeWorker,
    personName: TEXT_DATA.work.kvapil.name,
    personJob: TEXT_DATA.work.kvapil.job,
    personCompany: TEXT_DATA.work.kvapil.company,
    testimonialText: TEXT_DATA.work.kvapil.text,
  },
  {
    id: TEXT_DATA.work.pridalek.name,
    personPhoto: personPridalek,
    personIcon: ICON_EMOJI.man.officeWorker,
    personName: TEXT_DATA.work.pridalek.name,
    personJob: TEXT_DATA.work.pridalek.job,
    personCompany: TEXT_DATA.work.pridalek.company,
    testimonialText: TEXT_DATA.work.pridalek.text,
  },
  {
    id: TEXT_DATA.work.popa.name,
    personPhoto: personPopa,
    personIcon: ICON_EMOJI.man.officeWorker,
    personName: TEXT_DATA.work.popa.name,
    personJob: TEXT_DATA.work.popa.job,
    personCompany: TEXT_DATA.work.popa.company,
    testimonialText: TEXT_DATA.work.popa.text,
  },
]
