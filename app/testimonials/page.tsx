import { Metadata } from 'next'

import PageContainer from '@/components/layout/PageContainer'
import PageNavigation from '@/components/layout/page-navigation/PageNavigation'
import BreadCrumbs from '@/components/shared/Breadcrumbs'
import Heading1 from '@/components/shared/Heading1'
import Highlight from '@/components/shared/Highlight'
import TestimonialSection from '@/components/testimonials/TestimonialSection'

import { metaDataTestimonials } from '@/lib/data/metadata/pages/metaDataTestimonials'
import { testimonialsData } from '@/lib/data/pages/testimonials'

import { TEXT } from '@/localization/english'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'
import { ID } from '@/lib/utils/constants/ids/elementIds'
import { PAGES_URL } from '@/lib/utils/constants/urls/pageUrls'

export const metadata: Metadata = {
  ...metaDataTestimonials,
}

const Testimonials = (): JSX.Element => {
  return (
    <PageContainer id={ID.websiteLink.testimonials}>
      <BreadCrumbs level1Url={PAGES_URL.testimonials} level1Text={TEXT.testimonials} />

      <div className="mt-10">
        <div>
          <Heading1>{TEXT.testimonials}</Heading1>
          <p className="mt-4 text-lg text-neutral-600" data-testid={DATA_TEST_IDS.page.testimonials.introduction}>
            I follow the Japanese 🇯🇵 philosophy of <Highlight text="Kaizen 改善" /> my whole life, continuously seeking
            improvement in my work and personal growth.
          </p>
        </div>

        <div className="mt-16 border-b pb-2 text-2xl font-bold uppercase">Professional Experience</div>
        <p className="mt-4 text-lg text-neutral-600">
          Below, you&apos;ll find insightful feedback from colleagues who have experienced my contributions firsthand.
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
        <div className="mt-4">
          {testimonialsData.slice(4).map((testimonial) => (
            <TestimonialSection
              key={testimonial.id}
              personPhoto={testimonial.personPhoto}
              personName={testimonial.personName}
              personJob={testimonial.personJob}
              testimonialText={testimonial.testimonialText}
            />
          ))}
        </div>

        {/* TODO: Add the following sections */}
        {/* <div className="mt-16 border-b pb-2 text-2xl font-bold uppercase">Fitness Moderator 🏋️‍♂️</div> */}
        {/* <div className="mt-16 border-b pb-2 text-2xl font-bold uppercase">Personality ✝️</div> */}
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
