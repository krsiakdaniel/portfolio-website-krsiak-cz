import HeadingInfo from '@/app/about-me/HeadingInfo'
import JobsDescription from '@/app/about-me/JobsDescription'
import Photo from '@/app/about-me/Photo'
import PageContainer from '@/components/layout/PageContainer'
import { ID_ABOUT } from '@/utils/constants'

const About = () => {
  return (
    <PageContainer id={ID_ABOUT}>
      <div className="mb-20">
        <HeadingInfo />
        <div className="mt-8 flex flex-col-reverse justify-between md:flex-row md:space-x-10">
          <JobsDescription />
          <Photo />
        </div>
      </div>
    </PageContainer>
  )
}

export default About
