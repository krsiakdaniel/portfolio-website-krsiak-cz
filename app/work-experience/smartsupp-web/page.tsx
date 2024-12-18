import { ProjectPageLayoutWrapper } from '@/components/layout/projectPage/ProjectPageLayoutWrapper'
import PageNavigation from '@/components/pageNavigation/PageNavigation'
import { projectsWorkFrontEnd } from '@/data/projects/work/projectsOverview/workFrontEnd'
import { sections } from '@/data/projects/work/smartsuppWeb'
import { TEXT } from '@/localization/texts_en'
import { ID } from '@/utils/constants/ids/elementIds'
import { PAGES_URL, URL_WORK_EXPERIENCE } from '@/utils/constants/pageUrls'
import { DATA_TEST_IDS } from '@/utils/dataTestIds'
import { BreadCrumbsType } from '@/utils/types'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: `Smartsupp Web | ${TEXT.nameDanielKrsiak} - Front End Developer`,
  description:
    'Worked as a Front End Developer at Smartsupp for 1 year. Created company website Front End, collaborated with UX designer on brand theme and layout.',
  keywords: [
    `${TEXT.nameDanielKrsiak}`,
    'Smartsupp Web',
    'SaaS Company - Website',
    'Front End Developer',
    'Company Website Front End',
    'Documentation Site',
    'Jekyll',
    'Markdown',
    'Shopify Liquid',
    'VuePress',
  ],
}

const breadCrumbs: BreadCrumbsType = {
  linkLevel1: URL_WORK_EXPERIENCE,
  textLevel1: TEXT.workExperience,
  linkLevel2: PAGES_URL.work.smartsupp.web,
  textLevel2: TEXT.smartsuppWeb,
}

const ProjectWorkSmartsuppWeb = () => {
  return (
    <ProjectPageLayoutWrapper
      breadCrumbs={breadCrumbs}
      pageID={PAGES_URL.work.smartsupp.web}
      goBackLink="work"
      sectionID={ID.section.frontEnd}
      projectData={projectsWorkFrontEnd[0]}
      sections={sections}
      PageNavigation={
        <PageNavigation
          linkPrevious={PAGES_URL.work.kooperativa}
          namePrevious={TEXT.kooperativa}
          dataTestIdPrevious={DATA_TEST_IDS.projects.work.smartsupp.web.previous}
          linkNext={PAGES_URL.work.smartsupp.help}
          nameNext={TEXT.smartsuppHELP}
          dataTestIdNext={DATA_TEST_IDS.projects.work.smartsupp.web.next}
        />
      }
    />
  )
}

export default ProjectWorkSmartsuppWeb
