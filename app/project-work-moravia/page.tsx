import ProjectPageLayout from '@/components/projects/projectPage/ProjectPageLayout'
import { sections } from '@/data/projects/work/moravia'
import { projectsWorkLocalization } from '@/data/projects/work/projectsOverview'
import { ID_SECTION_LOCALIZATION, projectPages } from '@/utils/constants'

const ProjectWorkMoravia = () => {
  const { title, role, years, description, mySkills, customers, projectLinks, imageShowcase } =
    projectsWorkLocalization[0]

  return (
    <>
      <ProjectPageLayout
        id={projectPages.work.smartsupp.web}
        title={title}
        role={role}
        years={years}
        goBackLink="work"
        sectionID={ID_SECTION_LOCALIZATION}
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

export default ProjectWorkMoravia
