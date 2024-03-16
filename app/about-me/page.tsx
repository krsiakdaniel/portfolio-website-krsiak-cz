import HeadingInfo from '@/components/aboutMe/HeadingInfo'
import JobsDescription from '@/components/aboutMe/JobsDescription'
import Photo from '@/components/aboutMe/Photo'
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
