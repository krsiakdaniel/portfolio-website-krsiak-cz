import { TEXT } from '@/localization/english'

import { TestimonialItem } from '@/lib/utils/interfaces/interfaces'

import personCastro from '@/public/images/webp/testimonials/personal/alexandre-castro.webp'
import personMoorhead from '@/public/images/webp/testimonials/personal/jonathan-moorhead.webp'

export const personalTestimonials: TestimonialItem[] = [
  {
    id: TEXT.nameMoorhead,
    personPhoto: personMoorhead,
    personName: `✝️ ${TEXT.nameMoorhead}`,
    personJob: 'Baptist Pastor ~ Grace Community Church',
    testimonialText: `
      I have known Daniel for almost a decade and he has always proven himself faithful.
      He has always been very dedicated to his employment, and has always been very respectful in his words and opinions.
      I am very thankful for our friendship.
    `,
  },
  {
    id: TEXT.nameCastro,
    personPhoto: personCastro,
    personName: `🤝 ${TEXT.nameCastro}`,
    personJob: 'QA Tester and Content Manager ~\u00A0Smartlook',
    testimonialText: `
      On a personal note, Daniel helped me a great deal, back when I first started at Smartsupp. With him, I managed to learn so much stuff on many different topics. 
      To this day, I still rely on Daniel as a go-to person when I need advice on specific topics.
    `,
  },
]
