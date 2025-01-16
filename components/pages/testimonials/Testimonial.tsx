import Image from 'next/image'
import { FC } from 'react'

import Paragraph from '@/components/shared/Paragraph'

import { TestimonialProps } from '@/lib/utils/typeDefinitions/componentProps'

import quote from '@/public/icons/svg/quote.svg'

const Testimonial: FC<TestimonialProps> = ({ personName, personJob, personPhoto, testimonialText }): JSX.Element => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
        <figure className="mx-auto max-w-screen-md">
          <Image src={quote} width={40} height={40} alt="icon-quote" />

          <blockquote>
            <Paragraph size="text-2xl">{testimonialText}</Paragraph>
          </blockquote>

          <figcaption className="mt-6 flex flex-row items-center space-x-4">
            <Image
              src={personPhoto}
              width={48}
              height={48}
              alt={personName}
              className="rounded-full bg-violet-100 p-1 ring-1 ring-violet-300"
            />
            <div className="flex flex-col">
              <div className="font-medium text-gray-900">{personName}</div>
              <div className="text-sm font-light text-gray-500">{personJob}</div>
            </div>
          </figcaption>
        </figure>
      </div>
    </div>
  )
}

export default Testimonial
