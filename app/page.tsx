import { Metadata } from 'next'

import PageNavigation from '@/components/layout/pages/navigation-previous-next/PageNavigation'
import PageContainer from '@/components/layout/pages/PageContainer'
import Companies from '@/components/pages/home/Companies'
import SkillsForCompanyAndMyMindset from '@/components/pages/home/expertise/SkillsForCompanyAndMyMindset'
import Hero from '@/components/pages/home/hero/Hero'
import ScanMyContactQR from '@/components/pages/home/ScanMyContactQR'
import Skills from '@/components/pages/home/skills/Skills'
import SkillsMain from '@/components/pages/home/skills/SkillsMain'

import { metaDataShared } from '@/lib/data/metadata/metaDataShared'

import { TEXT } from '@/localization/english'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/dataTestIds'
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
      <SkillsMain />
      <Companies />
      <SkillsForCompanyAndMyMindset />
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
