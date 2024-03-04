import ProjectPageLayout from '@/components/projects/projectPage/ProjectPageLayout'
import { projectsWorkReact } from '@/data/projects/work/projectsOverview'
import { sections } from '@/data/projects/work/smartsuppDashboard'
import { ID_SECTION_REACT, projectPages } from '@/utils/constants'

const ProjectWorkSmartsuppDashboard = () => {
  const { title, role, years, description, mySkills, customers, projectLinks, imageShowcase } = projectsWorkReact[0]

  return (
    <>
      <ProjectPageLayout
        id={projectPages.work.smartsupp.dashboard}
        title={title}
        role={role}
        years={years}
        goBackLink="work"
        sectionID={ID_SECTION_REACT}
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
