import ProjectPageLayout from '@/components/layout/projectPage/ProjectPageLayout'
import { sections } from '@/data/projects/personal/krsiak'
import { projectsPersonalNext } from '@/data/projects/personal/projectsOverview'
import { ID_SECTION_NEXT, projectPages } from '@/utils/constants'
import { BreadCrumbsType } from '@/utils/types'

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
        pageID={projectPages.personal.krsiak}
        title={title}
        role={role}
        goBackLink="personal"
        sectionID={ID_SECTION_NEXT}
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
