import ProjectItem from '@/components/projects/ProjectItem'
import ProjectsLayout from '@/components/projects/ProjectsLayout'
import { projectsPersonal } from '@/data/projects/personal/projectsOverview'
import { ID_PROJECTS_PERSONAL } from '@/utils/constants'

const ProjectsPersonal = () => {
  return (
    <div id={ID_PROJECTS_PERSONAL} className="mt-20 px-5">
      <div className="container mx-auto px-5 max-w-screen-xl">
        <ProjectsLayout
          dividerText="In My Free Time"
          heading="Personal Projects"
          description="I like to learn new technologies and create personal projects."
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
                customers={item.customers}
                linkText={item.linkText}
                linkProjectPage={item.linkProjectPage}
              />
            )
          })}
        </ProjectsLayout>
      </div>
    </div>
  )
}

export default ProjectsPersonal
