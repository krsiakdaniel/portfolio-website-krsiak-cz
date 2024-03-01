import List from '@/components/shared/List'
import ListItem from '@/components/shared/ListItem'
import { ProjectInformationProps } from '@/utils/types'

type Props = ProjectInformationProps

const ProjectInformation = ({ description, mySkills, customers, projectLinks, linkGitHub }: Props) => {
  const hasMoreLinks = projectLinks.length > 1
  const hasGithub = linkGitHub ? true : false

  return (
    <>
      <div className="flex flex-col mt-8">
        <p className="mb-3 text-gray-500 dark:text-gray-400 max-w-screen-lg">{description}</p>
      </div>

      <div className="mt-8">
        <h3 className="text-3xl font-bold dark:text-white mb-4">Information</h3>
        <List>
          <ListItem>
            <div className="flex items-center">
              <span className="hidden md:inline mr-2">My skills: </span>
              {/* FIXME: create separate lists for skills by category + map them in different color = create BADGE shared cmp */}
              <div className="flex flex-col md:flex-row">
                {mySkills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-purple-100 text-purple-800 text-xs font-medium mr-0 sm:mr-2 mb-2 last:mb-0 last:mr-0 text-center sm:mb-0 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-purple-400 border border-purple-400"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </ListItem>
          {customers && (
            <ListItem>
              Company customers: <span className="text-neutral-500 ml-2 font-bold">{customers}</span>
            </ListItem>
          )}
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
