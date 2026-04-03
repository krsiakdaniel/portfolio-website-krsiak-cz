import { TestimonialProps } from './Testimonial.types'
import TestimonialPersonInfo from './TestimonialPersonInfo'
import TestimonialQuote from './TestimonialQuote'
import TestimonialText from './TestimonialText'

const Testimonial = ({
  personPhoto,
  personIcon,
  personName,
  personJob,
  personCompany,
  testimonialText,
  link = '',
  linkText = '',
}: TestimonialProps) => {
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
