import { FC } from 'react'

import TestimonialPersonInfo from '@/components/pages/testimonials/TestimonialPersonInfo'
import TestimonialQuote from '@/components/pages/testimonials/TestimonialQuote'
import TestimonialText from '@/components/pages/testimonials/TestimonialText'

import { TestimonialProps } from '@/lib/utils/typeDefinitions/props/pages/testimonials'

const Testimonial: FC<TestimonialProps> = ({ personName, personJob, personPhoto, testimonialText }): JSX.Element => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
        <figure className="mx-auto max-w-screen-md">
          <TestimonialQuote />
          <TestimonialText text={testimonialText} />
          <figcaption className="mt-6 flex flex-row items-center space-x-4">
            <TestimonialPersonInfo name={personName} job={personJob} photo={personPhoto} />
          </figcaption>
        </figure>
      </div>
    </div>
  )
}

export default Testimonial
