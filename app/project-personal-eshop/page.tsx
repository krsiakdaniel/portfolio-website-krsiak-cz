import ProjectPageLayout from '@/components/projects/projectPage/ProjectPageLayout'
import { sections } from '@/data/projects/personal/eshop'
import { projectsPersonal } from '@/data/projects/personal/projectsOverview'
import { projectPages } from '@/utils/constants'

const ProjectPersonalEshop = () => {
  const { title, role, description, mySkills, projectLinks, linkGitHub, imageShowcase } = projectsPersonal[2]

  return (
    <>
      <ProjectPageLayout
        id={projectPages.personal.eshop}
        title={title}
        role={role}
        goBackLink="personal"
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
