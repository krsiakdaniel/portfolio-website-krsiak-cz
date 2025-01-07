import { FC, ReactNode } from 'react'

import PageContainer from '@/components/layout/PageContainer'
import Gallery from '@/components/layout/projects/project-page-detail/Gallery'
import HeaderSection from '@/components/layout/projects/project-page-detail/HeaderSection'
import ProjectInformation from '@/components/layout/projects/project-page-detail/ProjectInformation'
import ProjectResponsibility from '@/components/layout/projects/project-page-detail/ProjectResponsibility'
import BreadCrumbs from '@/components/shared/Breadcrumbs'
import CallToActionResume from '@/components/shared/call-to-action/CallToActionResume'

import { HeaderSectionProps } from '@/lib/utils/interfaces/componentProps'
import { ImageShowcaseItem, Project, Section } from '@/lib/utils/interfaces/interfaces'
import { BreadCrumbsType } from '@/lib/utils/interfaces/types'

type BreadCrumbsProps = {
  breadCrumbs: BreadCrumbsType
}

type PageProps = {
  pageID: string
  sections: Section[]
  imageShowcase: ImageShowcaseItem[]
  PageNavigation: ReactNode
}

type ProjectProps = Pick<Project, 'description' | 'skillsOverview' | 'customers' | 'projectLinks' | 'linkGitHub'>

type ProjectPageLayoutProps = BreadCrumbsProps & HeaderSectionProps & ProjectProps & PageProps

const ProjectPageLayout: FC<ProjectPageLayoutProps> = ({
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
}): JSX.Element => {
  return (
    <PageContainer id={pageID}>
      <BreadCrumbs
        level1Url={breadCrumbs.level1Url}
        level1Text={breadCrumbs.level1Text}
        level2Url={breadCrumbs.level2Url}
        level2Text={breadCrumbs.level2Text}
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

      <CallToActionResume />

      {PageNavigation}
    </PageContainer>
  )
}

export default ProjectPageLayout
