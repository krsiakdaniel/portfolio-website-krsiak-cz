import { Metadata } from 'next'
import { FC } from 'react'

import PageContainer from '@/components/layout/PageContainer'
import PageNavigation from '@/components/layout/page-navigation/PageNavigation'
import TestimonialSection from '@/components/pages/testimonials/TestimonialSection'
import TestimonialsIntroduction from '@/components/pages/testimonials/TestimonialsIntroduction'
import BreadCrumbs from '@/components/shared/Breadcrumbs'
import Heading1 from '@/components/shared/Heading1'
import CallToActionLinkedIn from '@/components/shared/call-to-action/CallToActionLinkedIn'

import { metaDataTestimonials } from '@/lib/data/metadata/pages/metaDataTestimonials'
import { testimonialsData } from '@/lib/data/pages/testimonials'

import { TEXT } from '@/localization/english'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'
import { ID } from '@/lib/utils/constants/ids/elementIds'
import { PAGES_URL } from '@/lib/utils/constants/urls/pageUrls'

export const metadata: Metadata = {
  ...metaDataTestimonials,
}

const Testimonials: FC = (): JSX.Element => {
  return (
    <PageContainer id={ID.websiteLink.testimonials}>
      <BreadCrumbs level1Url={PAGES_URL.testimonials} level1Text={TEXT.testimonials} />

      <div className="mt-10">
        <div>
          <Heading1>{TEXT.testimonials}</Heading1>
          <TestimonialsIntroduction />
        </div>

        <div className="mt-16 border-b pb-2 text-2xl font-bold uppercase">Character References</div>
        <p className="mt-4 text-lg text-neutral-600">
          In this section, you&apos;ll find personal testimonials that highlight my integrity and reliability.
        </p>

        <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
          {testimonialsData.slice(4, 6).map((testimonial) => (
            <TestimonialSection
              key={testimonial.id}
              personPhoto={testimonial.personPhoto}
              personName={testimonial.personName}
              personJob={testimonial.personJob}
              testimonialText={testimonial.testimonialText}
            />
          ))}
        </div>

        <div className="mt-16 border-b pb-2 text-2xl font-bold uppercase">Professional Endorsements</div>
        <p className="mt-4 text-lg text-neutral-600">
          Below, you&apos;ll find feedback from colleagues who have experienced my contributions at work.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-2">
          {testimonialsData.slice(0, 4).map((testimonial) => (
            <TestimonialSection
              key={testimonial.id}
              personPhoto={testimonial.personPhoto}
              personName={testimonial.personName}
              personJob={testimonial.personJob}
              testimonialText={testimonial.testimonialText}
            />
          ))}
        </div>

        <CallToActionLinkedIn />

        {/* TODO: Add Fitness Moderator section */}
        {/* <div className="mt-16 border-b pb-2 text-2xl font-bold uppercase">Fitness Moderator 🏋️‍♂️</div> */}
      </div>
      <PageNavigation
        linkPrevious={PAGES_URL.personal.mainUrl}
        namePrevious={TEXT.personalProjects}
        dataTestIdPrevious={DATA_TEST_IDS.page.testimonials.previous}
      />
    </PageContainer>
  )
}

export default Testimonials
