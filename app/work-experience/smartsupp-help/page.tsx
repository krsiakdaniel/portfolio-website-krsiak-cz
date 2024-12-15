import { ProjectPageLayoutWrapper } from '@/components/layout/projectPage/ProjectPageLayoutWrapper'
import PageNavigation from '@/components/pageNavigation/PageNavigation'
import { projectsWorkWordPress } from '@/data/projects/work/projectsOverview/workWordpress'
import { sections } from '@/data/projects/work/smartsuppHelp'
import { TEXT } from '@/localization/texts_en'
import { ID, PAGES_URL, URL_WORK_EXPERIENCE } from '@/utils/constants'
import { DATA_TEST_IDS } from '@/utils/dataTestIds'
import { BreadCrumbsType } from '@/utils/types'
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

const breadCrumbs: BreadCrumbsType = {
  linkLevel1: URL_WORK_EXPERIENCE,
  textLevel1: TEXT.workExperience,
  linkLevel2: PAGES_URL.work.smartsupp.help,
  textLevel2: TEXT.smartsuppHELP,
}

const ProjectWorkSmartsuppHelp = () => {
  return (
    <ProjectPageLayoutWrapper
      breadCrumbs={breadCrumbs}
      pageID={PAGES_URL.work.smartsupp.help}
      goBackLink="work"
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
