import ProjectInformation from '@/components/projects/ProjectInformation'
import HeaderSection from '@/components/projects/projectPage/HeaderSection'
import Section from '@/components/projects/projectPage/Section'
import ContainerSubPage from '@/components/projects/projectPage/SubPageContainer'
import { sections } from '@/data/projects/work/komercniBanka'
import { projectsWork } from '@/data/projects/work/projectsOverview'
import { ID_PROJECTS_WORK } from '@/utils/constants'
import Image from 'next/image'

const SUB_PAGE_ID = 'project-work-komercni-banka'

const ProjectWorkKomercniBanka = () => {
  const { title, role, years, description, mySkills, customers, links, imageShowcase } = projectsWork[2]

  return (
    <>
      <ContainerSubPage id={SUB_PAGE_ID}>
        <HeaderSection title={title} role={role} years={years} link={ID_PROJECTS_WORK} />

        <ProjectInformation description={description} mySkills={mySkills} customers={customers} links={links} />

        <div className="pb-10">
          {sections.map((section, index) => (
            <Section key={index} title={section.title} items={section.items} />
          ))}
        </div>

        <div>
          {imageShowcase.map((image, index) => (
            <Image key={index} src={image} alt={`smartsupp-web-${index + 1}`} width={1216} height={754} />
          ))}
        </div>
      </ContainerSubPage>
    </>
  )
}

export default ProjectWorkKomercniBanka
