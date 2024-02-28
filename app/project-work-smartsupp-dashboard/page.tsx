import Image from 'next/image'
import Link from 'next/link'

import ProjectInformation from '@/components/projects/ProjectInformation'
import List from '@/components/shared/List'
import ListItem from '@/components/shared/ListItem'
import { projectsWork } from '@/data/projects-work'

type HeaderSectionProps = {
  title: string
  role: string
  years: string | undefined
  link: string
}

type SectionItem = {
  title: string
  items: string[]
}

const sections: SectionItem[] = [
  {
    title: 'My job:',
    items: [
      'I worked for a company that creates a chat solution for customer care teams.',
      'The product is a chat box for e-commerce and regular websites, and integrates with an email inbox and Facebook Messenger, all-in-one messaging platform.',
    ],
  },
  {
    title: 'Developed new features:',
    items: [
      'I participated in the implementation of new features for the chat application dashboard.',
      'Ranging from new chat features to working on a chatbot page and creating graphs for statistics.',
      'I also updated the old JavaScript codebase to a modern one using REACT with hooks.',
    ],
  },
]

const HeaderSection = ({ title, role, years, link }: HeaderSectionProps) => (
  <div>
    <h1 className="md:text-display-lg text-display-md font-bold">{title}</h1>
    <h2 className="text-display-xs font-semibold text-primary-500">
      {role} <small className="text-neutral-600 text-body-md">{`· ${years}`}</small>
    </h2>
    <Link href={link} className="text-neutral-500 mb-8">
      ← Go back
    </Link>
  </div>
)

const Section = ({ title, items }: SectionItem) => (
  <div className="mt-8">
    <h3 className="pb-2 font-bold">{title}</h3>
    <List>
      {items.map((item, index) => (
        <ListItem key={index}>{item}</ListItem>
      ))}
    </List>
  </div>
)

const ProjectWorkSmartsuppDashboard = () => {
  const { title, role, years, description, mySkills, customers, links, imageShowcase } = projectsWork[0]

  return (
    <>
      <div id="project-work-smartsupp-dashboard">
        <div className="container mx-auto my-20">
          <HeaderSection title={title} role={role} years={years} link="/#projects-work" />

          <ProjectInformation description={description} mySkills={mySkills} customers={customers} links={links} />

          <div className="pb-10">
            {sections.map((section, index) => (
              <Section key={index} title={section.title} items={section.items} />
            ))}
          </div>

          <div>
            {imageShowcase.map((image, index) => (
              <Image key={index} src={image} alt={`smartsupp-web-${index + 1}`} width={1216} height={754} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default ProjectWorkSmartsuppDashboard
