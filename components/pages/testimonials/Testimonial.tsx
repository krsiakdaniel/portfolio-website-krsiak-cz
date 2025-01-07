import Image, { StaticImageData } from 'next/image'
import { FC } from 'react'

import quote from '@/public/icons/svg/quote.svg'

type TestimonialProps = {
  personPhoto: StaticImageData
  personName: string
  personJob: string
  testimonialText: string
}

const Testimonial: FC<TestimonialProps> = ({ personName, personJob, personPhoto, testimonialText }): JSX.Element => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
        <figure className="mx-auto max-w-screen-md">
          <Image src={quote} width={40} height={40} alt="icon-quote" />

          <blockquote>
            <p className="text-2xl font-medium text-gray-900 dark:text-white">{testimonialText}</p>
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
              <div className="font-medium text-gray-900 dark:text-white">{personName}</div>
              <div className="text-sm font-light text-gray-500 dark:text-gray-400">{personJob}</div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}

export default Testimonial
