import { Metadata } from 'next'

import PageNavigation from '@/components/layout/pages/navigation-previous-next/PageNavigation'
import PageContainer from '@/components/layout/pages/PageContainer'
import TestimonialSection from '@/components/pages/testimonials/TestimonialSection'
import BreadCrumbs from '@/components/shared/Breadcrumbs'
import Heading1 from '@/components/shared/Heading1'
import Highlight from '@/components/shared/Highlight'

import { metaDataTestimonials } from '@/lib/data/metadata/pages/metaDataTestimonials'
import { testimonialsData } from '@/lib/data/pages/testimonials'

import { TEXT } from '@/localization/english'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/dataTestIds'
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
            I am a dedicated <Highlight text="React Developer" /> with expertise in <Highlight text="QA Automation" />{' '}
            and have a proven track record in leading teams as a <Highlight text="Team Leader" />.
          </p>
        </div>

        <div className="mt-16 border-b pb-2 text-2xl font-bold uppercase">Professional Experience</div>
        <p className="mt-4 text-lg text-neutral-600">
          Below, you&apos;ll find insightful feedback from colleagues who have experienced my contributions at work.
        </p>

        <div className="mt-8 flex flex-col lg:grid lg:grid-cols-2 lg:gap-4">
          {testimonialsData.slice(0, 4).map((testimonial) => (
            <TestimonialSection
              key={testimonial.id}
              personPhoto={testimonial.personPhoto}
              personName={testimonial.personName}
              personJob={testimonial.personJob}
              testimonialText={testimonial.testimonialText}
            />
          ))}
          <div className="flex justify-center lg:col-span-2">
            <TestimonialSection
              key={testimonialsData[4].id}
              personPhoto={testimonialsData[4].personPhoto}
              personName={testimonialsData[4].personName}
              personJob={testimonialsData[4].personJob}
              testimonialText={testimonialsData[4].testimonialText}
            />
          </div>
        </div>

        {/* TODO: Add the following sections */}
        {/* <div className="mt-16 border-b pb-2 text-2xl font-bold uppercase">Fitness Moderator 🏋️‍♂️</div> */}
        {/* <div className="mt-16 border-b pb-2 text-2xl font-bold uppercase">Personality ✝️</div> */}
      </div>

      <PageNavigation
        linkPrevious={PAGES_URL.resume}
        namePrevious={TEXT.resume}
        dataTestIdPrevious={DATA_TEST_IDS.page.testimonials.previous}
        linkNext={PAGES_URL.work.mainUrl}
        nameNext={TEXT.workExperience}
        dataTestIdNext={DATA_TEST_IDS.page.testimonials.next}
      />
    </PageContainer>
  )
}

export default Testimonials
