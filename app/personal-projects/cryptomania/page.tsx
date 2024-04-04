import NextPageNavigation from '@/components/NextPageNavigation'
import ProjectPageLayout from '@/components/layout/projectPage/ProjectPageLayout'
import { sections } from '@/data/projects/personal/cryptoMania'
import { projectsPersonalReact } from '@/data/projects/personal/projectsOverview'
import { ID, PAGES_URL } from '@/utils/constants'
import { BreadCrumbsType } from '@/utils/types'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cryptomania | Daniel Krsiak - React Developer',
  description:
    'Crypto currency prices app with latest data from CoinGecko API. Built with React and Chakra UI. Explore and search for cryptocurrencies with ease.',
  keywords: [
    'Cryptomania',
    'Daniel Krsiak - React Developer',
    'React',
    'Chakra UI',
    'JavaScript',
    'TypeScript',
    'CoinGecko API',
    'Netlify',
  ],
}

const breadCrumbs: BreadCrumbsType = {
  linkLevel1: '/personal-projects',
  textLevel1: 'Personal Projects',
  linkLevel2: '/personal-projects/cryptomania',
  textLevel2: 'Cryptomania',
}

const ProjectPersonalCryptomania = () => {
  const { title, role, description, mySkills, projectLinks, linkGitHub, imageShowcase } = projectsPersonalReact[0]

  return (
    <>
      <ProjectPageLayout
        breadCrumbs={breadCrumbs}
        pageID={PAGES_URL.personal.cryptoMania}
        title={title}
        role={role}
        goBackLink="personal"
        sectionID={ID.section.react}
        description={description}
        mySkills={mySkills}
        projectLinks={projectLinks}
        linkGitHub={linkGitHub}
        sections={sections}
        imageShowcase={imageShowcase}
        nextPageNavigation={
          <NextPageNavigation
            pageLinkPrevious="/personal-projects/krsiak"
            pageNamePrevious="Portfolio Website"
            dataTestIDPrevious="page-navigation-previous-krsiak"
            pageLinkNext="/personal-projects/eshop"
            pageNameNext="E-Commerce Website"
            dataTestIDNext="page-navigation-next-eshop"
          />
        }
      />
    </>
  )
}

export default ProjectPersonalCryptomania
