import ProjectPageLayout from '@/components/projects/projectPage/ProjectPageLayout'
import { sections } from '@/data/projects/personal/eshop'
import { projectsPersonalVue } from '@/data/projects/personal/projectsOverview'
import { ID_SECTION_VUE, projectPages } from '@/utils/constants'

const ProjectPersonalEshop = () => {
  const { title, role, description, mySkills, projectLinks, linkGitHub, imageShowcase } = projectsPersonalVue[0]

  return (
    <>
      <ProjectPageLayout
        pageID={projectPages.personal.eshop}
        title={title}
        role={role}
        goBackLink="personal"
        sectionID={ID_SECTION_VUE}
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
