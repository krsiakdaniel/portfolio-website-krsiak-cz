import { FC } from 'react'

import CustomersCount from '@/components/layout/projects/project-page/CustomersCount'
import ProjectLinksList from '@/components/layout/projects/project-page/ProjectLinksList'
import SkillsList from '@/components/layout/projects/project-page/SkillsList'
import Heading3 from '@/components/shared/Heading3'
import List from '@/components/shared/List'
import ListItem from '@/components/shared/ListItem'

import { TEXT } from '@/localization/english'

import { ProjectInformationProps } from '@/lib/utils/typeDefinitions/props'

const ProjectInformation: FC<ProjectInformationProps> = ({
  description,
  skillsOverview,
  customers,
  projectLinks,
  linkGitHub,
}): JSX.Element => {
  const hasMoreLinks = projectLinks.length > 1
  const hasGithub = linkGitHub ? true : false

  return (
    <>
      <div className="mt-16">
        <Heading3>{TEXT.information}</Heading3>
        <div className="mt-4">
          {customers && <CustomersCount count={customers} />}
          <List>
            <ListItem>{description}</ListItem>
          </List>
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
