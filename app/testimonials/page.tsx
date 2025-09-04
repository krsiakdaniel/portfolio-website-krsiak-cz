import PageNavigation from '@/components/layout/page-navigation/PageNavigation'
import PageContainer from '@/components/layout/PageContainer'
import TestimonialsIntroduction from '@/components/pages/testimonials/TestimonialsIntroduction'
import TestimonialsSection from '@/components/pages/testimonials/TestimonialsSection'
import BreadCrumbs from '@/components/shared/Breadcrumbs'
import CallToActionLinkedIn from '@/components/shared/call-to-action/cta-banners/CallToActionLinkedIn'
import Heading from '@/components/shared/Heading'

import { ID } from '@/lib/utils/constants/ids/elementIds'

import { metaDataTestimonials } from '@/lib/data/metadata/pages/metaDataTestimonials'
import { personalTestimonials } from '@/lib/data/pages/testimonials/personalTestimonials'
import { workTestimonials } from '@/lib/data/pages/testimonials/workTestimonials'

import { ARIA_LABELS, ICON_EMOJI, TESTIMONIALS, TEXT } from '@/localization/english'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'
import { fitnessCoachTestimonials } from '@/lib/data/pages/testimonials/fitnessCoachTestimonials'
import { PAGES_URL } from '@/lib/utils/constants/urls/pageUrls'

export const metadata = {
  ...metaDataTestimonials,
}

const Testimonials = () => {
  return (
    <PageContainer id={ID.testimonials}>
      <BreadCrumbs
        level1Url={PAGES_URL.testimonials}
        level1Icon={ICON_EMOJI.speechBalloon}
        level1AriaLabel={ARIA_LABELS.emoji.speechBalloon}
        level1Text={TEXT.testimonials}
      />

      <div className="mt-10">
        <div>
          <Heading as="h1">
            <span
              role="img"
              aria-label={ARIA_LABELS.emoji.speechBalloon}
              className="mr-4 select-none"
            >
              {ICON_EMOJI.speechBalloon}
            </span>
            <span>{TEXT.testimonials}</span>
          </Heading>
          <TestimonialsIntroduction />
        </div>

        {/* Office Work */}
        <TestimonialsSection
          title={TESTIMONIALS.sections.professional.title}
          icon={ICON_EMOJI.manTechnologist.lightSkinTone}
          iconAria={ARIA_LABELS.emoji.manTechnologist.lightSkinTone}
          description={TESTIMONIALS.sections.professional.description}
          testimonials={workTestimonials}
        />

        {/* Character */}
        <TestimonialsSection
          title={TESTIMONIALS.sections.character.title}
          icon={ICON_EMOJI.foldedHands}
          iconAria={ARIA_LABELS.emoji.foldedHands}
          description={TESTIMONIALS.sections.character.description}
          testimonials={personalTestimonials}
        />

        {/* Fitness Coach */}
        <TestimonialsSection
          title={TESTIMONIALS.sections.fitnessCoach.title}
          icon={ICON_EMOJI.personLiftingWeights}
          iconAria={ARIA_LABELS.emoji.personLiftingWeights}
          description={TESTIMONIALS.sections.fitnessCoach.description}
          testimonials={fitnessCoachTestimonials}
        />
        <CallToActionLinkedIn />
      </div>

      <PageNavigation
        linkPrevious={PAGES_URL.personal.mainUrl}
        iconPrevious={ICON_EMOJI.rocket}
        namePrevious={TEXT.personalProjects}
        dataTestIdPrevious={DATA_TEST_IDS.pageNavigation.testimonials.previous}
      />
    </PageContainer>
  )
}

export default Testimonials
