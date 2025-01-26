import { FC } from 'react'

import TestimonialPersonInfo from '@/components/pages/testimonials/TestimonialPersonInfo'
import TestimonialQuote from '@/components/pages/testimonials/TestimonialQuote'
import TestimonialText from '@/components/pages/testimonials/TestimonialText'

import { TestimonialProps } from '@/lib/utils/typeDefinitions/props/pages/testimonials'

const Testimonial: FC<TestimonialProps> = ({ personName, personJob, personPhoto, testimonialText }): JSX.Element => {
  return (
    <div className="mx-auto mt-4 max-w-screen-xl px-4 pt-8">
      <div className="mx-auto max-w-screen-md">
        <TestimonialQuote />
        <TestimonialText text={testimonialText} />
        <div className="mt-4 flex flex-row items-center space-x-4">
          <TestimonialPersonInfo name={personName} job={personJob} photo={personPhoto} />
        </div>
      </div>
    </div>
  )
}

export default Testimonial
