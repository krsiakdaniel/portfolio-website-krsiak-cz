import NextPageNavigation from '@/components/NextPageNavigation'
import ProjectPageLayout from '@/components/layout/projectPage/ProjectPageLayout'
import { sections } from '@/data/projects/personal/krsiak'
import { projectsPersonalNext } from '@/data/projects/personal/projectsOverview/personalNext'
import { TEXT } from '@/localization/texts_en'
import { ID, PAGES_URL, URL_PERSONAL_PROJECTS } from '@/utils/constants'
import { DATA_TEST_IDS } from '@/utils/dataTestIds'
import { BreadCrumbsType } from '@/utils/types'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: `Portfolio Website | ${TEXT.nameDanielKrsiak} - ${TEXT.reactDeveloper}`,
  description:
    'Portfolio website showcasing my skills. Using Next.js, Tailwind CSS, JavaScript, TypeScript, React, JEST, Playwright, GitHub Actions, and Netlify.',
  keywords: [
    'Portfolio Website',
    `${TEXT.nameDanielKrsiak}`,
    `${TEXT.reactDeveloper}`,
    'Next.js',
    'Tailwind CSS',
    'JavaScript',
    'TypeScript',
    'React',
    'JEST',
    'Playwright',
    'GitHub Actions',
    'Netlify',
  ],
}

const breadCrumbs: BreadCrumbsType = {
  linkLevel1: URL_PERSONAL_PROJECTS,
  textLevel1: 'Personal Projects',
  linkLevel2: PAGES_URL.personal.krsiak,
  textLevel2: 'Portfolio Website',
}

const ProjectPersonalKrsiak = () => {
  const { title, role, description, skillsOverview, projectLinks, linkGitHub, imageShowcase } = projectsPersonalNext[0]

  return (
    <>
      <ProjectPageLayout
        breadCrumbs={breadCrumbs}
        pageID={PAGES_URL.personal.krsiak}
        title={title}
        role={role}
        goBackLink="personal"
        sectionID={ID.section.next}
        description={description}
        skillsOverview={skillsOverview}
        projectLinks={projectLinks}
        linkGitHub={linkGitHub}
        sections={sections}
        imageShowcase={imageShowcase}
        nextPageNavigation={
          <NextPageNavigation
            pageLinkPrevious="/personal-projects"
            pageNamePrevious="Personal Projects"
            dataTestIdPrevious={DATA_TEST_IDS.projects.personal.krsiak.previous}
            pageLinkNext="/personal-projects/cryptomania"
            pageNameNext="CryptoMania"
            dataTestIdNext={DATA_TEST_IDS.projects.personal.krsiak.next}
          />
        }
      />
    </>
  )
}

export default ProjectPersonalKrsiak
