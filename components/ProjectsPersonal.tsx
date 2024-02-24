import React from 'react'

import { projectsPersonal } from '@/data/projects'

import ProjectsLayout from '@/components/ProjectsLayout'
import ProjectItem from './ProjectItem'

const ProjectsPersonal = () => {
  return (
    <div id="projects-personal">
      <ProjectsLayout
        dividerText="In My Free Time"
        heading="Personal Projects"
        rolesHeading="In my free time"
        rolesDescription="I like to learn new technologies and create personal projects."
        projectsHeading="Projects I worked on"
        projectsDescription="Below are some of the projects that I created."
      >
        {projectsPersonal.map((item) => {
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

export default ProjectsPersonal
