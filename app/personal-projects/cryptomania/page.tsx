import ProjectPageLayout from '@/components/layout/project-page/ProjectPageLayout'
import PageNavigation from '@/components/page-navigation/PageNavigation'
import { sections } from '@/data/projects/personal/cryptoMania'
import { projectsPersonalReact } from '@/data/projects/personal/projects-overview/personalReact'
import { TEXT } from '@/localization/english'
import { DATA_TEST_IDS } from '@/utils/constants/ids/dataTestIds'
import { ID } from '@/utils/constants/ids/elementIds'
import { PAGES_URL } from '@/utils/constants/urls/pageUrls'
import { getBreadcrumbsPersonal } from '@/utils/helpers/breadcrumbs/getBreadcrumbsPersonal'
import { GoBackLinkEnum } from '@/utils/interfaces/enums'
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

const ProjectPersonalCryptomania = () => {
  const { title, role, description, skillsOverview, projectLinks, linkGitHub, imageShowcase } = projectsPersonalReact[0]

  return (
    <>
      <ProjectPageLayout
        breadCrumbs={getBreadcrumbsPersonal(PAGES_URL.personal.cryptoMania, TEXT.cryptoMania)}
        pageID={PAGES_URL.personal.cryptoMania}
        title={title}
        role={role}
        goBackLink={GoBackLinkEnum.Personal}
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
