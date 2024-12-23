import { ProjectPageLayoutWrapper } from '@/components/layout/project-page/ProjectPageLayoutWrapper'
import PageNavigation from '@/components/page-navigation/PageNavigation'
import { sections } from '@/data/projects/work/kooperativa'
import { projectsWorkReact } from '@/data/projects/work/projects-overview/workReact'
import { TEXT } from '@/localization/english'
import { DATA_TEST_IDS } from '@/utils/constants/ids/dataTestIds'
import { ID } from '@/utils/constants/ids/elementIds'
import { PAGES_URL, URL_WORK_EXPERIENCE } from '@/utils/constants/urls/pageUrls'
import { BreadCrumbsType } from '@/utils/interfaces/types'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: `Kooperativa | ${TEXT.nameDanielKrsiak} - ${TEXT.reactDeveloper}`,
  description: 'I worked on an application for managing insurance policies for citizens property and products.',
  keywords: [
    `${TEXT.nameDanielKrsiak}`,
    `${TEXT.reactDeveloper}`,
    'Kooperativa',
    'Insurance company app',
    'React Developer',
    'JavaScript',
    'TypeScript',
    'React',
    'Redux',
    'Tailwind CSS',
    'Figma',
    'Storybook',
  ],
}

const breadCrumbs: BreadCrumbsType = {
  linkLevel1: URL_WORK_EXPERIENCE,
  textLevel1: TEXT.workExperience,
  linkLevel2: PAGES_URL.work.kooperativa,
  textLevel2: TEXT.kooperativa,
}

const ProjectWorkKooperativa = () => {
  return (
    <ProjectPageLayoutWrapper
      breadCrumbs={breadCrumbs}
      pageID={PAGES_URL.work.kooperativa}
      goBackLink="work"
      sectionID={ID.section.react}
      projectData={projectsWorkReact[2]}
      sections={sections}
      PageNavigation={
        <PageNavigation
          linkPrevious={PAGES_URL.work.komercniBanka}
          namePrevious={TEXT.komercniBanka}
          dataTestIdPrevious={DATA_TEST_IDS.projects.work.kooperativa.previous}
          linkNext={PAGES_URL.work.smartsupp.web}
          nameNext={TEXT.smartsuppWeb}
          dataTestIdNext={DATA_TEST_IDS.projects.work.kooperativa.next}
        />
      }
    />
  )
}

export default ProjectWorkKooperativa
