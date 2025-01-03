import { Testimonial } from '@/lib/utils/interfaces/interfaces'

import personCastro from '@/public/images/webp/testimonials/alexandre-castro.webp'
import personPopa from '@/public/images/webp/testimonials/daniel-popa.webp'
import personLosseff from '@/public/images/webp/testimonials/inka-losseff.webp'
import personKvapil from '@/public/images/webp/testimonials/roman-kvapil.webp'
import personPridalek from '@/public/images/webp/testimonials/vojtech-pridalek.webp'

const nameCastro = 'Alexandre Castro'
const nameKvapil = 'Roman Kvapil'
const nameLosseff = 'Inka Losseff'
const namePopa = 'Daniel Popa'
const namePridalek = 'Vojtech Pridalek'

export const testimonialsData: Testimonial[] = [
  {
    id: nameKvapil,
    personPhoto: personKvapil,
    personName: nameKvapil,
    personJob: 'Partner Account Manager ~\u00A0Microsoft',
    testimonialText: `
      I can recommend his knowledge and perspective about the IT globally,
      and his behavior as a\u00A0person are excellent for team work.
    `,
  },
  {
    id: nameLosseff,
    personPhoto: personLosseff,
    personName: nameLosseff,
    personJob: 'Linguistic Services and Quality Management ~\u00A0Moravia IT',
    testimonialText: `
      Daniel is strong in creating automation utilities, term processing, all kinds of\u00A0tracking.
      He has gained a lot of\u00A0experience in\u00A0bug processing.
    `,
  },
  {
    id: namePopa,
    personPhoto: personPopa,
    personName: namePopa,
    personJob: 'Service Management Lead ~\u00A0IBM',
    testimonialText: `
      I met Daniel Krsiak working on different team, he\u00A0was my desk-mate.
      I found him passionate about technologies, eager to learn all the time, communicative and willing to share knowledge.
    `,
  },
  {
    id: namePridalek,
    personPhoto: personPridalek,
    personName: namePridalek,
    personJob: 'Senior Localization Group Manager ~\u00A0Moravia IT',
    testimonialText: `
      Daniel helped team with engineering skills, automating bug management tasks.
      In\u00A0the\u00A0role of\u00A0bug-fixing engineer, he bridged linguistic managers and\u00A0production teams.
    `,
  },
  {
    id: nameCastro,
    personPhoto: personCastro,
    personName: nameCastro,
    personJob: 'QA Tester and Content Manager ~\u00A0Smartlook',
    testimonialText: `
      His vast work experience in diverse environments\u00A0—\u00A0corporate, freelancing, and now as a member of a small team,
      and in positions\u00A0—\u00A0leading people, managing projects, liaising with partners and clients,
      has endowed him with a unique set of both soft and hard skills, which make him a team member that brings added value to every organization.
    `,
  },
]
