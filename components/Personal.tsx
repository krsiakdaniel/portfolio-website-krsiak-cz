import React from 'react'

import JobItem from './JobItem'

import project1 from '../public/images/personal-projects/png/personal-1-thumb.png'
import project2 from '../public/images/personal-projects/png/personal-2-thumb.png'
import project3 from '../public/images/personal-projects/png/personal-3-thumb.png'

// TODO: unify into shared component
type JobProps = {
  id: number
  image: string
  title: string
  role: string
  description: string
  techStack: string
  linkText: string
  link?: string | undefined
  customers?: string | undefined
}

const workData: JobProps[] = [
  {
    id: 1,
    image: project1.src,
    title: '👨‍💻 Portfolio Website',
    role: 'Next.js App',
    description: 'My personal portfolio website to showcase my work and skills.',
    techStack: 'JavaScript · TypeScript · Next.js · Tailwind CSS',
    linkText: 'Go to website →',
    link: '',
    customers: '',
  },
  {
    id: 2,
    image: project2.src,
    title: '💰 CryptoMania',
    role: 'React App',
    description: 'Crypto currency price tracker using CoinGecko API.',
    techStack: 'JavaScript · TypeScript · React App · Chakra UI · CoinGecko API',
    linkText: 'Go to website →',
    link: 'https://cryptomania-cryptocurrency-prices.netlify.app/',
    customers: '',
  },
  {
    id: 3,
    image: project3.src,
    title: '🛒 eCommerce Website',
    role: 'Vue.js App',
    description: 'Simple eCommerce website. First time coding with Vue.js and Nuxt.js.',
    techStack: 'JavaScript · Vue.js · Nuxt.js · Vuetify',
    linkText: 'Go to website →',
    link: 'https://ecommerce-vue-nuxt.onrender.com/',
    customers: '',
  },
]

const Jobs = () => {
  return (
    <div id="personal">
      <div className="container mx-auto">
        <div className="pb-10">
          <div className="flex justify-center relative pb-1 pt-5">
            <span className="absolute block h-px bg-white bottom-1/2 left-0 right-0 bg-skills-line"></span>
            <div className="bg-white px-6 pb-3 pt-0 relative">
              <p className="text-body-sm font-semibold tracking-2 text-neutral-500 uppercase">In My Free Time</p>
            </div>
          </div>
          <div className="flex flex-col pt-5">
            <div className="grid lg:grid-cols-12 grid-cols-1 gap-8 items-center">
              <div className="xl:col-span-6 lg:col-span-8 flex flex-row items-center gap-8 lg:pr-8">
                <h2 className="md:text-display-lg text-display-md font-semibold md:pb-6 pb-4 text-primary-600 uppercase">
                  Personal Projects
                </h2>
              </div>
            </div>
            <h3 className="text-display-xs font-semibold">In my free time</h3>
            <div>
              <p className="text-body-md font-normal text-neutral-700 pb-4">
                I like to learn new technologies and create personal projects.
              </p>
              <h3 className="text-display-xs font-semibold">Projects I worked on</h3>
              <p className="text-body-md font-normal text-neutral-700 pb-4">
                Below are some of the projects that I created.
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
