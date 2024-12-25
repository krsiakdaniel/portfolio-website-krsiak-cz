import { Metadata } from 'next'

import { ProjectPageLayoutWrapper } from '@/components/layout/project-page/ProjectPageLayoutWrapper'
import PageNavigation from '@/components/page-navigation/PageNavigation'

import { projectsWorkFrontEnd } from '@/data/projects/work/projects-overview/workFrontEnd'
import { sections } from '@/data/projects/work/smartsuppWeb'

import { TEXT } from '@/localization/english'
import { DATA_TEST_IDS } from '@/utils/constants/ids/dataTestIds'
import { ID } from '@/utils/constants/ids/elementIds'
import { PAGES_URL } from '@/utils/constants/urls/pageUrls'

import { getBreadcrumbsWork } from '@/utils/helpers/breadcrumbs/getBreadcrumbsWork'
import { GoBackLinkEnum } from '@/utils/interfaces/enums'

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

const ProjectWorkSmartsuppWeb = () => {
  return (
    <ProjectPageLayoutWrapper
      breadCrumbs={getBreadcrumbsWork(PAGES_URL.work.smartsupp.web, TEXT.smartsuppWeb)}
      pageID={PAGES_URL.work.smartsupp.web}
      goBackLink={GoBackLinkEnum.Work}
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
