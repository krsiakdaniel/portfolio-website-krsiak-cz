import ProjectPageLayout from '@/components/projects/projectPage/ProjectPageLayout'
import { projectsWorkWordPress } from '@/data/projects/work/projectsOverview'
import { sections } from '@/data/projects/work/smartsuppHelp'
import { projectPages } from '@/utils/constants'

const ProjectWorkSmartsuppHelp = () => {
  const { title, role, years, description, mySkills, customers, projectLinks, imageShowcase } = projectsWorkWordPress[0]

  return (
    <>
      <ProjectPageLayout
        id={projectPages.work.smartsupp.help}
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

export default ProjectWorkSmartsuppHelp
