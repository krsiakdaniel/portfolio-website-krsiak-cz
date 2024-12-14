import PageContainer from '@/components/layout/PageContainer'
import HeaderSection from '@/components/layout/projectPage/HeaderSection'
import PageSection from '@/components/layout/projectPage/PageSection'
import ProjectInformation from '@/components/projects/ProjectInformation'
import BreadCrumbs from '@/components/shared/Breadcrumbs'
import { DATA_TEST_IDS } from '@/utils/dataTestIds'
import { ImageShowcaseItem, Section } from '@/utils/interfaces'
import { HeaderSectionProps, ProjectInformationProps } from '@/utils/sharedComponentProps'
import { BreadCrumbsType } from '@/utils/types'
import Image from 'next/image'

type ProjectPageLayoutProps = {
  breadCrumbs: BreadCrumbsType
  pageID: string
  sections: Section[]
  imageShowcase: ImageShowcaseItem[]
  PageNavigation: React.ReactNode
} & HeaderSectionProps &
  ProjectInformationProps

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

      <div>
        {sections.map((section) => (
          <PageSection
            key={section.id}
            title={section.title}
            titleHighlight={section.titleHighlight}
            items={section.items}
          />
        ))}
      </div>

      <div className="mt-8">
        <h3 className="mb-4 text-3xl font-bold">Gallery</h3>
        <p className="mb-3 text-neutral-600">See project screenshots below.</p>
      </div>

      <div data-testid={DATA_TEST_IDS.gallery}>
        {imageShowcase.map((image) => (
          <div data-testid={`gallery-image-${image.id}`} key={image.id}>
            <Image
              src={image.src}
              alt={`project-image-${image.id}`}
              width={1240}
              height={1272}
              placeholder="blur"
              blurDataURL={image.src}
              className="mt-8 rounded-lg border border-neutral-300 bg-neutral-100 shadow-md"
            />
          </div>
        ))}
      </div>
      {PageNavigation}
    </PageContainer>
  )
}

export default ProjectPageLayout
