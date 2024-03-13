'use client'

import PageContainer from '@/components/layout/PageContainer'
import ProjectInformation from '@/components/projects/ProjectInformation'
import HeaderSection from '@/components/projects/projectPage/HeaderSection'
import Section from '@/components/projects/projectPage/Section'
import { HeaderSectionProps, ProjectInformationProps, SectionItem } from '@/utils/types'
import Image from 'next/image'

type Props = {
  pageID: string
  sections: SectionItem[]
  imageShowcase: string[]
} & HeaderSectionProps &
  ProjectInformationProps

// TODO: Add E2E tests for this page and other, add data-testid, test links, images if are rendered
const ProjectPageLayout = ({
  pageID,
  title,
  role,
  years,
  goBackLink,
  sectionID,
  description,
  mySkills,
  customers,
  projectLinks,
  linkGitHub,
  sections,
  imageShowcase,
}: Props) => {
  return (
    <PageContainer id={pageID}>
      <HeaderSection title={title} role={role} years={years} goBackLink={goBackLink} sectionID={sectionID} />
      <ProjectInformation
        description={description}
        mySkills={mySkills}
        customers={customers}
        projectLinks={projectLinks}
        linkGitHub={linkGitHub}
      />

      <div>
        {sections.map((section, index) => (
          <Section key={index} title={section.title} titleHighlight={section.titleHighlight} items={section.items} />
        ))}
      </div>

      <div className="mt-8">
        <h3 className="mb-4 text-3xl font-bold">Gallery</h3>
        <p className="mb-3 text-neutral-600">See project screenshots below.</p>
      </div>

      <div data-testid="gallery">
        {imageShowcase.map((image, index) => (
          <div data-testid={`gallery-image-${index}`} key={index}>
            <Image
              src={image}
              alt="Project Image"
              width={1240}
              height={1272}
              placeholder="blur"
              blurDataURL={image}
              className="mt-8 rounded-lg border border-neutral-300 bg-neutral-100 shadow-md"
            />
          </div>
        ))}
      </div>
    </PageContainer>
  )
}

export default ProjectPageLayout
