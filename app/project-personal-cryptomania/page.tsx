import ProjectPageLayout from '@/components/projects/projectPage/ProjectPageLayout'
import { sections } from '@/data/projects/personal/cryptoMania'
import { projectsPersonal } from '@/data/projects/personal/projectsOverview'
import { projectPages } from '@/utils/constants'

const ProjectPersonalCryptomania = () => {
  const { title, role, description, mySkills, projectLinks, linkGitHub, imageShowcase } = projectsPersonal[1]

  return (
    <>
      <ProjectPageLayout
        id={projectPages.personal.cryptoMania}
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

export default ProjectPersonalCryptomania
