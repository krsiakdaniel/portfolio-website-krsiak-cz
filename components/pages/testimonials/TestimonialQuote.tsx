import Image from 'next/image'
import { FC } from 'react'

import quote from '@/public/icons/svg/quote.svg'

const TestimonialQuote: FC = () => {
  return <Image src={quote} width={40} height={40} alt="icon-quote" />
}

export default TestimonialQuote
