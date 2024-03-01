import ProjectPageLayout from '@/components/projects/projectPage/ProjectPageLayout'
import { sections } from '@/data/projects/work/komercniBanka'
import { projectsWork } from '@/data/projects/work/projectsOverview'
import { projectPages } from '@/utils/constants'

const ProjectWorkKomercniBanka = () => {
  const { title, role, years, description, mySkills, customers, projectLinks, imageShowcase } = projectsWork[2]

  return (
    <>
      <ProjectPageLayout
        id={projectPages.work.komercniBanka}
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

export default ProjectWorkKomercniBanka
