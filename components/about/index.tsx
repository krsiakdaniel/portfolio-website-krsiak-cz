import HeadingInfo from '@/components/about/HeadingInfo'
import JobsDescription from '@/components/about/JobsDescription'
import Photo from '@/components/about/Photo'
import DividerWithText from '@/components/shared/DividerWithText'

const About = () => {
  return (
    <div id="about" className="mt-20 px-5">
      <div className="container mx-auto px-5 max-w-screen-xl">
        <div className="mb-20">
          <DividerWithText text="About me" />
          <HeadingInfo />
          <div className="flex flex-col-reverse md:flex-row justify-between md:space-x-10 mt-8">
            <JobsDescription />
            <Photo />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
