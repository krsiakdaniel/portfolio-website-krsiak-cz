import Image from 'next/image'
import Link from 'next/link'

import List from '../../components/shared/List'
import ListItem from '../../components/shared/ListItem'

import { projectsWork } from '@/data/projects-work'

const { title, role, description, mySkills, customers, link, imageShowcase } = projectsWork[2]
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

const ProjectWorkKomercniBanka = () => {
  return (
    <>
      <div id="project-work-komercni-banka">
        <div className="container mx-auto my-20">
          <div>
            <h1 className="md:text-display-lg text-display-md font-bold">{title}</h1>
            <h2 className="text-display-xs font-semibold text-primary-500">{role}</h2>
            <Link href="/#projects-work" className="text-neutral-500 mb-8">
              ← Go back
            </Link>
          </div>

          <WebsiteInformation />

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
