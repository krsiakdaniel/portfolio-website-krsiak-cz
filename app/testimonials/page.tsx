import { FC } from 'react'

import PageNavigation from '@/components/layout/page-navigation/PageNavigation'
import PageContainer from '@/components/layout/PageContainer'
import TestimonialsIntroduction from '@/components/pages/testimonials/TestimonialsIntroduction'
import TestimonialsSection from '@/components/pages/testimonials/TestimonialsSection'
import BreadCrumbs from '@/components/shared/Breadcrumbs'
import CallToActionLinkedIn from '@/components/shared/call-to-action/cta-banners/CallToActionLinkedIn'
import Heading1 from '@/components/shared/Heading1'

import { metaDataTestimonials } from '@/lib/data/metadata/pages/metaDataTestimonials'
import { personalTestimonials } from '@/lib/data/pages/testimonials/personalTestimonials'
import { workTestimonials } from '@/lib/data/pages/testimonials/workTestimonials'

import { ICON_EMOJI, TEXT } from '@/localization/english'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'
import { ID } from '@/lib/utils/constants/ids/elementIds'
import { PAGES_URL } from '@/lib/utils/constants/urls/pageUrls'

export const metadata = {
  ...metaDataTestimonials,
}

const Testimonials: FC = (): JSX.Element => {
  return (
    <PageContainer id={ID.testimonials}>
      <BreadCrumbs
        level1Url={PAGES_URL.testimonials}
        level1Icon={ICON_EMOJI.speechBalloon}
        level1Text={TEXT.testimonials}
      />

      <div className="mt-10">
        <div>
          <Heading1>
            <span role="img" className="mr-4 select-none">
              {ICON_EMOJI.speechBalloon}
            </span>
            <span>{TEXT.testimonials}</span>
          </Heading1>
          <TestimonialsIntroduction />
        </div>

        <TestimonialsSection
          title="Professional References"
          description="Below, you'll find insightful feedback from colleagues who have experienced my contributions firsthand."
          testimonials={workTestimonials}
        />

        <CallToActionLinkedIn />

        <TestimonialsSection
          title="Character References"
          description="In this section, you'll find personal testimonials that highlight my integrity and reliability."
          testimonials={personalTestimonials}
        />
      </div>

      {/* TODO: Add section: 'Fitness Moderator' */}

      <PageNavigation
        linkPrevious={PAGES_URL.personal.mainUrl}
        iconPrevious={ICON_EMOJI.rocket}
        namePrevious={TEXT.personalProjects}
        dataTestIdPrevious={DATA_TEST_IDS.page.testimonials.previous}
      />
    </PageContainer>
  )
}

export default Testimonials
