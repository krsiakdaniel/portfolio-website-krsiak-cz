import Image from 'next/image'
import Link from 'next/link'

import List from '../../components/shared/List'
import ListItem from '../../components/shared/ListItem'

import { projectsPersonal } from '@/data/projects-personal'

const { title, role, description, mySkills, link, imageShowcase } = projectsPersonal[2]
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
          {linkGoToWebsite && (
            <ListItem>
              <span className="leading-tight">
                Link:{' '}
                <a href={linkGoToWebsite} target="_blank" className="underline hover:no-underline text-primary-500">
                  Go to website →
                </a>
              </span>
            </ListItem>
          )}
        </List>
      </div>
    </>
  )
}

const ProjectPersonalEshop = () => {
  return (
    <>
      <div id="project-personal-eshop">
        <div className="container mx-auto my-20">
          <div>
            <h1 className="md:text-display-lg text-display-md font-bold">{title}</h1>
            <h2 className="text-display-xs font-semibold text-primary-500">{role}</h2>
            <Link href="/#projects-personal" className="text-neutral-500 mb-8">
              ← Go back
            </Link>
          </div>

          <WebsiteInformation />

          <div>
            <div className="mt-8">
              <h3 className="pb-2 font-bold">Description:</h3>
              <List>
                <ListItem>
                  First time using Vue.js. I created a simple e-shop with a few products and a shopping cart.
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

export default ProjectPersonalEshop
