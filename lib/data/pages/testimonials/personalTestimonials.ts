import { ICON_EMOJI } from '@/localization/english'
import { TEXT_DATA } from '@/localization/english-texts-data'

import { TestimonialItem } from '@/lib/utils/typeDefinitions/interfaces'

import personCastro from '@/public/images/webp/testimonials/personal/alexandre-castro.webp'
import personMoorhead from '@/public/images/webp/testimonials/personal/jonathan-moorhead.webp'

export const personalTestimonials: TestimonialItem[] = [
  {
    id: TEXT_DATA.personal.moorhead.name,
    personPhoto: personMoorhead,
    personIcon: ICON_EMOJI.latinCross,
    personName: TEXT_DATA.personal.moorhead.name,
    personJob: TEXT_DATA.personal.moorhead.job,
    testimonialText: TEXT_DATA.personal.moorhead.text,
  },
  {
    id: TEXT_DATA.personal.castro.name,
    personPhoto: personCastro,
    personIcon: ICON_EMOJI.man.lightSkinTone,
    personName: TEXT_DATA.personal.castro.name,
    personJob: TEXT_DATA.personal.castro.job,
    testimonialText: TEXT_DATA.personal.castro.text,
  },
]
