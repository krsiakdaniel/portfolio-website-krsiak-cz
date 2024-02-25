import Image from 'next/image'
import Link from 'next/link'

import List from '../../components/shared/List'
import ListItem from '../../components/shared/ListItem'

import { projectsWork } from '@/data/projects'

// TODO: RESIZE IMAGES to be MAX on what is on the big screen, not bigger!
// TODO: make images into JPEG?
// TODO: add jobs description from linkedin
// TODO: create a new page for each project - WORK and PERSONAL - with all the details
// TODO: test and click all links on PROJECTS main page + subpages
// TODO: take more screenshots for dashboard + KB, with dark mode browser

const { title, role, description, mySkills, customers, link, imageShowcase } = projectsWork[0]
const linkGoToWebsite = link[0]

const WebsiteInformation = () => {
  return (
    <>
      <div className="flex flex-col mt-8">
        <p className="text-body-md font-normal text-neutral-700">{description}</p>
      </div>

      <div className="mt-8">
        <h3 className="pb-2 font-bold">Information:</h3>
        <List>
          <ListItem>
            My skills: <span className="text-primary-500">{mySkills}</span>
          </ListItem>
          <ListItem>
            Company customers: <span className="text-neutral-500">{customers}</span>
          </ListItem>
          <ListItem>
            <span className="leading-tight">
              Link:{' '}
              <a href={linkGoToWebsite} target="_blank" className="underline hover:no-underline text-primary-500">
                Go to website →
              </a>
            </span>
          </ListItem>
        </List>
      </div>
    </>
  )
}

const ProjectWorkSmartsuppWeb = () => {
  return (
    <>
      <div id="project-work-smartsupp-web">
        <div className="container mx-auto my-20">
          <div>
            <h1 className="md:text-display-lg text-display-md font-bold">{title}</h1>
            <h2 className="text-display-xs font-semibold text-primary-500">{role}</h2>
            <Link href="/#projects-work" className="text-neutral-500 mb-8">
              ← Go back
            </Link>
          </div>

          <WebsiteInformation />

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
