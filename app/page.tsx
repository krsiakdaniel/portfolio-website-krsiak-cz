import NextPageNavigation from '@/components/NextPageNavigation'
import ContactVcard from '@/components/homepage/ContactVcard'
import Hero from '@/components/homepage/Hero'
import Skills from '@/components/homepage/Skills'
import SkillsMain from '@/components/homepage/SkillsMain'
import WhatIDoMindset from '@/components/homepage/WhatIDoMindset'
import PageContainer from '@/components/layout/PageContainer'
import { ID } from '@/utils/constants'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Daniel Kršiak - React Developer',
  description:
    'Experienced React Developer from Brno Czech Republic. JavaScript, TypeScript, React, HTML, CSS, Sass, Tailwind CSS, Redux, GraphQL, Jest, Playwright, and Figma.',
  keywords: [
    'Daniel Kršiak',
    'React Developer',
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
      <ContactVcard />
      {/* TODO: refactor for all pages into constants, urls, text, test IDs */}
      <NextPageNavigation
        pageLinkNext="/about-me"
        pageNameNext="About Me"
        dataTestIDNext="page-navigation-next-about-me"
      />
    </PageContainer>
  )
}

export default Page
