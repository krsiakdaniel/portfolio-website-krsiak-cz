import ProjectInformation from '@/components/projects/ProjectInformation'
import HeaderSection from '@/components/projects/projectPage/HeaderSection'
import Section from '@/components/projects/projectPage/Section'
import ContainerSubPage from '@/components/projects/projectPage/SubPageContainer'
import { sections } from '@/data/projects/personal/eshop'
import { projectsPersonal } from '@/data/projects/personal/projectsOverview'
import { ID_PROJECTS_PERSONAL } from '@/utils/constants'
import Image from 'next/image'

const SUB_PAGE_ID = 'project-personal-eshop'

const ProjectPersonalEshop = () => {
  const { title, role, description, mySkills, links, linkGitHub, imageShowcase } = projectsPersonal[2]

  return (
    <ContainerSubPage id={SUB_PAGE_ID}>
      <HeaderSection title={title} role={role} link={ID_PROJECTS_PERSONAL} />

      <ProjectInformation description={description} mySkills={mySkills} links={links} linkGitHub={linkGitHub} />

      <div>
        {sections.map((section, index) => (
          <Section key={index} title={section.title} items={section.items} />
        ))}
      </div>

      <div className="mt-8">
        <div className="mt-4">
          {imageShowcase.map((image, index) => (
            <Image key={index} src={image} alt={`smartsupp-web-${index + 1}`} width={1216} height={754} />
          ))}
        </div>
      </div>
    </ContainerSubPage>
  )
}

export default ProjectPersonalEshop
