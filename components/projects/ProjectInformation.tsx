import List from '@/components/shared/List'
import ListItem from '@/components/shared/ListItem'
import { getSkillBadgeColor } from '@/utils/getSkillBadgeColor'
import { ProjectInformationProps } from '@/utils/types'

type Props = ProjectInformationProps

const ProjectInformation = ({ description, mySkills, customers, projectLinks, linkGitHub }: Props) => {
  const hasMoreLinks = projectLinks.length > 1
  const hasGithub = linkGitHub ? true : false

  return (
    <>
      <div className="mt-8">
        <h3 className="mb-4 text-3xl font-bold">Information</h3>
        {customers && (
          <List>
            <ListItem>
              <span className="mr-1 font-bold text-neutral-500">{customers}</span> customers.
            </ListItem>
          </List>
        )}
        <List>
          <ListItem>{description}</ListItem>
        </List>
      </div>

      <div className="mt-8">
        <h3 className="mb-4 text-3xl font-bold">Skills</h3>
        <List>
          {mySkills.map((category, index) => (
            <ListItem key={index}>
              <div className="flex flex-col md:flex-row">
                {category.skills.map((skill, index) => (
                  <span
                    key={index}
                    className={`bg-${getSkillBadgeColor(category.description)}-100 text-${getSkillBadgeColor(category.description)}-800 border border-${getSkillBadgeColor(category.description)}-400 mb-2 rounded px-2.5 py-0.5 text-center text-xs font-medium last:mr-0 md:mb-0 md:mr-2`}
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
        <h3 className="mb-4 text-3xl font-bold">{hasMoreLinks || hasGithub ? 'Links' : 'Link'}</h3>
        <List>
          {projectLinks &&
            projectLinks.map((link, index) => (
              <div key={index}>
                <ListItem>
                  <span className="leading-tight">
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-violet-600 underline hover:no-underline"
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
                  rel="noopener noreferrer"
                  className="font-medium text-violet-600 underline hover:no-underline"
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
