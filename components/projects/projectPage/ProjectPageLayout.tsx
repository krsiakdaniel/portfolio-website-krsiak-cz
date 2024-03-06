'use client'

import PageContainer from '@/components/layout/PageContainer'
import ProjectInformation from '@/components/projects/ProjectInformation'
import HeaderSection from '@/components/projects/projectPage/HeaderSection'
import Section from '@/components/projects/projectPage/Section'
import { HeaderSectionProps, ProjectInformationProps, SectionItem } from '@/utils/types'
import Image from 'next/image'
import { useEffect, useState } from 'react'

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
  sectionID,
  description,
  mySkills,
  customers,
  projectLinks,
  linkGitHub,
  sections,
  imageShowcase,
}: Props) => {
  // Set new image for gallery
  const [selectedImage, setSelectedImage] = useState(imageShowcase[0])

  // Preload images
  const preloadImage = (url: string) => {
    const img = new window.Image()
    img.src = url
  }

  useEffect(() => {
    imageShowcase.forEach((image) => preloadImage(image))
  }, [imageShowcase])

  return (
    <PageContainer id={id}>
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
        <h3 className="mb-4 text-3xl font-bold dark:text-white">Gallery</h3>
        <p className="mb-3 text-neutral-600 dark:text-neutral-600">
          👇 Click on image thumbnails to see them in full size.
        </p>
      </div>

      <div className="mt-4 flex flex-col gap-8 lg:flex-row">
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
                className="cursor-pointer rounded-lg border border-neutral-300 bg-neutral-100 shadow-md hover:border-purple-500  hover:opacity-85"
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
            className="sticky top-[70px] rounded-lg border border-neutral-300 bg-neutral-100 shadow-md"
          />
        </div>
      </div>
    </PageContainer>
  )
}

export default ProjectPageLayout
