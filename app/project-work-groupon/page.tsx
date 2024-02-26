import Image from 'next/image'
import Link from 'next/link'

import ProjectInformation from '@/components/ProjectInformation'
import List from '@/components/shared/List'
import ListItem from '@/components/shared/ListItem'
import { projectsWork } from '@/data/projects-work'

const { title, role, description, mySkills, customers, link, imageShowcase } = projectsWork[3]
const linkGoToWebsite = link[0]

const ProjectWorkGroupon = () => {
  return (
    <>
      <div id="project-work-groupon">
        <div className="container mx-auto my-20">
          <div>
            <h1 className="md:text-display-lg text-display-md font-bold">{title}</h1>
            <h2 className="text-display-xs font-semibold text-primary-500">{role}</h2>
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
                <ListItem>I worked on automation, testing scripts and team coordination.</ListItem>
                <ListItem>
                  Groupon is an online marketplace, offering discounts on products and services, with 17 million
                  customers.
                </ListItem>
              </List>
            </div>

            <div className="mt-8">
              <h3 className="pb-2 font-bold">My role:</h3>
              <List>
                <ListItem>SDET = Software Development Engineer in Testing.</ListItem>
                <ListItem>
                  In testing, it is an IT professional who can work equally in both development and testing.
                </ListItem>
              </List>
            </div>

            <div className="mt-8">
              <h3 className="pb-2 font-bold">
                My responsibility: <span className="text-primary-500">1.) Automation and testing scripts</span>
              </h3>
              <List>
                <ListItem>Setting up automation, including Playwright for E2E.</ListItem>
                <ListItem>Writing E2E tests in JavaScript and TypeScript.</ListItem>
                <ListItem>Coordinating efforts related to unit tests and integration tests.</ListItem>
                <ListItem>Writing documentation for developers.</ListItem>
                <ListItem>CI/CD pipeline in GitHub using Jenkins, for unit, integration, and E2E tests.</ListItem>
              </List>
            </div>

            <div className="mt-8">
              <h3 className="pb-2 font-bold">
                My responsibility: <span className="text-primary-500">2.) Team coordination</span>
              </h3>
              <List>
                <ListItem>Involved in hiring new SDET members for QA team.</ListItem>
                <ListItem>Work across 4 teams.</ListItem>
                <ListItem>
                  3 DEV teams (15 developers). Setting priorities for writing unit and integration tests.
                </ListItem>
                <ListItem>1 QA team (6 manual testers). Coordinating regression testing for the website.</ListItem>
                <ListItem>Drive the discussion and decisions on technical topics related to the teams.</ListItem>
                <ListItem>Keeping up-to-date JIRA tasks for testing.</ListItem>
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

export default ProjectWorkGroupon
