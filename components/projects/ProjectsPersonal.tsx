import PageContainer from '@/components/layout/PageContainer'
import ProjectItem from '@/components/projects/ProjectItem'
import ProjectsLayout from '@/components/projects/ProjectsLayout'
import { projectsPersonal } from '@/data/projects/personal/projectsOverview'
import { ID_PROJECTS_PERSONAL } from '@/utils/constants'

const ProjectsPersonal = () => {
  return (
    <PageContainer id={ID_PROJECTS_PERSONAL}>
      <ProjectsLayout
        dividerText="In My Free Time"
        heading="Personal Projects"
        description="I like to learn new technologies and create personal projects where I can apply what I know and keep up on the latest trends."
      >
        {projectsPersonal.map((item) => {
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

export default ProjectsPersonal
