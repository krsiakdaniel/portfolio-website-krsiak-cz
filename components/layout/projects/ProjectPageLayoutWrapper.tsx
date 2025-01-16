import { FC } from 'react'

import PageContainer from '@/components/layout/PageContainer'
import Gallery from '@/components/layout/projects/project-page/Gallery'
import HeaderSection from '@/components/layout/projects/project-page/HeaderSection'
import ProjectInformation from '@/components/layout/projects/project-page/ProjectInformation'
import ProjectResponsibility from '@/components/layout/projects/project-page/ProjectResponsibility'
import BreadCrumbs from '@/components/shared/Breadcrumbs'
import CallToActionResume from '@/components/shared/call-to-action/CallToActionResume'

import { ProjectPageLayoutWrapperProps } from '@/lib/utils/interfaces/componentProps'

const ProjectPageLayoutWrapper: FC<ProjectPageLayoutWrapperProps> = ({
  goBackLink,
  sectionID,
  breadCrumbs,
  pageID,
  projectData,
  sections,
  showAlert,
  PageNavigation,
}): JSX.Element => {
  const { level1Url, level1Text, level2Url, level2Text } = breadCrumbs

  const {
    title,
    role,
    years,
    company,
    description,
    skillsOverview,
    customers,
    projectLinks,
    linkGitHub,
    imageShowcase,
  } = projectData

  return (
    <>
      <PageContainer id={pageID}>
        <BreadCrumbs level1Url={level1Url} level1Text={level1Text} level2Url={level2Url} level2Text={level2Text} />
        <HeaderSection
          title={title}
          role={role}
          years={years}
          company={company}
          goBackLink={goBackLink}
          sectionID={sectionID}
        />

        {showAlert}

        <article>
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
        </article>

        {PageNavigation}
      </PageContainer>
    </>
  )
}

export default ProjectPageLayoutWrapper
