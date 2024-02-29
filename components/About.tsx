import DividerWithText from '@/components/shared/DividerWithText'
import { jobs } from '@/data/about'
import krsiak from '@/public/images/krsiak.jpg'
import Image from 'next/image'

const HeadingInfo = () => {
  return (
    <div>
      <h2 className="text-4xl font-extrabold text-purple-600 dark:text-purple-500 uppercase">About</h2>
      <p className="my-4 text-lg text-gray-500">
        I am Front End - <span className="text-purple-500 font-bold">React Developer</span>, who knows{' '}
        <span className="text-purple-500 font-bold">QA Automation</span> and is used to leading people as a{' '}
        <span className="text-purple-500 font-bold">Team Leader</span>.
      </p>
    </div>
  )
}

const Jobs = () => {
  return (
    <div className="flex flex-col w-full sm:1/2 lg:w-2/3">
      {jobs.map((item) => (
        <div key={item.title} className="flex flex-col gap-4 pt-4 pb-8">
          <div className="flex flex-col lg:flex-row items-start lg:items-center">
            <div className="flex justify-center items-center w-12 h-12 rounded-full bg-blue-100  dark:bg-blue-900 mb-2 lg:mb-0 md:mr-4">
              <Image key={item.title} src={item.path} alt={item.title} width={24} height={24} />
            </div>
            <h3 className="text-3xl font-bold dark:text-white">
              {item.title}{' '}
              <small className="text-md text-neutral-500">
                {item.years && '· '}
                {item.years} years
              </small>
            </h3>
          </div>
          <p className="mb-3 text-gray-500 dark:text-gray-400 last:mb-0 md:max-w-[640px] lg:max-w-[768px]">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  )
}

const Photo = () => {
  return (
    <div className="flex flex-col w-full sm:1/2 lg:w-1/3 items-center justify-start lg:justify-center">
      <Image
        src={krsiak}
        className="rounded-lg border border-neutral-300 mt-4 mb-8 md:mt-0 md:mb-0"
        alt="Daniel Kršiak"
        placeholder="blur"
        style={{
          width: '385px',
          height: 'auto',
        }}
      />
    </div>
  )
}

const About = () => {
  return (
    <div id="about" className="mt-20 px-5">
      <div className="container mx-auto">
        <div className="mb-20">
          <DividerWithText text="About me" />
          <HeadingInfo />
          <div className="flex flex-col-reverse md:flex-row justify-between md:space-x-10 mt-8">
            <Jobs />
            <Photo />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
