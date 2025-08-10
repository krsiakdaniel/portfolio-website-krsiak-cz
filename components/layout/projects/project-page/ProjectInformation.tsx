import CustomersCount from '@/components/layout/projects/project-page/CustomersCount'
import ProjectLinksList from '@/components/layout/projects/project-page/ProjectLinksList'
import SkillsList from '@/components/layout/projects/project-page/SkillsList'
import Heading3 from '@/components/shared/Heading3'
import List from '@/components/shared/List'
import ListItem from '@/components/shared/ListItem'

import { TEXT } from '@/localization/english'

import { ProjectInformationProps } from '@/lib/utils/typeDefinitions/props/layout/projects/project-page'

const ProjectInformation = ({
  description,
  skillsOverview,
  customers,
  projectLinks,
  linkGitHub,
}: ProjectInformationProps) => {
  const hasMoreLinks = projectLinks.length > 1
  const hasGithub = linkGitHub ? true : false

  return (
    <>
      <div className="mt-20">
        <Heading3>{TEXT.summary}</Heading3>
        <div className="mt-4">
          {customers && <CustomersCount count={customers} />}
          <div className={customers ? 'mt-1' : 'mt-0'}>
            <List>
              <ListItem>{description}</ListItem>
            </List>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <Heading3>{TEXT.skills}</Heading3>
        <div className="mt-4">
          <SkillsList skillsOverview={skillsOverview} />
        </div>
      </div>

      <div className="mt-8">
        <Heading3>{hasMoreLinks || hasGithub ? TEXT.links : TEXT.link}</Heading3>
        <div className="mt-4">
          <ProjectLinksList projectLinks={projectLinks} linkGitHub={linkGitHub} />
        </div>
      </div>
    </>
  )
}

export default ProjectInformation
