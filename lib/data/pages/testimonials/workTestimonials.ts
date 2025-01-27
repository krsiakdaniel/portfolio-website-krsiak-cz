import { ICON_EMOJI, TEXT } from '@/localization/english'

import { TestimonialItem } from '@/lib/utils/typeDefinitions/interfaces'

import personPopa from '@/public/images/webp/testimonials/work/daniel-popa.webp'
import personLosseff from '@/public/images/webp/testimonials/work/inka-losseff.webp'
import personKvapil from '@/public/images/webp/testimonials/work/roman-kvapil.webp'
import personPridalek from '@/public/images/webp/testimonials/work/vojtech-pridalek.webp'

export const workTestimonials: TestimonialItem[] = [
  {
    id: TEXT.nameLosseff,
    personPhoto: personLosseff,
    personIcon: ICON_EMOJI.woman.officeWorker,
    personName: TEXT.nameLosseff,
    personJob: 'Linguistic Services ~\u00A0Moravia\u00A0IT',
    testimonialText: `
      Daniel is strong in creating automation utilities, term processing, all kinds of\u00A0tracking.
      He has gained a lot of\u00A0experience in\u00A0bug processing.
    `,
  },
  {
    id: TEXT.nameKvapil,
    personPhoto: personKvapil,
    personIcon: ICON_EMOJI.man.officeWorker,
    personName: TEXT.nameKvapil,
    personJob: 'Partner Account Manager ~\u00A0Microsoft',
    testimonialText: `
      I can recommend his knowledge and perspective about the IT globally,
      and his behavior as a\u00A0person are excellent for team work.
    `,
  },
  {
    id: TEXT.namePridalek,
    personPhoto: personPridalek,
    personIcon: ICON_EMOJI.man.officeWorker,
    personName: TEXT.namePridalek,
    personJob: 'Senior Localization Group Manager ~\u00A0Moravia\u00A0IT',
    testimonialText: `
      Daniel helped team with engineering skills, automating bug management tasks.
      In\u00A0the\u00A0role of\u00A0bug-fixing engineer, he bridged linguistic managers and\u00A0production teams.
    `,
  },
  {
    id: TEXT.namePopa,
    personPhoto: personPopa,
    personIcon: ICON_EMOJI.man.officeWorker,
    personName: TEXT.namePopa,
    personJob: 'Service Management Lead ~\u00A0IBM',
    testimonialText: `
      I met Daniel Krsiak working on different team, he\u00A0was my desk-mate.
      I found him passionate about technologies, eager to learn all the time, communicative and willing to share knowledge.
    `,
  },
]
