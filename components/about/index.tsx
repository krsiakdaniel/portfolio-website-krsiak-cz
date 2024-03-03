import HeadingInfo from '@/components/about/HeadingInfo'
import JobsDescription from '@/components/about/JobsDescription'
import Photo from '@/components/about/Photo'
import PageContainer from '@/components/layout/PageContainer'
import DividerWithText from '@/components/shared/DividerWithText'
import { ID_ABOUT } from '@/utils/constants'

const About = () => {
  return (
    <PageContainer id={ID_ABOUT}>
      <div className="mb-20">
        <DividerWithText text="About me" />
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
