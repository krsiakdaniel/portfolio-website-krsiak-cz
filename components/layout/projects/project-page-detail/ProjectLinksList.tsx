import { FC } from 'react'

import GitHubRepositoryLink from '@/components/layout/projects/project-page-detail/GitHubRepositoryLink'
import List from '@/components/shared/List'
import ListItem from '@/components/shared/ListItem'

import { Link } from '@/lib/utils/interfaces/interfaces'

type ProjectLinksListProps = {
  projectLinks: Link[]
  linkGitHub?: string
}

const ProjectLinksList: FC<ProjectLinksListProps> = ({ projectLinks, linkGitHub }): JSX.Element => {
  return (
    <List>
      {projectLinks &&
        projectLinks.map((link) => (
          <div key={link.url}>
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

      {linkGitHub && <GitHubRepositoryLink link={linkGitHub} />}
    </List>
  )
}

export default ProjectLinksList
