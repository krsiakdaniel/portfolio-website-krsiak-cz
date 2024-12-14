import NextPageNavigation from '@/components/NextPageNavigation'
import ProjectPageLayout from '@/components/layout/projectPage/ProjectPageLayout'
import { sections } from '@/data/projects/personal/cryptoMania'
import { projectsPersonalReact } from '@/data/projects/personal/projectsOverview/personalReact'
import { TEXT } from '@/localization/texts_en'
import { ID, PAGES_URL, URL_PERSONAL_PROJECTS } from '@/utils/constants'
import { DATA_TEST_IDS } from '@/utils/dataTestIds'
import { BreadCrumbsType } from '@/utils/types'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: `Cryptomania | ${TEXT.nameDanielKrsiak} - ${TEXT.reactDeveloper}`,
  description:
    'Crypto currency prices app with latest data from CoinGecko API. Built with React and Chakra UI. Explore and search for cryptocurrencies with ease.',
  keywords: [
    'Cryptomania',
    `${TEXT.nameDanielKrsiak}`,
    `${TEXT.reactDeveloper}`,
    'React',
    'Chakra UI',
    'JavaScript',
    'TypeScript',
    'CoinGecko API',
    'Netlify',
  ],
}

const breadCrumbs: BreadCrumbsType = {
  linkLevel1: URL_PERSONAL_PROJECTS,
  textLevel1: 'Personal Projects',
  linkLevel2: PAGES_URL.personal.cryptoMania,
  textLevel2: 'Cryptomania',
}

const ProjectPersonalCryptomania = () => {
  const { title, role, description, skillsOverview, projectLinks, linkGitHub, imageShowcase } = projectsPersonalReact[0]

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
        skillsOverview={skillsOverview}
        projectLinks={projectLinks}
        linkGitHub={linkGitHub}
        sections={sections}
        imageShowcase={imageShowcase}
        nextPageNavigation={
          <NextPageNavigation
            pageLinkPrevious="/personal-projects/krsiak"
            pageNamePrevious="Portfolio Website"
            dataTestIdPrevious={DATA_TEST_IDS.projects.personal.cryptoMania.previous}
            pageNameNext="E-Commerce Website"
          />
        }
      />
    </>
  )
}

export default ProjectPersonalCryptomania
