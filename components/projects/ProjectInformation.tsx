import List from '@/components/shared/List'
import ListItem from '@/components/shared/ListItem'
import { CategoryDescriptionType, ProjectInformationProps } from '@/utils/types'

type Props = ProjectInformationProps

const getSkillBadgeColor = (categoryDescription: CategoryDescriptionType): string => {
  switch (categoryDescription) {
    case 'Frontend':
      return 'purple'
    case 'Design':
      return 'green'
    case 'Other':
      return 'yellow'
    default:
      return 'neutral'
  }
}

const ProjectInformation = ({ description, mySkills, customers, projectLinks, linkGitHub }: Props) => {
  const hasMoreLinks = projectLinks.length > 1
  const hasGithub = linkGitHub ? true : false

  return (
    <>
      <div className="mt-8">
        <h3 className="text-3xl font-bold dark:text-white mb-4">Information</h3>
        {customers && (
          <List>
            <ListItem>
              Company customers: <span className="text-neutral-500 ml-2 font-bold">{customers}</span>
            </ListItem>
          </List>
        )}
        <List>
          <ListItem>{description}</ListItem>
        </List>
      </div>

      <div className="mt-8">
        <h3 className="text-3xl font-bold dark:text-white mb-4">Skills</h3>
        <List>
          {mySkills.map((category, index) => (
            <ListItem key={index}>
              <div className="flex flex-col md:flex-row">
                {category.skills.map((skill, index) => (
                  <span
                    key={index}
                    className={`bg-${getSkillBadgeColor(category.description)}-100 text-${getSkillBadgeColor(category.description)}-800 dark:text-${getSkillBadgeColor(category.description)}-400 border border-${getSkillBadgeColor(category.description)}-400 text-xs font-medium text-center mb-2 md:mb-0 md:mr-2 last:mr-0 px-2.5 py-0.5 rounded dark:bg-gray-700`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </ListItem>
          ))}
        </List>
      </div>

      <div className="mt-8">
        <h3 className="text-3xl font-bold dark:text-white mb-4">{hasMoreLinks || hasGithub ? 'Links' : 'Link'}</h3>
        <List>
          {projectLinks &&
            projectLinks.map((link, index) => (
              <div key={index}>
                <ListItem>
                  <span className="leading-tight">
                    <a
                      href={link.url}
                      target="_blank"
                      className="font-medium text-purple-500 dark:text-purple-500 underline hover:no-underline"
                    >
                      {link.urlText}
                    </a>
                  </span>
                </ListItem>
              </div>
            ))}

          {linkGitHub && (
            <ListItem>
              <span className="leading-tight">
                <a
                  href={linkGitHub}
                  target="_blank"
                  className="font-medium text-purple-500 dark:text-purple-500 underline hover:no-underline"
                >
                  GitHub repository →
                </a>
              </span>
            </ListItem>
          )}
        </List>
      </div>
    </>
  )
}

export default ProjectInformation
