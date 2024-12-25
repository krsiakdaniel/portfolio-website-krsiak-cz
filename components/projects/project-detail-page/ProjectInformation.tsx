import CustomersCount from '@/components/projects/CustomersCount'
import ProjectLinksList from '@/components/projects/project-detail-page/ProjectLinksList'
import SkillsList from '@/components/projects/project-detail-page/SkillsList'
import List from '@/components/shared/List'
import ListItem from '@/components/shared/ListItem'

import { Project } from '@/utils/interfaces/interfaces'

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
}: ProjectInformationProps) => {
  const hasMoreLinks = projectLinks.length > 1
  const hasGithub = linkGitHub ? true : false

  return (
    <>
      <div className="mt-8">
        <h3 className="mb-4 text-3xl font-bold">Information</h3>
        {customers && <CustomersCount count={customers} />}
        <List>
          <ListItem>{description}</ListItem>
        </List>
      </div>

      <div className="mt-8">
        <h3 className="mb-4 text-3xl font-bold">Skills</h3>
        <SkillsList skillsOverview={skillsOverview} />
      </div>

      <div className="mt-8">
        <h3 className="mb-4 text-3xl font-bold">{hasMoreLinks || hasGithub ? 'Links' : 'Link'}</h3>
        <ProjectLinksList projectLinks={projectLinks} linkGitHub={linkGitHub} />
      </div>
    </>
  )
}

export default ProjectInformation
