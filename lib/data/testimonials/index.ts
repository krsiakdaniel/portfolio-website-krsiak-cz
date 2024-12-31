import { Testimonial } from '@/lib/utils/interfaces/interfaces'

import personCastro from '@/public/images/svg/testimonials/alexandre-castro.webp'
import personPopa from '@/public/images/svg/testimonials/daniel-popa.webp'
import personLosseff from '@/public/images/svg/testimonials/inka-losseff.webp'
import personKvapil from '@/public/images/svg/testimonials/roman-kvapil.webp'
import personPridalek from '@/public/images/svg/testimonials/vojtech-pridalek.webp'

export const testimonialsData: Testimonial[] = [
  {
    id: 0,
    personPhoto: personCastro,
    personName: 'Alexandre Castro',
    personJob: 'QA Tester and Content Manager ~ Smartlook',
    testimonialText: `
      On a personal note, Daniel helped me a great deal when I first started at Smartsupp. 
      Thanks to him, I have managed to gain proficiency in a wide set of tools and working techniques
    `,
  },
  {
    id: 1,
    personPhoto: personKvapil,
    personName: 'Roman Kvapil',
    personJob: 'Partner Account Manager ~ Microsoft',
    testimonialText: `
      I can recommend his knowledge and perspective about the IT globally
      and his behavior as a person are excellent for team work.
    `,
  },
  {
    id: 2,
    personPhoto: personPridalek,
    personName: 'Vojtech Pridalek',
    personJob: 'Senior Localization Group Manager ~ Moravia IT',
    testimonialText: `
      Daniel has helped the team with his engineering skills focusing on automating the routine manual
      bug management tasks, working in the challenging role of bugfixing engineer bridging the linguistic
      managers and the production teams.
    `,
  },
  {
    id: 3,
    personPhoto: personLosseff,
    personName: 'Inka Losseff',
    personJob: 'Team Lead, Linguistic Services and Quality Management ~ Moravia IT',
    testimonialText: `
      Daniel is strong in creating all kinds of automation utilities (term processing, all kinds of tracking, etc.).
      He has gained a lot of experience in bug processing.
    `,
  },
  {
    id: 4,
    personPhoto: personPopa,
    personName: 'Daniel Popa',
    personJob: 'Service Management Lead ~ IBM',
    testimonialText: `
      I met Daniel Krsiak while working on different teams, he was my desk-mate. I found him passionate about new technologies,
      eager to learn all the time, communicative and willing to share his knowledge.
    `,
  },
]
