import PageContainer from '@/components/layout/PageContainer'
import ProjectItem from '@/components/projects/ProjectItem'
import ProjectsLayout from '@/components/projects/ProjectsLayout'
import { projectsWork } from '@/data/projects/work/projectsOverview'
import { ID_PROJECTS_WORK } from '@/utils/constants'

const ProjectsWork = () => {
  return (
    <PageContainer id={ID_PROJECTS_WORK}>
      <ProjectsLayout
        dividerText="Work Experience"
        heading="Work"
        description="In my previous jobs, I developed new features, redesigned websites, implemented responsive design, updated legacy codebases, was responsible for text localization, QA testing, automation and team leading on various projects."
      >
        {projectsWork.map((item) => {
          return (
            <ProjectItem
              key={item.id}
              isFeatured={item.isFeatured}
              image={item.image}
              title={item.title}
              role={item.role}
              years={item.years}
              description={item.description}
              mySkillsIcons={item.mySkillsIcons}
              customers={item.customers}
              linkText={item.linkText}
              linkProjectPage={item.linkProjectPage}
            />
          )
        })}
      </ProjectsLayout>
    </PageContainer>
  )
}

export default ProjectsWork
