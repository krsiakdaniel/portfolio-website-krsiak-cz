import Image from 'next/image'
import Link from 'next/link'

import ProjectInformation from '@/components/projects/ProjectInformation'
import List from '@/components/shared/List'
import ListItem from '@/components/shared/ListItem'
import { projectsWork } from '@/data/projects-work'

const ProjectWorkSmartsuppDashboard = () => {
  const { title, role, years, description, mySkills, customers, links, imageShowcase } = projectsWork[0]

  return (
    <>
      <div id="project-work-smartsupp-dashboard">
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

          <ProjectInformation description={description} mySkills={mySkills} customers={customers} links={links} />

          <div>
            <div className="mt-8">
              <h3 className="pb-2 font-bold">My job:</h3>
              <List>
                <ListItem>I worked for a company that creates a chat solution for customer care teams.</ListItem>
                <ListItem>
                  The product is a chat box for e-commerce and regular websites, and integrates with an email inbox and
                  Facebook Messenger, all-in-one messaging platform.
                </ListItem>
              </List>
            </div>

            <div className="mt-8">
              <h3 className="pb-2 font-bold">Developed new features:</h3>
              <List>
                <ListItem>
                  I participated in the implementation of new features for the chat application dashboard.
                </ListItem>
                <ListItem>
                  Ranging from new chat features to working on a chatbot page and creating graphs for statistics.
                </ListItem>
                <ListItem>I also updated the old JavaScript codebase to a modern one using REACT with hooks.</ListItem>
              </List>
            </div>

            <div className="mt-8">
              <h3 className="pb-2 font-bold">Responsive web design:</h3>
              <List>
                <ListItem>
                  A crucial aspect of my role was to make sure the application dashboard was optimized for various
                  devices and screen sizes.
                </ListItem>
                <ListItem>
                  I implemented the latest responsive design principles to guarantee a consistent and enjoyable user
                  experience across desktop, tablet, and mobile platforms.
                </ListItem>
              </List>
            </div>

            <div className="mt-8">
              <h3 className="pb-2 font-bold">User Interface enhancements:</h3>
              <List>
                <ListItem>I took charge of improving the dashboard User Interface.</ListItem>
                <ListItem>
                  This included all visual elements, unifying the layout and colors for the entire application, so the
                  user experience was seamless and engaging for customers.
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

export default ProjectWorkSmartsuppDashboard
