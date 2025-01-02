import { Metadata } from 'next'

import Companies from '@/components/homepage/Companies'
import WhatIDoMindset from '@/components/homepage/expertise/MySKills'
import Hero from '@/components/homepage/hero/Hero'
import Skills from '@/components/homepage/skills/Skills'
import SkillsMain from '@/components/homepage/skills/SkillsMain'
import PageContainer from '@/components/layout/PageContainer'
import PageNavigation from '@/components/page-navigation/PageNavigation'
import ScanMyContactQR from '@/components/pages/home/ScanMyContactQR'

import { metaDataShared } from '@/lib/utils/metadata/metaDataShared'

import { TEXT } from '@/localization/english'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'
import { ID } from '@/lib/utils/constants/ids/elementIds'
import { PAGES_URL } from '@/lib/utils/constants/urls/pageUrls'

export const metadata: Metadata = {
  ...metaDataShared,
}

const Page = (): JSX.Element => {
  return (
    <PageContainer id={ID.homepage}>
      <Hero />
      <Skills />
      <SkillsMain />
      <WhatIDoMindset />
      <Companies />
      <ScanMyContactQR />

      <PageNavigation
        linkNext={PAGES_URL.aboutMe}
        nameNext={TEXT.aboutMe}
        dataTestIdNext={DATA_TEST_IDS.page.home.next}
      />
    </PageContainer>
  )
}

export default Page
