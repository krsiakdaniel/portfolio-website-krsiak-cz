import React from 'react'

import { projectsPersonal } from '@/data/projects-personal'

import ProjectsLayout from '@/components/ProjectsLayout'
import ProjectItem from './ProjectItem'

const ProjectsPersonal = () => {
  return (
    <div id="projects-personal">
      <div className="container mx-auto">
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
  )
}

export default ProjectsPersonal
