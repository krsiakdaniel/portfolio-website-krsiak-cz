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

      {/* FIXME: new style LIGHT + DARK screenshots retake + keep same CSS as for images on homepage */}
      <div>
        {imageShowcase.map((image, index) => (
          <Image key={index} src={image} alt={`smartsupp-web-${index + 1}`} width={1216} height={754} />
        ))}
      </div>
    </PageContainer>
  )
}

export default ProjectPageLayout
