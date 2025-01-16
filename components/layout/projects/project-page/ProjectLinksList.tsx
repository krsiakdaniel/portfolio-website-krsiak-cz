import { FC } from 'react'

import GitHubRepositoryLink from '@/components/layout/projects/project-page/GitHubRepositoryLink'
import List from '@/components/shared/List'
import ListItem from '@/components/shared/ListItem'

import { ProjectLinksListProps } from '@/lib/utils/typeDefinitions/props'

const ProjectLinksList: FC<ProjectLinksListProps> = ({ projectLinks, linkGitHub }): JSX.Element => {
  return (
    <List>
      {projectLinks &&
        projectLinks.map((link) => (
          <ListItem key={link.url}>
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
        ))}

      {linkGitHub && <GitHubRepositoryLink link={linkGitHub} />}
    </List>
  )
}

export default ProjectLinksList
