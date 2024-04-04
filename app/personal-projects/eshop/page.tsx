import ProjectPageLayout from '@/components/layout/projectPage/ProjectPageLayout'
import { sections } from '@/data/projects/personal/eshop'
import { projectsPersonalVue } from '@/data/projects/personal/projectsOverview'
import { ID, PAGES_URL } from '@/utils/constants'
import { BreadCrumbsType } from '@/utils/types'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'E-Commerce Website | Daniel Krsiak - React Developer',
  description:
    'First time coding with Vue.js and Nuxt.js. Created a simple e-commerce website with Vuetify for styling. Explore products and shopping cart functionality.',
  keywords: ['E-Commerce Website', 'Daniel Krsiak - React Developer', 'Vue.js', 'Nuxt.js', 'Vuetify', 'JavaScript'],
}

const breadCrumbs: BreadCrumbsType = {
  linkLevel1: '/personal-projects',
  textLevel1: 'Personal Projects',
  linkLevel2: '/personal-projects/eshop',
  textLevel2: 'E-Commerce Website',
}

const ProjectPersonalEshop = () => {
  const { title, role, description, mySkills, projectLinks, linkGitHub, imageShowcase } = projectsPersonalVue[0]

  return (
    <>
      <ProjectPageLayout
        breadCrumbs={breadCrumbs}
        pageID={PAGES_URL.personal.eshop}
        title={title}
        role={role}
        goBackLink="personal"
        sectionID={ID.section.vue}
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

export default ProjectPersonalEshop
