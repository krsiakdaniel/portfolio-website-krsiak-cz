import ProjectPageLayout from '@/components/layout/projectPage/ProjectPageLayout'
import PageNavigation from '@/components/pageNavigation/PageNavigation'
import { sections } from '@/data/projects/personal/cryptoMania'
import { projectsPersonalReact } from '@/data/projects/personal/projectsOverview/personalReact'
import { TEXT } from '@/localization/texts_en'
import { DATA_TEST_IDS } from '@/utils/constants/ids/dataTestIds'
import { ID } from '@/utils/constants/ids/elementIds'
import { PAGES_URL, URL_PERSONAL_PROJECTS } from '@/utils/constants/urls/pageUrls'
import { BreadCrumbsType } from '@/utils/interfaces/types'
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
  textLevel1: TEXT.personalProjects,
  linkLevel2: PAGES_URL.personal.cryptoMania,
  textLevel2: TEXT.cryptoMania,
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
        PageNavigation={
          <PageNavigation
            linkPrevious={PAGES_URL.personal.krsiak}
            namePrevious={TEXT.portfolioWebsite}
            dataTestIdPrevious={DATA_TEST_IDS.projects.personal.cryptoMania.previous}
          />
        }
      />
    </>
  )
}

export default ProjectPersonalCryptomania
