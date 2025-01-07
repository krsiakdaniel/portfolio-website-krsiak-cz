import { Metadata } from 'next'
import { FC } from 'react'

import PageContainer from '@/components/layout/PageContainer'
import TestimonialsIntroduction from '@/components/pages/testimonials/TestimonialsIntroduction'
import TestimonialsSection from '@/components/pages/testimonials/TestimonialsSection'
import BreadCrumbs from '@/components/shared/Breadcrumbs'
import Heading1 from '@/components/shared/Heading1'

import { metaDataTestimonials } from '@/lib/data/metadata/pages/metaDataTestimonials'
import { personalTestimonials } from '@/lib/data/pages/testimonials/personalTestimonials'
import { workTestimonials } from '@/lib/data/pages/testimonials/workTestimonials'

import { TEXT } from '@/localization/english'

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

        <TestimonialsSection
          title="Character References"
          description="In this section, you'll find personal testimonials that highlight my integrity and reliability."
          testimonials={personalTestimonials}
        />

        <TestimonialsSection
          title="Professional References"
          description="Below, you'll find insightful feedback from colleagues who have experienced my contributions firsthand."
          testimonials={workTestimonials}
        />
      </div>
    </PageContainer>
  )
}

export default Testimonials
