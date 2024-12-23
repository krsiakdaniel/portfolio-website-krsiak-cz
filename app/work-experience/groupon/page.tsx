import { ProjectPageLayoutWrapper } from '@/components/layout/project-page/ProjectPageLayoutWrapper'
import PageNavigation from '@/components/page-navigation/PageNavigation'
import { sections } from '@/data/projects/work/groupon'
import { projectsWorkQA } from '@/data/projects/work/projects-overview/workQA'
import { TEXT } from '@/localization/english'
import { DATA_TEST_IDS } from '@/utils/constants/ids/dataTestIds'
import { ID } from '@/utils/constants/ids/elementIds'
import { PAGES_URL } from '@/utils/constants/urls/pageUrls'
import { getBreadcrumbsWork } from '@/utils/helpers/breadcrumbs/getBreadcrumbsWork'
import { GoBackLinkEnum } from '@/utils/interfaces/enums'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: `Groupon | ${TEXT.nameDanielKrsiak} - QA Automation Team Leader`,
  description:
    'QA Automation SDET - Team Lead at Groupon. Responsible for new QA team, hiring, coordinating testing for online marketplace with 17 million customers.',
  keywords: [
    `${TEXT.nameDanielKrsiak}`,
    'Groupon',
    'SDET',
    'E-Commerce - Marketplace',
    'QA Automation - Team Leader',
    'JavaScript',
    'TypeScript',
    'React',
    'Next.js',
    'Playwright',
    'Figma',
    'Storybook',
    'Jira',
    'Confluence',
    'Tempo',
    'QA',
    'Team Management',
  ],
}

const ProjectWorkGroupon = () => {
  return (
    <ProjectPageLayoutWrapper
      breadCrumbs={getBreadcrumbsWork(PAGES_URL.work.groupon, TEXT.groupon)}
      pageID={PAGES_URL.work.groupon}
      goBackLink={GoBackLinkEnum.Work}
      sectionID={ID.section.qa}
      projectData={projectsWorkQA[0]}
      sections={sections}
      PageNavigation={
        <PageNavigation
          linkPrevious={PAGES_URL.work.smartsupp.help}
          namePrevious={TEXT.smartsuppHELP}
          dataTestIdPrevious={DATA_TEST_IDS.projects.work.groupon.previous}
          linkNext={PAGES_URL.work.moravia}
          nameNext={TEXT.moravia}
          dataTestIdNext={DATA_TEST_IDS.projects.work.groupon.next}
        />
      }
    />
  )
}

export default ProjectWorkGroupon
