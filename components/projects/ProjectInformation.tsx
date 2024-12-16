import List from '@/components/shared/List'
import ListItem from '@/components/shared/ListItem'
import { ProjectInformationProps } from '@/utils/sharedComponentProps'
import CustomersCount from './CustomersCount'
import ProjectLinksList from './ProjectLinksList'
import SkillsList from './SkillsList'

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
