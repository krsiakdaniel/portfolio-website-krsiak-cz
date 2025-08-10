import ImageComponent from '@/components/shared/ImageComponent'

import { IMAGE_ALT } from '@/localization/english'

import { ImageLoading } from '@/lib/utils/typeDefinitions/enums'

import quote from '@/public/icons/svg/testimonial/quote.svg'
import { TESTIMONIAL_QUOTE_ICON } from './constants'

const TestimonialQuote = () => {
  return (
    <ImageComponent
      src={quote}
      width={TESTIMONIAL_QUOTE_ICON.WIDTH}
      height={TESTIMONIAL_QUOTE_ICON.HEIGHT}
      alt={IMAGE_ALT.altIconQuote}
      loading={ImageLoading.LAZY}
    />
  )
}

export default TestimonialQuote
