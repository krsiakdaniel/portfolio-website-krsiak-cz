import PageContainer from '@/components/layout/PageContainer'
import ProjectInformation from '@/components/projects/ProjectInformation'
import HeaderSection from '@/components/projects/projectPage/HeaderSection'
import Section from '@/components/projects/projectPage/Section'
import { HeaderSectionProps, ProjectInformationProps, SectionItem } from '@/utils/types'
import Image from 'next/image'

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

      <div className="pb-10">
        {sections.map((section, index) => (
          <Section key={index} title={section.title} titleHighlight={section.titleHighlight} items={section.items} />
        ))}
      </div>

      <div>
        {imageShowcase.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt={`smartsupp-web-${index + 1}`}
            width={1200}
            height={1234}
            className="rounded-lg shadow-md bg-neutral-100 border border-neutral-300 mt-4 mb-16 md:mt-0 last:mb-0"
          />
        ))}
      </div>
    </PageContainer>
  )
}

export default ProjectPageLayout
