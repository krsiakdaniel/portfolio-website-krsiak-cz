import React from 'react'

import JobItem from './JobItem'

import work1 from '../public/images/work/work-1.png'
import work2 from '../public/images/work/work-2.png'
import work3 from '../public/images/work/work-3.png'
import work4 from '../public/images/work/work-4.png'

type JobProps = {
  id: number
  image: string
  title: string
  role: string
  description: string
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
    linkText: 'Go to website →',
    link: 'https://www.groupon.com/',
    customers: '17 000 000+',
  },
]

const Jobs = () => {
  return (
    <div id="#work">
      <div className="container mx-auto">
        <div className="pb-20">
          <div className="flex justify-center relative pb-1">
            <span className="absolute block h-px bg-white bottom-1/2 left-0 right-0 bg-skills-line"></span>
            <div className="bg-white px-6 py-3 relative">
              <p className="text-body-sm font-semibold tracking-2 text-neutral-500 uppercase">Work Experience</p>
            </div>
          </div>
          <div className="flex flex-col pt-5">
            <div className="grid lg:grid-cols-12 grid-cols-1 gap-8 items-center">
              <div className="xl:col-span-6 lg:col-span-8 flex flex-row items-center gap-8 lg:pr-8">
                <h2 className="md:text-display-lg text-display-md font-semibold md:pb-6 pb-4 text-primary-600 uppercase">
                  Work
                </h2>
              </div>
            </div>
            <h3 className="text-display-xs font-semibold">My job roles</h3>
            <div>
              <p className="text-body-md font-normal text-neutral-700 pb-4">
                In my previous roles, I have developed new features, updated legacy codebases, and implemented
                responsive design for various <span className="font-semibold">SAAS web projects</span>, such as a{' '}
                <span className="font-semibold">chat dashboard for customer care teams</span> and redesigned chatbot
                settings.
              </p>
              <p className="text-body-md font-normal text-neutral-700 pb-4">
                I worked on <span className="font-semibold">Société Générale bank website</span> with ATM and branches
                search and exchange rates functionalities used by 2 million customers. And I was responsible for QA team
                and Automation for <span className="font-semibold">Groupon - Online Marketplace</span> with 17 million
                customers.
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
