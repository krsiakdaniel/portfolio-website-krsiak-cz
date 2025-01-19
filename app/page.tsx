import { FC } from 'react'

import PageNavigation from '@/components/layout/page-navigation/PageNavigation'
import PageContainer from '@/components/layout/PageContainer'
import Companies from '@/components/pages/home/Companies'
import MyExpertise from '@/components/pages/home/expertise/MyExpertise'
import Hero from '@/components/pages/home/hero/Hero'
import Skills from '@/components/pages/home/skills/Skills'
import SkillsMain from '@/components/pages/home/skills/SkillsMain'
import SocialProof from '@/components/pages/resume/SocialProof'
import CallToActionResume from '@/components/shared/call-to-action/CallToActionResume'
import CallToActionWorkExperience from '@/components/shared/call-to-action/CallToActionWorkExperience'

import { metaDataHome } from '@/lib/data/metadata/pages/metaDataHome'

import { TEXT } from '@/localization/english'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'
import { ID } from '@/lib/utils/constants/ids/elementIds'
import { PAGES_URL } from '@/lib/utils/constants/urls/pageUrls'

export const metadata = {
  ...metaDataHome,
}

const Page: FC = (): JSX.Element => {
  return (
    <PageContainer id={ID.home}>
      <Hero />
      <SkillsMain />
      <Skills />
      <CallToActionWorkExperience />
      <MyExpertise />
      <Companies />
      <SocialProof />
      <CallToActionResume />

      <PageNavigation
        linkNext={PAGES_URL.work.mainUrl}
        nameNext={TEXT.workExperience}
        dataTestIdNext={DATA_TEST_IDS.page.home.next}
      />
    </PageContainer>
  )
}

export default Page
