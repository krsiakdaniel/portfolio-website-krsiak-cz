import { ICON_EMOJI, TEXT } from '@/localization/english'

import { TestimonialItem } from '@/lib/utils/typeDefinitions/interfaces'

import personCastro from '@/public/images/webp/testimonials/personal/alexandre-castro.webp'
import personMoorhead from '@/public/images/webp/testimonials/personal/jonathan-moorhead.webp'

export const personalTestimonials: TestimonialItem[] = [
  {
    id: TEXT.nameMoorhead,
    personPhoto: personMoorhead,
    personIcon: ICON_EMOJI.latinCross,
    personName: TEXT.nameMoorhead,
    personJob: 'Baptist Pastor ~\u00A0Grace\u00A0Community\u00A0Church',
    testimonialText: `
      I have known Daniel for almost a decade and he has always proven himself faithful.
      He has always been very dedicated to his employment, and has always been very respectful in his words and opinions.
      I am very thankful for our friendship.
    `,
  },
  {
    id: TEXT.nameCastro,
    personPhoto: personCastro,
    personIcon: ICON_EMOJI.man.lightSkinTone,
    personName: TEXT.nameCastro,
    personJob: 'QA Tester and Content Manager ~\u00A0Smartlook',
    testimonialText: `
      On a personal note, Daniel helped me a great deal, when I started at Smartsupp. With him, I managed to learn so much on many different topics. 
      To this day, I still rely on Daniel as a go-to person when I need advice on specific topics.
    `,
  },
]
