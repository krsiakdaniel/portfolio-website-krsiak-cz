import PageContainer from '@/components/layout/PageContainer'
import HeaderSection from '@/components/layout/project-page/HeaderSection'
import ProjectInformation from '@/components/projects/project-detail-page/ProjectInformation'
import BreadCrumbs from '@/components/shared/Breadcrumbs'
import { HeaderSectionProps } from '@/utils/interfaces/componentProps'
import { ImageShowcaseItem, Project, Section } from '@/utils/interfaces/interfaces'
import { BreadCrumbsType } from '@/utils/interfaces/types'
import Gallery from './Gallery'
import ProjectResponsibility from './ProjectResponsibility'

type BreadCrumbsProps = {
  breadCrumbs: BreadCrumbsType
}

type PageProps = {
  pageID: string
  sections: Section[]
  imageShowcase: ImageShowcaseItem[]
  PageNavigation: React.ReactNode
}

type ProjectProps = Pick<Project, 'description' | 'skillsOverview' | 'customers' | 'projectLinks' | 'linkGitHub'>

type ProjectPageLayoutProps = BreadCrumbsProps & HeaderSectionProps & ProjectProps & PageProps

const ProjectPageLayout = ({
  breadCrumbs,
  pageID,
  title,
  role,
  years,
  company,
  goBackLink,
  sectionID,
  description,
  skillsOverview,
  customers,
  projectLinks,
  linkGitHub,
  sections,
  imageShowcase,
  PageNavigation,
}: ProjectPageLayoutProps) => {
  return (
    <PageContainer id={pageID}>
      <BreadCrumbs
        linkLevel1={breadCrumbs.linkLevel1}
        textLevel1={breadCrumbs.textLevel1}
        linkLevel2={breadCrumbs.linkLevel2}
        textLevel2={breadCrumbs.textLevel2}
      />
      <HeaderSection
        title={title}
        role={role}
        years={years}
        company={company}
        goBackLink={goBackLink}
        sectionID={sectionID}
      />
      <ProjectInformation
        description={description}
        skillsOverview={skillsOverview}
        customers={customers}
        projectLinks={projectLinks}
        linkGitHub={linkGitHub}
      />

      <ProjectResponsibility sections={sections} />

      <Gallery imageShowcase={imageShowcase} />

      {PageNavigation}
    </PageContainer>
  )
}

export default ProjectPageLayout
