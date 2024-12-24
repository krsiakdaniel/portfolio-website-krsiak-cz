import { ProjectPageLayoutWrapper } from '@/components/layout/project-page/ProjectPageLayoutWrapper'
import PageNavigation from '@/components/page-navigation/PageNavigation'
import { projectsWorkWordPress } from '@/data/projects/work/projects-overview/workWordpress'
import { sections } from '@/data/projects/work/smartsuppHelp'
import { TEXT } from '@/localization/english'
import { DATA_TEST_IDS } from '@/utils/constants/ids/dataTestIds'
import { ID } from '@/utils/constants/ids/elementIds'
import { PAGES_URL } from '@/utils/constants/urls/pageUrls'
import { getBreadcrumbsWork } from '@/utils/helpers/breadcrumbs/getBreadcrumbsWork'
import { GoBackLinkEnum } from '@/utils/interfaces/enums'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: `Smartsupp Help | ${TEXT.nameDanielKrsiak} - Content Writer`,
  description:
    'Admin & Content Writer at Smartsupp for 6 months. Managed HELP website on WordPress, wrote tutorials, and handled localization into 9 languages.',
  keywords: [
    `${TEXT.nameDanielKrsiak}`,
    'Smartsupp Help',
    'SaaS Company - HELP Website',
    'Admin & Content Writer',
    'WordPress',
    'Tutorials',
    'Localization',
  ],
}

const ProjectWorkSmartsuppHelp = () => {
  return (
    <ProjectPageLayoutWrapper
      breadCrumbs={getBreadcrumbsWork(PAGES_URL.work.smartsupp.help, TEXT.smartsuppHELP)}
      pageID={PAGES_URL.work.smartsupp.help}
      goBackLink={GoBackLinkEnum.Work}
      sectionID={ID.section.wordpress}
      projectData={projectsWorkWordPress[0]}
      sections={sections}
      PageNavigation={
        <PageNavigation
          linkPrevious={PAGES_URL.work.smartsupp.web}
          namePrevious={TEXT.smartsuppWeb}
          dataTestIdPrevious={DATA_TEST_IDS.projects.work.smartsupp.help.previous}
          linkNext={PAGES_URL.work.groupon}
          nameNext={TEXT.groupon}
          dataTestIdNext={DATA_TEST_IDS.projects.work.smartsupp.help.next}
        />
      }
    />
  )
}

export default ProjectWorkSmartsuppHelp
