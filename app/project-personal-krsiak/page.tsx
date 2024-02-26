import Image from 'next/image'
import Link from 'next/link'

import ProjectInformation from '@/components/projects/ProjectInformation'
import List from '@/components/shared/List'
import ListItem from '@/components/shared/ListItem'
import { projectsPersonal } from '@/data/projects-personal'

const { title, role, description, mySkills, link, imageShowcase } = projectsPersonal[0]
const linkGoToWebsite = link[0]

const ProjectPersonalKrsiak = () => {
  return (
    <>
      <div id="project-personal-krsiak">
        <div className="container mx-auto my-20">
          <div>
            <h1 className="md:text-display-lg text-display-md font-bold">{title}</h1>
            <h2 className="text-display-xs font-semibold text-primary-500">{role}</h2>
            <Link href="/#projects-personal" className="text-neutral-500 mb-8">
              ← Go back
            </Link>
          </div>

          <ProjectInformation description={description} mySkills={mySkills} linkGoToWebsite={linkGoToWebsite} />

          <div>
            <div className="mt-8">
              <h3 className="pb-2 font-bold">Description:</h3>
              <List>
                <ListItem>
                  I needed a new website for my personal presentation. I learnt Next.js, and used Tailwind CSS.
                </ListItem>
              </List>
            </div>
          </div>

          <div className="mt-8">
            <div className="mt-4">
              {imageShowcase.map((image, index) => (
                <Image key={index} src={image} alt={`smartsupp-web-${index + 1}`} width={1216} height={754} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProjectPersonalKrsiak
