import Image from 'next/image'
import { FC } from 'react'

import quote from '@/public/icons/svg/quote.svg'

const IMAGE_WIDTH = 40
const IMAGE_HEIGHT = 40

const TestimonialQuote: FC = (): JSX.Element => {
  return <Image src={quote} width={IMAGE_WIDTH} height={IMAGE_HEIGHT} alt="icon-quote" />
}

export default TestimonialQuote
