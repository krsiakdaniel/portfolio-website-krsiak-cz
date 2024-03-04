import ProjectPageLayout from '@/components/projects/projectPage/ProjectPageLayout'
import { sections } from '@/data/projects/work/komercniBanka'
import { projectsWorkReact } from '@/data/projects/work/projectsOverview'
import { ID_SECTION_REACT, projectPages } from '@/utils/constants'

const ProjectWorkKomercniBanka = () => {
  const { title, role, years, description, mySkills, customers, projectLinks, imageShowcase } = projectsWorkReact[1]

  return (
    <>
      <ProjectPageLayout
        id={projectPages.work.komercniBanka}
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

export default ProjectWorkKomercniBanka
