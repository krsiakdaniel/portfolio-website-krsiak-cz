import Image from 'next/image'
import Link from 'next/link'

import ProjectInformation from '@/components/projects/ProjectInformation'
import List from '@/components/shared/List'
import ListItem from '@/components/shared/ListItem'
import { projectsWork } from '@/data/projects-work'
import link from 'next/link'

const ProjectWorkKomercniBanka = () => {
  const { title, role, years, description, mySkills, customers, links, imageShowcase } = projectsWork[2]

  return (
    <>
      <div id="project-work-komercni-banka">
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
                <ListItem>
                  I worked for the 3rd biggest bank in the Czech Republic, Komerční banka, owned by Société Générale.
                </ListItem>
                <ListItem>I worked on a website that is used by 2,240,000 customers.</ListItem>
              </List>
            </div>

            <div className="mt-8">
              <h3 className="pb-2 font-bold">Developed new features:</h3>
              <List>
                <ListItem>
                  I was tasked with creating a search page, with filters and results pagination for the bank branches
                  and ATM locations and detail sub-pages.
                </ListItem>
                <ListItem>
                  My task was to provide an easy user experience for all customers, using the Geolocation API and the
                  Google Places Autocomplete API, so they could find their nearest bank branch or ATM.
                </ListItem>
                <ListItem>I created an Exchange Rates page with rates detail pages.</ListItem>
              </List>
            </div>

            <div className="mt-8">
              <h3 className="pb-2 font-bold">Responsive web design:</h3>
              <List>
                <ListItem>I was responsible for the responsive aspects of the web as well.</ListItem>
                <ListItem>Making sure it works well for users across desktop, tablet, and mobile platforms.</ListItem>
              </List>
            </div>
          </div>

          <div className="mt-8">
            <div className="mt-4">
              {imageShowcase.map((image, index) => (
                <Image key={index} src={image} alt={`smartsupp-web-${index + 1}`} width={1216} height={1334} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProjectWorkKomercniBanka
