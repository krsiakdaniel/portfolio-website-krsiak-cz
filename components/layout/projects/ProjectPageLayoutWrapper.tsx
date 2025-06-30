import { FC } from 'react'

import PageContainer from '@/components/layout/PageContainer'
import Gallery from '@/components/layout/projects/project-page/gallery/Gallery'
import HeaderSection from '@/components/layout/projects/project-page/HeaderSection'
import ProjectInformation from '@/components/layout/projects/project-page/ProjectInformation'
import ProjectResponsibility from '@/components/layout/projects/project-page/ProjectResponsibility'
import BreadCrumbs from '@/components/shared/Breadcrumbs'
import CallToActionResume from '@/components/shared/call-to-action/cta-banners/CallToActionResume'

import { ProjectPageLayoutWrapperProps } from '@/lib/utils/typeDefinitions/props/layout/projects/project-page-layout'

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
  const { level1Url, level1Icon, level1Text, level2Url, level2Icon, level2Text } = breadCrumbs

  const {
    icon,
    ariaLabel,
    title,
    role,
    years,
    company,
    description,
    skillsOverview,
    customers,
    projectLinks,
    linkGitHub,
    galleryImages,
  } = projectData

  return (
    <>
      <PageContainer id={pageID}>
        <BreadCrumbs
          level1Url={level1Url}
          level1Icon={level1Icon}
          level1AriaLabel="projects"
          level1Text={level1Text}
          level2Url={level2Url}
          level2Icon={level2Icon}
          level2Text={level2Text}
        />
        <HeaderSection
          icon={icon}
          ariaLabel={ariaLabel}
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
          <Gallery images={galleryImages} />

          <div className="py-8">
            <CallToActionResume />
          </div>
        </article>

        {PageNavigation}
      </PageContainer>
    </>
  )
}

export default ProjectPageLayoutWrapper
