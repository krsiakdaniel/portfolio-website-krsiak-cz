import { Testimonial } from '@/lib/utils/interfaces/interfaces'

import personCastro from '@/public/images/svg/testimonials/alexandre-castro.webp'
import personPopa from '@/public/images/svg/testimonials/daniel-popa.webp'
import personLosseff from '@/public/images/svg/testimonials/inka-losseff.webp'
import personKvapil from '@/public/images/svg/testimonials/roman-kvapil.webp'
import personPridalek from '@/public/images/svg/testimonials/vojtech-pridalek.webp'

const nameCastro = 'Alexandre Castro'
const nameKvapil = 'Roman Kvapil'
const nameLosseff = 'Inka Losseff'
const namePopa = 'Daniel Popa'
const namePridalek = 'Vojtech Pridalek'

export const testimonialsData: Testimonial[] = [
  {
    id: nameCastro,
    personPhoto: personCastro,
    personName: nameCastro,
    personJob: 'QA Tester and Content Manager ~\u00A0Smartlook',
    testimonialText: `
      On a personal note, Daniel helped me a\u00A0lot when I started at Smartsupp. 
      Thanks to him, I managed to gain proficiency in a\u00A0wide set of\u00A0tools.
    `,
  },
  {
    id: nameKvapil,
    personPhoto: personKvapil,
    personName: nameKvapil,
    personJob: 'Partner Account Manager ~\u00A0Microsoft',
    testimonialText: `
      I can recommend his knowledge and perspective about the IT globally
      and his behavior as a\u00A0person are excellent for team work.
    `,
  },
  {
    id: nameLosseff,
    personPhoto: personLosseff,
    personName: nameLosseff,
    personJob: 'Linguistic Services and Quality Management ~\u00A0Moravia IT',
    testimonialText: `
      Daniel is strong in creating all kinds of automation utilities, term processing, all kinds of\u00A0tracking.
      He has gained a lot of\u00A0experience in\u00A0bug processing.
    `,
  },
  {
    id: namePopa,
    personPhoto: personPopa,
    personName: namePopa,
    personJob: 'Service Management Lead ~\u00A0IBM',
    testimonialText: `
      I met Daniel Krsiak working on different team, he\u00A0was my desk-mate. I found him passionate about technologies,
      eager to learn all the time, communicative and willing to share knowledge.
    `,
  },
  {
    id: namePridalek,
    personPhoto: personPridalek,
    personName: namePridalek,
    personJob: 'Senior Localization Group Manager ~\u00A0Moravia IT',
    testimonialText: `
      Daniel has helped the team with his engineering skills focusing on\u00A0automating the routine of\u00A0bug tasks management.
      Working in\u00A0the\u00A0challenging role of bugfixing. Engineer bridging the\u00A0linguistic
      managers and the production teams.
    `,
  },
]
