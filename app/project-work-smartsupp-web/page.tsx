import ProjectPageLayout from '@/components/projects/projectPage/ProjectPageLayout'
import { projectsWorkFrontEnd } from '@/data/projects/work/projectsOverview'
import { sections } from '@/data/projects/work/smartsuppWeb'
import { projectPages } from '@/utils/constants'

const ProjectWorkSmartsuppWeb = () => {
  const { title, role, years, description, mySkills, customers, projectLinks, imageShowcase } = projectsWorkFrontEnd[0]

  return (
    <>
      <ProjectPageLayout
        id={projectPages.work.smartsuppWeb}
        title={title}
        role={role}
        years={years}
        goBackLink="work"
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
