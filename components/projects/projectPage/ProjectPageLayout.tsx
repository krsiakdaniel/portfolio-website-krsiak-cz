'use client'

import PageContainer from '@/components/layout/PageContainer'
import ProjectInformation from '@/components/projects/ProjectInformation'
import HeaderSection from '@/components/projects/projectPage/HeaderSection'
import Section from '@/components/projects/projectPage/Section'
import { HeaderSectionProps, ProjectInformationProps, SectionItem } from '@/utils/types'
import Image from 'next/image'
import { useState } from 'react'

type Props = {
  id: string
  sections: SectionItem[]
  imageShowcase: string[]
} & HeaderSectionProps &
  ProjectInformationProps

const ProjectPageLayout = ({
  id,
  title,
  role,
  years,
  goBackLink,
  description,
  mySkills,
  customers,
  projectLinks,
  linkGitHub,
  sections,
  imageShowcase,
}: Props) => {
  const [selectedImage, setSelectedImage] = useState(imageShowcase[0])

  return (
    <PageContainer id={id}>
      <HeaderSection title={title} role={role} years={years} goBackLink={goBackLink} />
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
        <h3 className="text-3xl font-bold dark:text-white mb-4">Gallery</h3>
        <p className="mb-3 text-neutral-600 dark:text-neutral-600">
          👇 Click on image thumbnails to see them in full size.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 mt-4">
        <div className="flex flex-row gap-4 lg:flex-col">
          {imageShowcase.map((image, index) => (
            <div key={index} onClick={() => setSelectedImage(image)}>
              <Image
                src={image}
                alt={`thumb-${index + 1}`}
                width={256}
                height={280}
                placeholder="blur"
                blurDataURL={image}
                className="rounded-lg shadow-md bg-neutral-100 border border-neutral-300 cursor-pointer hover:opacity-85  hover:border-purple-500"
              />
            </div>
          ))}
        </div>
        <div>
          <Image
            src={selectedImage}
            alt="image gallery view"
            width={1200}
            height={1313}
            placeholder="blur"
            blurDataURL={selectedImage}
            className="rounded-lg shadow-md bg-neutral-100 border border-neutral-300 sticky top-[70px]"
          />
        </div>
      </div>
    </PageContainer>
  )
}

export default ProjectPageLayout
