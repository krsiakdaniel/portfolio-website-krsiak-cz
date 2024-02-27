import Image from 'next/image'
import Link from 'next/link'

import ProjectInformation from '@/components/projects/ProjectInformation'
import List from '@/components/shared/List'
import ListItem from '@/components/shared/ListItem'
import { projectsWork } from '@/data/projects-work'

const { title, role, years, description, mySkills, customers, link, imageShowcase } = projectsWork[1]
const linkGoToWebsite = link[0]

const ProjectWorkSmartsuppWeb = () => {
  return (
    <>
      <div id="project-work-smartsupp-web">
        <div className="container mx-auto my-20">
          <div>
            <h1 className="md:text-display-lg text-display-md font-bold">{title}</h1>
            <h2 className="text-display-xs font-semibold text-primary-500">
              {role} <small className="text-neutral-600 text-body-md">{`· ${years}`}</small>
            </h2>
            <Link href="/#projects-work" className="text-neutral-500 mb-8">
              ← Go back
            </Link>
          </div>

          <ProjectInformation
            description={description}
            mySkills={mySkills}
            customers={customers}
            linkGoToWebsite={linkGoToWebsite}
          />

          <div>
            <div className="mt-8">
              <h3 className="pb-2 font-bold">My job:</h3>
              <List>
                <ListItem>I was responsible for the entire company’s FrontEnd and website presentation.</ListItem>
              </List>
            </div>

            <div className="mt-8">
              <h3 className="pb-2 font-bold">Developed new website:</h3>
              <List>
                <ListItem>The main company website was built with PHP and JavaScript.</ListItem>
              </List>
            </div>

            <div className="mt-8">
              <h3 className="pb-2 font-bold">Created new documentation site:</h3>
              <List>
                <ListItem>
                  I created a documentation site that was running on Jekyll, Markdown, and Shopify’s Liquid template
                  language, and later the site was moved to VuePress.
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

export default ProjectWorkSmartsuppWeb
