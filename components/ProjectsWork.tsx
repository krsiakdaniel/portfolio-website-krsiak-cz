import React from 'react'

import { projectsWork } from '@/data/projects-work'

import ProjectsLayout from './ProjectsLayout'
import ProjectItem from './ProjectItem'

const ProjectsWork = () => {
  return (
    <div id="projects-work">
      <div className="container mx-auto">
        <div className="pb-20">
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
                  image={item.image}
                  title={item.title}
                  role={item.role}
                  description={item.description}
                  mySkills={item.mySkills}
                  linkProjectPage={item.linkProjectPage}
                  link={item.link}
                  linkText={item.linkText}
                  customers={item.customers}
                />
              )
            })}
          </ProjectsLayout>
        </div>
      </div>
    </div>
  )
}

export default ProjectsWork
