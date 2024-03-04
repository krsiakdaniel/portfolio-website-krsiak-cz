import ProjectPageLayout from '@/components/projects/projectPage/ProjectPageLayout'
import { projectsWorkFrontEnd } from '@/data/projects/work/projectsOverview'
import { sections } from '@/data/projects/work/smartsuppWeb'
import { ID_SECTION_FRONT_END, projectPages } from '@/utils/constants'

const ProjectWorkSmartsuppWeb = () => {
  const { title, role, years, description, mySkills, customers, projectLinks, imageShowcase } = projectsWorkFrontEnd[0]

  return (
    <>
      <ProjectPageLayout
        id={projectPages.work.smartsupp.web}
        title={title}
        role={role}
        years={years}
        goBackLink="work"
        sectionID={ID_SECTION_FRONT_END}
        description={description}
        mySkills={mySkills}
        customers={customers}
        projectLinks={projectLinks}
        sections={sections}
        imageShowcase={imageShowcase}
      />
    </>
  )
}

export default ProjectWorkSmartsuppWeb
