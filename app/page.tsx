import WhatIDoMindset from '@/components/homepage/expertise/MySKills'
import Hero from '@/components/homepage/hero/Hero'
import Skills from '@/components/homepage/skills/Skills'
import SkillsMain from '@/components/homepage/skills/SkillsMain'
import PageContainer from '@/components/layout/PageContainer'
import PageNavigation from '@/components/pageNavigation/PageNavigation'
import { TEXT } from '@/localization/english'
import { DATA_TEST_IDS } from '@/utils/constants/ids/dataTestIds'
import { ID } from '@/utils/constants/ids/elementIds'
import { PAGES_URL } from '@/utils/constants/urls/pageUrls'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: `${TEXT.nameDanielKrsiak} - ${TEXT.reactDeveloper}`,
  description:
    'Experienced React Developer from Brno Czech Republic. JavaScript, TypeScript, React, HTML, CSS, Sass, Tailwind CSS, Redux, GraphQL, Jest, Playwright, and Figma.',
  keywords: [
    `${TEXT.nameDanielKrsiak}`,
    `${TEXT.reactDeveloper}`,
    'Brno',
    'Czech Republic',
    'JavaScript',
    'TypeScript',
    'React',
    'HTML',
    'CSS',
    'Sass',
    'Tailwind CSS',
    'Redux',
    'GraphQL',
    'Jest',
    'Playwright',
    'Figma',
  ],
}

const Page = () => {
  return (
    <PageContainer id={ID.homepage}>
      <Hero />
      <Skills />
      <SkillsMain />
      <WhatIDoMindset />

      <PageNavigation
        linkNext={PAGES_URL.aboutMe}
        nameNext={TEXT.aboutMe}
        dataTestIdNext={DATA_TEST_IDS.page.home.next}
      />
    </PageContainer>
  )
}

export default Page
