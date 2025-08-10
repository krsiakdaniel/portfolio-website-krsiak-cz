import ImageComponent from '@/components/shared/ImageComponent'

import { IMAGE_ALT } from '@/localization/english'

import { ImageLoading } from '@/lib/utils/typeDefinitions/enums'

import quote from '@/public/icons/svg/testimonial/quote.svg'

const IMAGE_WIDTH = 40
const IMAGE_HEIGHT = 40

const TestimonialQuote = () => {
  return (
    <ImageComponent
      src={quote}
      width={IMAGE_WIDTH}
      height={IMAGE_HEIGHT}
      alt={IMAGE_ALT.altIconQuote}
      loading={ImageLoading.LAZY}
    />
  )
}

export default TestimonialQuote
