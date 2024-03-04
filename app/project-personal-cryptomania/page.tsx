import ProjectPageLayout from '@/components/projects/projectPage/ProjectPageLayout'
import { sections } from '@/data/projects/personal/cryptoMania'
import { projectsPersonalReact } from '@/data/projects/personal/projectsOverview'
import { ID_SECTION_REACT, projectPages } from '@/utils/constants'

const ProjectPersonalCryptomania = () => {
  const { title, role, description, mySkills, projectLinks, linkGitHub, imageShowcase } = projectsPersonalReact[0]

  return (
    <>
      <ProjectPageLayout
        id={projectPages.personal.cryptoMania}
        title={title}
        role={role}
        goBackLink="personal"
        sectionID={ID_SECTION_REACT}
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
