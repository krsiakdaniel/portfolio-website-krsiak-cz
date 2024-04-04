import ProjectPageLayout from '@/components/layout/projectPage/ProjectPageLayout'
import { sections } from '@/data/projects/personal/krsiak'
import { projectsPersonalNext } from '@/data/projects/personal/projectsOverview'
import { ID, PAGES_URL } from '@/utils/constants'
import { BreadCrumbsType } from '@/utils/types'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Portfolio Website | Daniel Krsiak - React Developer',
  description:
    'Portfolio website showcasing my skills. Using Next.js, Tailwind CSS, JavaScript, TypeScript, React, JEST, Playwright, GitHub Actions, and Netlify.',
  keywords: [
    'Portfolio Website',
    'Daniel Krsiak - React Developer',
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
  linkLevel1: '/personal-projects',
  textLevel1: 'Personal Projects',
  linkLevel2: '/personal-projects/krsiak',
  textLevel2: 'Portfolio Website',
}

const ProjectPersonalKrsiak = () => {
  const { title, role, description, mySkills, projectLinks, linkGitHub, imageShowcase } = projectsPersonalNext[0]

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
        mySkills={mySkills}
        projectLinks={projectLinks}
        linkGitHub={linkGitHub}
        sections={sections}
        imageShowcase={imageShowcase}
      />
    </>
  )
}

export default ProjectPersonalKrsiak
