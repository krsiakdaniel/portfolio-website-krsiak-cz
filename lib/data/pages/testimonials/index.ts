import { Testimonial } from '@/lib/utils/interfaces/interfaces'
import { TEXT } from '@/localization/english'

import personCastro from '@/public/images/webp/testimonials/alexandre-castro.webp'
import personPopa from '@/public/images/webp/testimonials/daniel-popa.webp'
import personLosseff from '@/public/images/webp/testimonials/inka-losseff.webp'
import personMoorhead from '@/public/images/webp/testimonials/jonathan-moorhead.webp'
import personKvapil from '@/public/images/webp/testimonials/roman-kvapil.webp'
import personPridalek from '@/public/images/webp/testimonials/vojtech-pridalek.webp'

export const testimonialsData: Testimonial[] = [
  {
    id: TEXT.nameKvapil,
    personPhoto: personKvapil,
    personName: TEXT.nameKvapil,
    personJob: 'Partner Account Manager ~\u00A0Microsoft',
    testimonialText: `
      I can recommend his knowledge and perspective about the IT globally,
      and his behavior as a\u00A0person are excellent for team work.
    `,
  },
  {
    id: TEXT.nameLosseff,
    personPhoto: personLosseff,
    personName: TEXT.nameLosseff,
    personJob: 'Linguistic Services and Quality Management ~\u00A0Moravia IT',
    testimonialText: `
      Daniel is strong in creating automation utilities, term processing, all kinds of\u00A0tracking.
      He has gained a lot of\u00A0experience in\u00A0bug processing.
    `,
  },
  {
    id: TEXT.namePopa,
    personPhoto: personPopa,
    personName: TEXT.namePopa,
    personJob: 'Service Management Lead ~\u00A0IBM',
    testimonialText: `
      I met Daniel Krsiak working on different team, he\u00A0was my desk-mate.
      I found him passionate about technologies, eager to learn all the time, communicative and willing to share knowledge.
    `,
  },
  {
    id: TEXT.namePridalek,
    personPhoto: personPridalek,
    personName: TEXT.namePridalek,
    personJob: 'Senior Localization Group Manager ~\u00A0Moravia IT',
    testimonialText: `
      Daniel helped team with engineering skills, automating bug management tasks.
      In\u00A0the\u00A0role of\u00A0bug-fixing engineer, he bridged linguistic managers and\u00A0production teams.
    `,
  },
  {
    id: TEXT.nameMoorhead,
    personPhoto: personMoorhead,
    personName: `✝️ ${TEXT.nameMoorhead}`,
    personJob: 'Baptist Pastor',
    testimonialText: `
      I have known Daniel for almost a decade and he has always proven himself faithful.
      He has always been very dedicated to his employment, and has always been very respectful in his words and opinions.
      I am very thankful for our friendship.
    `,
  },
  {
    id: TEXT.nameCastro,
    personPhoto: personCastro,
    personName: TEXT.nameCastro,
    personJob: 'QA Tester and Content Manager ~\u00A0Smartlook',
    testimonialText: `
      On a personal note, Daniel helped me a great deal, back when I first started at Smartsupp. With him, I managed to learn so much stuff on many different topics. 
      To this day, I still rely on Daniel as a go-to person when I need advice on specific topics.
    `,
  },
]
