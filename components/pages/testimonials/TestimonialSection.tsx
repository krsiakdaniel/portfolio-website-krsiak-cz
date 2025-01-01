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
  <section>
    <div className="mx-auto max-w-screen-xl px-6 py-8 text-center lg:py-8">
      <figure className="mx-auto max-w-screen-md">
        <Image src={quote} alt="quote" width={32} height={32} />

        <blockquote>
          <p className="text-2xl font-medium text-gray-900 dark:text-white">{testimonialText}</p>
        </blockquote>

        <figcaption className="mt-6 flex flex-col items-center justify-center space-x-3">
          <Image
            src={personPhoto}
            alt={personName}
            width={48}
            height={48}
            className="rounded-full bg-violet-100 p-1 ring-1 ring-violet-300"
          />
          <div className="flex flex-col items-center lg:divide-gray-500 lg:dark:divide-gray-700">
            <div className="pr-3 font-medium text-gray-900 dark:text-white">{personName}</div>
            <div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">{personJob}</div>
          </div>
        </figcaption>
      </figure>
    </div>
  </section>
)

export default TestimonialSection
