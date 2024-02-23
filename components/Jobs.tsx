import React from 'react'

import JobItem from './JobItem'

import work1 from '../public/images/work/png/work-1-thumb.png'
import work2 from '../public/images/work/png/work-2-thumb.png'
import work3 from '../public/images/work/png/work-3-thumb.png'
import work4 from '../public/images/work/png/work-4-thumb.png'

type JobProps = {
  id: number
  image: string
  title: string
  role: string
  description: string
  techStack: string
  linkText: string
  link: string
  customers: string
}

const workData: JobProps[] = [
  {
    id: 1,
    image: work1.src,
    title: '🚀 Smartsupp - SAAS company website',
    role: 'Front End Developer',
    description: 'I created the company website. And worked closely with UX on design decisions.',
    techStack: 'JavaScript · PHP · Responsive Web Design · SASS · BEM',
    linkText: 'Go to website →',
    link: 'https://www.smartsupp.com/',
    customers: '4 000 000+',
  },
  {
    id: 2,
    image: work2.src,
    title: '👨‍💻 Smartsupp - Customer care chat dashboard',
    role: 'React Developer',
    description: 'I worked on the customer care chat dashboard. Also redesigned the settings of the application.',
    techStack: 'React · JavaScript · TypeScript · Redux · Chakra UI · Adobe XD',
    linkText: 'Go to website →',
    link: 'https://www.smartsupp.com/live-chat-for-customer-care-teams/',
    customers: '100 000+',
  },
  {
    id: 3,
    image: work3.src,
    title: '🏦 Komerční banka - Commerce Bank website',
    role: 'React Developer',
    description:
      'I created search page for ATM and branches, with detail pages. And also Exchange rates page with details for each currency.',
    techStack: 'React · JavaScript · TypeScript · Tailwind CSS · Figma · Kentico',
    linkText: 'Go to website →',
    link: 'https://www.kb.cz/en/branches-and-atms',
    customers: '2 000 000+',
  },
  {
    id: 4,
    image: work4.src,
    title: '🛒 Groupon - Online marketplace',
    role: 'QA Automation Team Leader',
    description:
      'I was responsible for setting up QA processes, hiring and managing QA team, creating test plans, test cases, and testing the website.',
    techStack: 'JavaScript · TypeScript · React · Next.js · Playwright · Figma · Jira',
    linkText: 'Go to website →',
    link: 'https://www.groupon.com/',
    customers: '17 000 000+',
  },
]

const Jobs = () => {
  return (
    <div id="work">
      <div className="container mx-auto">
        <div className="pb-10">
          <div className="flex justify-center relative pb-1 pt-5">
            <span className="absolute block h-px bg-white bottom-1/2 left-0 right-0 bg-skills-line"></span>
            <div className="bg-white px-6 pb-3 pt-0 relative">
              <p className="text-body-sm font-semibold tracking-2 text-neutral-500 uppercase">Work Experience</p>
            </div>
          </div>
          <div className="flex flex-col pt-5">
            <div className="grid lg:grid-cols-12 grid-cols-1 gap-8 items-center">
              <div className="xl:col-span-6 lg:col-span-8 flex flex-row items-center gap-8 lg:pr-8">
                <h2 className="md:text-display-lg text-display-md font-semibold md:pb-6 pb-4 text-primary-500 uppercase">
                  Work
                </h2>
              </div>
            </div>
            <h3 className="text-display-xs font-semibold">My job roles</h3>
            <div>
              <p className="text-body-md font-normal text-neutral-700 pb-4">
                In my previous jobs, I developed new features, redesigned websites, implemented responsive design,
                updated legacy codebases, was responsible for text localization, QA testing, automation and team leading
                on various projects.
              </p>
              <h3 className="text-display-xs font-semibold">Projects I worked on</h3>
              <p className="text-body-md font-normal text-neutral-700 pb-4">
                Below are the companies that I worked for and respective websites and applications where I was involved.
              </p>
            </div>
            <div className="flex flex-col">
              <div className="flex md:flex-row flex-col flex-wrap">
                {workData.map((item) => {
                  return (
                    <JobItem
                      key={item.id}
                      image={item.image}
                      title={item.title}
                      role={item.role}
                      description={item.description}
                      techStack={item.techStack}
                      link={item.link}
                      linkText={item.linkText}
                      customers={item.customers}
                    />
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Jobs
