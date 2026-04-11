import DividerWithText from '@/components/shared/divider-with-text/DividerWithText'

import { personalTestimonials } from '@/data/pages/testimonials/personalTestimonials'
import { workTestimonials } from '@/data/pages/testimonials/workTestimonials'

import { DIVIDER_WITH_TEXT } from '@/localization'

import Testimonial from '@/features/testimonials/components/testimonial/Testimonial'

const HomeTestimonials = () => {
  const [moorhead, castro] = personalTestimonials
  const [, kvapil, , popa] = workTestimonials

  return (
    <div className="mt-20">
      <DividerWithText text={DIVIDER_WITH_TEXT.testimonials} />
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <Testimonial
          personPhoto={moorhead.personPhoto}
          personIcon={moorhead.personIcon}
          personName={moorhead.personName}
          personJob={moorhead.personJob}
          personCompany={moorhead.personCompany}
          testimonialText={moorhead.testimonialText}
        />
        <Testimonial
          personPhoto={castro.personPhoto}
          personIcon={castro.personIcon}
          personName={castro.personName}
          personJob={castro.personJob}
          personCompany={castro.personCompany}
          testimonialText={castro.testimonialText}
        />
        <Testimonial
          personPhoto={kvapil.personPhoto}
          personIcon={kvapil.personIcon}
          personName={kvapil.personName}
          personJob={kvapil.personJob}
          personCompany={kvapil.personCompany}
          testimonialText={kvapil.testimonialText}
        />
        <Testimonial
          personPhoto={popa.personPhoto}
          personIcon={popa.personIcon}
          personName={popa.personName}
          personJob={popa.personJob}
          personCompany={popa.personCompany}
          testimonialText={popa.testimonialText}
        />
      </div>
    </div>
  )
}

export default HomeTestimonials
