import { Metadata } from 'next'

import PageContainer from '@/components/layout/page-container/PageContainer'
import PageNavigation from '@/components/layout/page-navigation/PageNavigation'
import CallToActionResume from '@/components/shared/call-to-action/cta-banners/CallToActionResume'
import CallToActionWorkExperience from '@/components/shared/call-to-action/cta-banners/CallToActionWorkExperience'

import { ID } from '@/lib/utils/constants/ids/elementIds'
import { PAGES_URL } from '@/lib/utils/constants/urls/pageUrls'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'

import Companies from '@/features/home/components/companies/Companies'
import MyExpertise from '@/features/home/components/expertise/MyExpertise'
import Hero from '@/features/home/components/hero/Hero'
import Skills from '@/features/home/components/skills/Skills'
import SkillsMain from '@/features/home/components/skills/SkillsMain'
import HomeTestimonials from '@/features/home/components/testimonials/HomeTestimonials'
import { metaDataHome } from '@/features/home/metadata'
import { ICON_EMOJI, TEXT } from '@/localization'

export const metadata: Metadata = {
  ...metaDataHome,
}

const Page = () => {
  return (
    <PageContainer id={ID.home}>
      <Hero />
      <SkillsMain />
      <Skills />
      <Companies />
      <CallToActionWorkExperience />
      <MyExpertise />
      <HomeTestimonials />
      <CallToActionResume />

      <PageNavigation
        linkNext={PAGES_URL.workExperience}
        iconNext={ICON_EMOJI.manTechnologist.lightSkinTone}
        nameNext={TEXT.workExperience}
        dataTestIdNext={DATA_TEST_IDS.pageNavigation.home.next}
      />
    </PageContainer>
  )
}

export default Page
