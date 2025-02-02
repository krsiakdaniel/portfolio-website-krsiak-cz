import { FC } from 'react'

import ImageComponent from '@/components/shared/ImageComponent'

import { IMAGE_ALT } from '@/localization/english'

import quote from '@/public/icons/svg/testimonial/quote.svg'

const IMAGE_WIDTH = 40
const IMAGE_HEIGHT = 40

const TestimonialQuote: FC = (): JSX.Element => {
  return (
    <ImageComponent
      src={quote}
      width={IMAGE_WIDTH}
      height={IMAGE_HEIGHT}
      alt={IMAGE_ALT.iconQuote}
      loading="lazy"
    />
  )
}

export default TestimonialQuote
