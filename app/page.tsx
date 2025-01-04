import { Metadata } from 'next'

import PageNavigation from '@/components/layout/page-navigation/PageNavigation'
import PageContainer from '@/components/layout/PageContainer'
import CallToActionResume from '@/components/pages/home/call-to-action-resume/CallToActionResume'
import Companies from '@/components/pages/home/Companies'
import WhatIDoMindset from '@/components/pages/home/expertise/MySKills'
import Hero from '@/components/pages/home/hero/Hero'
import ScanMyContactQR from '@/components/pages/home/ScanMyContactQR'
import Skills from '@/components/pages/home/skills/Skills'
import SkillsMain from '@/components/pages/home/skills/SkillsMain'

import { metaDataShared } from '@/lib/data/metadata/shared/metaDataShared'

import { TEXT } from '@/localization/english'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'
import { ID } from '@/lib/utils/constants/ids/elementIds'
import { PAGES_URL } from '@/lib/utils/constants/urls/pageUrls'

export const metadata: Metadata = {
  ...metaDataShared,
}

const Page = (): JSX.Element => {
  return (
    <PageContainer id={ID.home}>
      <Hero />
      <Skills />
      <CallToActionResume />
      <SkillsMain />
      <WhatIDoMindset />
      <Companies />
      <ScanMyContactQR />

      <PageNavigation
        linkNext={PAGES_URL.resume}
        nameNext={TEXT.resume}
        dataTestIdNext={DATA_TEST_IDS.page.home.next}
      />
    </PageContainer>
  )
}

export default Page
