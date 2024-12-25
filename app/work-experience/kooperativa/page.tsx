import { Metadata } from 'next'

import { ProjectPageLayoutWrapper } from '@/components/layout/project-page/ProjectPageLayoutWrapper'
import PageNavigation from '@/components/page-navigation/PageNavigation'

import { sections } from '@/data/projects/work/kooperativa'
import { projectsWorkReact } from '@/data/projects/work/projects-overview/workReact'

import { TEXT } from '@/localization/english'
import { DATA_TEST_IDS } from '@/utils/constants/ids/dataTestIds'
import { ID } from '@/utils/constants/ids/elementIds'
import { PAGES_URL } from '@/utils/constants/urls/pageUrls'

import { getBreadcrumbsWork } from '@/utils/helpers/breadcrumbs/getBreadcrumbsWork'
import { GoBackLinkEnum } from '@/utils/interfaces/enums'

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

const ProjectWorkKooperativa = () => {
  return (
    <ProjectPageLayoutWrapper
      breadCrumbs={getBreadcrumbsWork(PAGES_URL.work.kooperativa, TEXT.kooperativa)}
      pageID={PAGES_URL.work.kooperativa}
      goBackLink={GoBackLinkEnum.Work}
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
