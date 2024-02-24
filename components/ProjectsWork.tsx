import React from 'react'

import { projectsWork } from '@/data/projects'

import ProjectsLayout from './ProjectsLayout'
import ProjectItem from './ProjectItem'

const ProjectsWork = () => {
  return (
    <div id="projects-work">
      <ProjectsLayout
        dividerText="Work Experience"
        heading="Work"
        rolesHeading="My job roles"
        rolesDescription="In my previous jobs, I developed new features, redesigned websites, implemented responsive design, updated legacy codebases, was responsible for text localization, QA testing, automation and team leading on various projects."
        projectsHeading="Projects I worked on"
        projectsDescription="Below are the companies that I worked for and respective websites and applications where I was involved."
      >
        {projectsWork.map((item) => {
          return (
            <ProjectItem
              key={item.id}
              image={item.image}
              title={item.title}
              role={item.role}
              description={item.description}
              techStack={item.techStack}
              link={item.link}
              linkText={item.linkText}
              customers={item.customers}
            />
          )
        })}
      </ProjectsLayout>
    </div>
  )
}

export default ProjectsWork
