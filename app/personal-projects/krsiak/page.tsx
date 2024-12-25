import { Metadata } from 'next'

import ProjectPageLayout from '@/components/layout/project-page/ProjectPageLayout'
import PageNavigation from '@/components/page-navigation/PageNavigation'

import { sections } from '@/data/projects/personal/krsiak'
import { projectsPersonalNext } from '@/data/projects/personal/projects-overview/personalNext'

import { TEXT } from '@/localization/english'
import { DATA_TEST_IDS } from '@/utils/constants/ids/dataTestIds'
import { ID } from '@/utils/constants/ids/elementIds'
import { PAGES_URL } from '@/utils/constants/urls/pageUrls'

import { getBreadcrumbsPersonal } from '@/utils/helpers/breadcrumbs/getBreadcrumbsPersonal'
import { GoBackLinkEnum } from '@/utils/interfaces/enums'

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

const ProjectPersonalKrsiak = () => {
  const { title, role, description, skillsOverview, projectLinks, linkGitHub, imageShowcase } = projectsPersonalNext[0]

  return (
    <>
      <ProjectPageLayout
        breadCrumbs={getBreadcrumbsPersonal(PAGES_URL.personal.krsiak, TEXT.portfolioWebsite)}
        pageID={PAGES_URL.personal.krsiak}
        title={title}
        role={role}
        goBackLink={GoBackLinkEnum.Personal}
        sectionID={ID.section.next}
        description={description}
        skillsOverview={skillsOverview}
        projectLinks={projectLinks}
        linkGitHub={linkGitHub}
        sections={sections}
        imageShowcase={imageShowcase}
        PageNavigation={
          <PageNavigation
            linkPrevious={PAGES_URL.personal.mainUrl}
            namePrevious={TEXT.personalProjects}
            dataTestIdPrevious={DATA_TEST_IDS.projects.personal.krsiak.previous}
            linkNext={PAGES_URL.personal.cryptoMania}
            nameNext={TEXT.cryptoMania}
            dataTestIdNext={DATA_TEST_IDS.projects.personal.krsiak.next}
          />
        }
      />
    </>
  )
}

export default ProjectPersonalKrsiak
