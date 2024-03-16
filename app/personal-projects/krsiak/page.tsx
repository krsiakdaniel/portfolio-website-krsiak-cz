import ProjectPageLayout from '@/components/projects/projectPage/ProjectPageLayout'
import { sections } from '@/data/projects/personal/krsiak'
import { projectsPersonalNext } from '@/data/projects/personal/projectsOverview'
import { ID_SECTION_NEXT, projectPages } from '@/utils/constants'

const ProjectPersonalKrsiak = () => {
  const { title, role, description, mySkills, projectLinks, linkGitHub, imageShowcase } = projectsPersonalNext[0]

  return (
    <>
      <ProjectPageLayout
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
