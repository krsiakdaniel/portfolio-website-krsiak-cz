import Image, { StaticImageData } from 'next/image'
import { FC } from 'react'

import quote from '@/public/icons/svg/quote.svg'

type TestimonialSectionProps = {
  personPhoto: StaticImageData
  personName: string
  personJob: string
  testimonialText: string
}

const TestimonialSection: FC<TestimonialSectionProps> = ({
  personName,
  personJob,
  personPhoto,
  testimonialText,
}): JSX.Element => (
  <section className="bg-white dark:bg-gray-900">
    <div className="mx-auto max-w-screen-xl px-4 py-8 text-center lg:px-6 lg:py-16">
      <figure className="mx-auto max-w-screen-md">
        <Image src={quote} width={40} height={40} alt="icon-quote" />

        <blockquote>
          <p className="text-2xl font-medium text-gray-900 dark:text-white">{testimonialText}</p>
        </blockquote>

        <figcaption className="mt-6 flex flex-col items-center justify-center space-x-3 lg:flex-row">
          <Image
            src={personPhoto}
            width={48}
            height={48}
            alt={personName}
            className="rounded-full bg-violet-100 p-1 ring-1 ring-violet-300"
          />
          <div className="flex flex-col items-center lg:flex-row lg:divide-x-2 lg:divide-gray-500 lg:dark:divide-gray-700">
            <div className="pr-3 font-medium text-gray-900 dark:text-white">{personName}</div>
            <div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">{personJob}</div>
          </div>
        </figcaption>
      </figure>
    </div>
  </section>
)

export default TestimonialSection
