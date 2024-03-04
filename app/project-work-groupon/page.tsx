import ProjectPageLayout from '@/components/projects/projectPage/ProjectPageLayout'
import { sections } from '@/data/projects/work/groupon'
import { projectsWorkQA } from '@/data/projects/work/projectsOverview'
import { ID_SECTION_QA, projectPages } from '@/utils/constants'

const ProjectWorkGroupon = () => {
  const { title, role, years, description, mySkills, customers, projectLinks, imageShowcase } = projectsWorkQA[0]

  return (
    <>
      <ProjectPageLayout
        id={projectPages.work.groupon}
        title={title}
        role={role}
        years={years}
        goBackLink="work"
        sectionID={ID_SECTION_QA}
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

export default ProjectWorkGroupon
