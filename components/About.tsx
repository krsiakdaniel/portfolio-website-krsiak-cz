import Image from 'next/image'

import krsiak from '@/public/images/krsiak.jpg'

const About = () => {
  interface Role {
    years: string
    label: string
  }

  interface Job {
    title: string
    description: string
  }

  const jobs: Job[] = [
    {
      title: 'React Developer',
      description: `
        I create user-friendly and responsive web applications. I have worked with JavaScript, TypeScript,
        React, and Redux, as well as other technologies such as Figma, and Tailwind CSS. I have a strong
        background in UI design, functional components, and code quality.
      `,
    },
    {
      title: 'QA Team Leader',
      description: `
        I have also led a QA automation team, setting up Playwright for E2E tests, writing test scripts in
        JavaScript and TypeScript, and coordinating unit and integration tests.
      `,
    },
  ]

  const roles: Role[] = [
    { years: '10', label: 'FRONT END EXPERIENCE' },
    { years: '4', label: 'REACT DEVELOPER' },
    { years: '2', label: 'QA TEAM LEADER' },
  ]

  return (
    <div id="about">
      <div className="container mx-auto">
        <div className="pb-20">
          <div className="flex justify-center relative pb-1 pt-5">
            <span className="absolute block h-px bg-white bottom-1/2 left-0 right-0 bg-skills-line"></span>
            <div className="bg-white px-6 pb-3 pt-0 relative">
              <p className="text-body-sm font-semibold tracking-2 text-neutral-500 uppercase">About Me</p>
            </div>
          </div>
          <div className="grid lg:grid-cols-12 grid-cols-1 lg:gap-8 gap-12 items-start pt-5">
            <div className="lg:col-span-5 flex flex-row items-center gap-8">
              <div className="flex flex-col xl:pr-8">
                <h2 className="md:text-display-lg text-display-md font-semibold md:pb-6 pb-4 text-primary-500 uppercase">
                  About
                </h2>
                {jobs.map((item) => (
                  <div key={item.title} className="flex flex-col gap-4 pb-4">
                    <h3 className="text-display-xs font-semibold">{item.title}</h3>
                    <p className="text-body-md font-normal text-neutral-700 pb-4">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-7 lg:grid lg:grid-cols-7 flex sm:flex-row flex-col items-center sm:items-start md:gap-8 gap-12">
              <div className="lg:col-span-4 flex">
                <Image
                  src={krsiak}
                  className="rounded-lg border border-neutral-300"
                  alt="Daniel Kršiak"
                  placeholder="blur"
                  style={{
                    width: '385px',
                    height: 'auto',
                  }}
                />
              </div>
              <div className="lg:col-span-3 flex md:self-auto self-stretch grow flex-col gap-6 sm:gap-8 xl:gap-12 xl:pl-8">
                {roles.map((item) => (
                  <div
                    key={item.label}
                    className="flex flex-col items-center sm:items-start self-stretch gap-2 pb-4 border-b border-solid border-neutral-300 last:border-none last:pb-0"
                  >
                    <h4 className="md:text-display-lg text-display-md font-semibold">
                      <span className="text-primary-500">{item.years}</span> years
                    </h4>
                    <p className="text-body-sm font-semibold tracking-2 text-neutral-500">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
