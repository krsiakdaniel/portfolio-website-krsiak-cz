import HeadingInfo from '@/components/about/HeadingInfo'
import JobsDescription from '@/components/about/JobsDescription'
import Photo from '@/components/about/Photo'
import DividerWithText from '@/components/shared/DividerWithText'
import { ID_ABOUT } from '@/utils/constants'
import PageContainer from '@/components/layout/PageContainer'

const About = () => {
  return (
    <PageContainer id={ID_ABOUT}>
      <div className="mb-20">
        <DividerWithText text="About me" />
        <HeadingInfo />
        <div className="flex flex-col-reverse md:flex-row justify-between md:space-x-10 mt-8">
          <JobsDescription />
          <Photo />
        </div>
      </div>
    </PageContainer>
  )
}

export default About
