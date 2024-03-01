import ProjectItem from '@/components/projects/ProjectItem'
import ProjectsLayout from '@/components/projects/ProjectsLayout'
import { projectsWork } from '@/data/projects/work/projectsOverview'
import { ID_PROJECTS_WORK } from '@/utils/constants'

const ProjectsWork = () => {
  return (
    <div id={ID_PROJECTS_WORK} className="mt-20 px-5">
      <div className="container mx-auto px-5 max-w-screen-xl">
        <ProjectsLayout
          dividerText="Work Experience"
          heading="Work"
          rolesHeading="My job roles"
          rolesDescription="In my previous jobs, I developed new features, redesigned websites, implemented responsive design, updated legacy codebases, was responsible for text localization, QA testing, automation and team leading on various projects."
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
  )
}

export default ProjectsWork
