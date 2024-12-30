import CustomersCount from '@/components/projects/CustomersCount'
import ProjectLinksList from '@/components/projects/project-detail-page/ProjectLinksList'
import SkillsList from '@/components/projects/project-detail-page/SkillsList'
import List from '@/components/shared/List'
import ListItem from '@/components/shared/ListItem'

import Heading3 from '@/components/shared/Heading3'
import { Project } from '@/lib/utils/interfaces/interfaces'

type ProjectInformationProps = Pick<
  Project,
  'description' | 'skillsOverview' | 'customers' | 'projectLinks' | 'linkGitHub'
>

const ProjectInformation = ({
  description,
  skillsOverview,
  customers,
  projectLinks,
  linkGitHub,
}: ProjectInformationProps): JSX.Element => {
  const hasMoreLinks = projectLinks.length > 1
  const hasGithub = linkGitHub ? true : false

  return (
    <>
      <div className="mt-16">
        <Heading3>Information</Heading3>
        <div className="mt-4">
          {customers && <CustomersCount count={customers} />}
          <List>
            <ListItem>{description}</ListItem>
          </List>
        </div>
      </div>

      <div className="mt-8">
        <Heading3>Skills</Heading3>
        <div className="mt-4">
          <SkillsList skillsOverview={skillsOverview} />
        </div>
      </div>

      <div className="mt-8">
        <Heading3>{hasMoreLinks || hasGithub ? 'Links' : 'Link'}</Heading3>
        <div className="mt-4">
          <ProjectLinksList projectLinks={projectLinks} linkGitHub={linkGitHub} />
        </div>
      </div>
    </>
  )
}

export default ProjectInformation
