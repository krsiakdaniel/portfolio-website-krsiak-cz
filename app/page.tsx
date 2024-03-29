import NextPageNavigation from '@/components/NextPageNavigation'
import Hero from '@/components/homepage/Hero'
import Skills from '@/components/homepage/Skills'
import SkillsMain from '@/components/homepage/SkillsMain'
import PageContainer from '@/components/layout/PageContainer'
import { ID } from '@/utils/constants'

const Page = () => {
  return (
    <PageContainer id={ID.homepage}>
      <Hero />
      <Skills />
      <SkillsMain />
      <NextPageNavigation
        pageLinkNext="/about-me"
        pageNameNext="About Me"
        dataTestIDNext="page-navigation-next-about-me"
      />
    </PageContainer>
  )
}

export default Page
