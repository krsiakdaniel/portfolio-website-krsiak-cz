import NextPageNavigation from '@/components/NextPageNavigation'
import HeadingInfo from '@/components/aboutMe/HeadingInfo'
import JobsDescription from '@/components/aboutMe/JobsDescription'
import Photo from '@/components/aboutMe/Photo'
import PageContainer from '@/components/layout/PageContainer'
import BreadCrumbs from '@/components/shared/Breadcrumbs'
import { ID } from '@/utils/constants'

const About = () => {
  return (
    <PageContainer id={ID.about}>
      <BreadCrumbs linkLevel1="/about-me" textLevel1="About Me" />
      <div className="mb-20">
        <HeadingInfo />
        <div className="mt-16 flex flex-col-reverse justify-between md:flex-row md:space-x-10">
          <JobsDescription />
          <Photo />
        </div>
      </div>
      <NextPageNavigation
        pageLinkPrevious="/"
        pageNamePrevious="Home"
        pageLinkNext="/work-experience"
        pageNameNext="Work Experience"
      />
    </PageContainer>
  )
}

export default About
