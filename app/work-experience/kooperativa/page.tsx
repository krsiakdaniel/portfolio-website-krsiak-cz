import { ProjectPageLayoutWrapper } from '@/components/layout/projectPage/ProjectPageLayoutWrapper'
import PageNavigation from '@/components/pageNavigation/PageNavigation'
import { sections } from '@/data/projects/work/kooperativa'
import { projectsWorkReact } from '@/data/projects/work/projectsOverview/workReact'
import { TEXT } from '@/localization/texts_en'
import { ID, PAGES_URL, URL_WORK_EXPERIENCE } from '@/utils/constants'
import { DATA_TEST_IDS } from '@/utils/dataTestIds'
import { BreadCrumbsType } from '@/utils/types'
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
  textLevel1: 'Work Experience',
  linkLevel2: PAGES_URL.work.kooperativa,
  textLevel2: 'Kooperativa',
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
          linkPrevious="/work-experience/komercni-banka"
          namePrevious="Komerční banka"
          dataTestIdPrevious={DATA_TEST_IDS.projects.work.kooperativa.previous}
          linkNext="/work-experience/smartsupp-web"
          nameNext="Smartsupp Web"
          dataTestIdNext={DATA_TEST_IDS.projects.work.kooperativa.next}
        />
      }
    />
  )
}

export default ProjectWorkKooperativa
