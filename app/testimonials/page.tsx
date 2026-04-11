import { Metadata } from 'next'

import PageContainer from '@/components/layout/page-container/PageContainer'
import PageNavigation from '@/components/layout/page-navigation/PageNavigation'
import BreadCrumbs from '@/components/shared/breadcrumbs/Breadcrumbs'
import CallToActionLinkedIn from '@/components/shared/call-to-action/cta-banners/CallToActionLinkedIn'
import Heading from '@/components/shared/heading/Heading'

import { fitnessCoachTestimonials } from '@/data/pages/testimonials/fitnessCoachTestimonials'
import { personalTestimonials } from '@/data/pages/testimonials/personalTestimonials'
import { workTestimonials } from '@/data/pages/testimonials/workTestimonials'

import { ID } from '@/lib/utils/constants/ids/elementIds'
import { PAGES_URL } from '@/lib/utils/constants/urls/pageUrls'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'

import TestimonialsIntroduction from '@/features/testimonials/components/testimonials-introduction/TestimonialsIntroduction'
import TestimonialsSection from '@/features/testimonials/components/testimonials-section/TestimonialsSection'
import { TESTIMONIALS } from '@/features/testimonials/localization'
import { metaDataTestimonials } from '@/features/testimonials/metadata'
import { ARIA_LABELS, ICON_EMOJI, TEXT } from '@/localization'

export const metadata: Metadata = {
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
        <CallToActionLinkedIn />

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
      </div>

      <PageNavigation
        linkPrevious={PAGES_URL.whoIAm}
        iconPrevious={ICON_EMOJI.wavingHand}
        namePrevious={TEXT.whoIAm}
        dataTestIdPrevious={DATA_TEST_IDS.pageNavigation.testimonials.previous}
      />
    </PageContainer>
  )
}

export default Testimonials
