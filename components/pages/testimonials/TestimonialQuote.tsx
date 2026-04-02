import ImageComponent from '@/components/shared/image-component/ImageComponent'

import quote from '@/public/icons/svg/testimonial/quote.svg'

import { ImageLoadingEnum } from '@/lib/types/enums'
import { IMAGE_ALT } from '@/localization'

import { TESTIMONIAL_QUOTE_ICON } from './TestimonialQuote.constants'

const TestimonialQuote = () => {
  return (
    <ImageComponent
      src={quote}
      width={TESTIMONIAL_QUOTE_ICON.WIDTH}
      height={TESTIMONIAL_QUOTE_ICON.HEIGHT}
      alt={IMAGE_ALT.altIconQuote}
      loading={ImageLoadingEnum.LAZY}
    />
  )
}

export default TestimonialQuote
