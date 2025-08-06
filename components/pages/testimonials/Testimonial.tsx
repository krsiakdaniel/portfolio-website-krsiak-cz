import { FC } from 'react'

import TestimonialPersonInfo from '@/components/pages/testimonials/TestimonialPersonInfo'
import TestimonialQuote from '@/components/pages/testimonials/TestimonialQuote'
import TestimonialText from '@/components/pages/testimonials/TestimonialText'

import { TestimonialProps } from '@/lib/utils/typeDefinitions/props/pages/testimonials'

const Testimonial: FC<TestimonialProps> = ({
  personPhoto,
  personIcon,
  personName,
  personJob,
  personCompany,
  testimonialText,
  link = '',
  linkText = '',
}): JSX.Element => {
  return (
    <div className="mx-auto mt-4 max-w-(--breakpoint-xl) pt-8 md:px-8">
      <div className="mx-auto max-w-(--breakpoint-md)">
        <TestimonialQuote />
        <TestimonialText text={testimonialText} />
        <div className="mt-4 flex flex-row space-x-4">
          <TestimonialPersonInfo
            photo={personPhoto}
            icon={personIcon}
            name={personName}
            job={personJob}
            company={personCompany}
            link={link}
            linkText={linkText}
          />
        </div>
      </div>
    </div>
  )
}

export default Testimonial
