import ProjectPageLayout from '@/components/projects/projectPage/ProjectPageLayout'
import { projectsWork } from '@/data/projects/work/projectsOverview'
import { sections } from '@/data/projects/work/smartsuppDashboard'
import { projectPages } from '@/utils/constants'

const ProjectWorkSmartsuppDashboard = () => {
  const { title, role, years, description, mySkills, customers, projectLinks, imageShowcase } = projectsWork[0]

  return (
    <>
      <ProjectPageLayout
        id={projectPages.work.smartsuppDashboard}
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

export default ProjectWorkSmartsuppDashboard
