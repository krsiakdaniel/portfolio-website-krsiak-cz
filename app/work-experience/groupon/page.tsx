import PageNavigation from '@/components/PageNavigation'
import { ProjectPageLayoutWrapper } from '@/components/layout/projectPage/ProjectPageLayoutWrapper'
import { sections } from '@/data/projects/work/groupon'
import { projectsWorkQA } from '@/data/projects/work/projectsOverview/workQA'
import { TEXT } from '@/localization/texts_en'
import { ID, PAGES_URL, URL_WORK_EXPERIENCE } from '@/utils/constants'
import { DATA_TEST_IDS } from '@/utils/dataTestIds'
import { BreadCrumbsType } from '@/utils/types'
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

const breadCrumbs: BreadCrumbsType = {
  linkLevel1: URL_WORK_EXPERIENCE,
  textLevel1: 'Work Experience',
  linkLevel2: PAGES_URL.work.groupon,
  textLevel2: 'Groupon',
}

const ProjectWorkGroupon = () => {
  return (
    <ProjectPageLayoutWrapper
      breadCrumbs={breadCrumbs}
      pageID={PAGES_URL.work.groupon}
      goBackLink="work"
      sectionID={ID.section.qa}
      projectData={projectsWorkQA[0]}
      sections={sections}
      PageNavigation={
        <PageNavigation
          pageLinkPrevious="/work-experience/smartsupp-help"
          pageNamePrevious="Smartsupp HELP"
          dataTestIdPrevious={DATA_TEST_IDS.projects.work.groupon.previous}
          pageLinkNext="/work-experience/moravia"
          pageNameNext="Moravia IT"
          dataTestIdNext={DATA_TEST_IDS.projects.work.groupon.next}
        />
      }
    />
  )
}

export default ProjectWorkGroupon
