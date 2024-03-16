import ProjectPageLayout from '@/components/layout/projectPage/ProjectPageLayout'
import { sections } from '@/data/projects/personal/cryptoMania'
import { projectsPersonalReact } from '@/data/projects/personal/projectsOverview'
import { ID_SECTION_REACT, projectPages } from '@/utils/constants'
import { BreadCrumbs } from '@/utils/types'

const breadCrumbs: BreadCrumbs = {
  linkLevel1: '/personal-projects',
  textLevel1: 'Personal Projects',
  linkLevel2: '/personal-projects/cryptomania',
  textLevel2: 'Cryptomania',
}

const ProjectPersonalCryptomania = () => {
  const { title, role, description, mySkills, projectLinks, linkGitHub, imageShowcase } = projectsPersonalReact[0]

  return (
    <>
      <ProjectPageLayout
        breadCrumbs={breadCrumbs}
        pageID={projectPages.personal.cryptoMania}
        title={title}
        role={role}
        goBackLink="personal"
        sectionID={ID_SECTION_REACT}
        description={description}
        mySkills={mySkills}
        projectLinks={projectLinks}
        linkGitHub={linkGitHub}
        sections={sections}
        imageShowcase={imageShowcase}
      />
    </>
  )
}

export default ProjectPersonalCryptomania
