import ProjectPageLayout from '@/components/projects/projectPage/ProjectPageLayout'
import { projectsPersonal } from '@/data/projects/personal/projectsOverview'
import { sections } from '@/data/projects/work/smartsuppWeb'
import { projectPages } from '@/utils/constants'

const ProjectPersonalKrsiak = () => {
  const { title, role, description, mySkills, projectLinks, linkGitHub, imageShowcase } = projectsPersonal[0]

  return (
    <>
      <ProjectPageLayout
        id={projectPages.personal.krsiak}
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

export default ProjectPersonalKrsiak
