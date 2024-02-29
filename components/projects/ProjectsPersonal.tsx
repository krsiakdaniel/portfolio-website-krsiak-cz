import ProjectItem from '@/components/projects/ProjectItem'
import ProjectsLayout from '@/components/projects/ProjectsLayout'
import { projectsPersonal } from '@/data/projects/personal/projectsOverview'
import { ID_PROJECTS_PERSONAL } from '@/utils/constants'

const ProjectsPersonal = () => {
  return (
    <div id={ID_PROJECTS_PERSONAL}>
      <div className="container mx-auto">
        <div className="mb-20">
          <ProjectsLayout
            dividerText="In My Free Time"
            heading="Personal Projects"
            rolesHeading="In my free time"
            rolesDescription="I like to learn new technologies and create personal projects."
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
                  mySkills={item.mySkills}
                  customers={item.customers}
                  linkText={item.linkText}
                  linkProjectPage={item.linkProjectPage}
                />
              )
            })}
          </ProjectsLayout>
        </div>
      </div>
    </div>
  )
}

export default ProjectsPersonal
