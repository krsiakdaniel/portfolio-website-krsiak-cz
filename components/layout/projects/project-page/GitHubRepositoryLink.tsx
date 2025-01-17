import { FC } from 'react'

import ListItem from '@/components/shared/ListItem'

import { GitHubRepositoryLinkProps } from '@/lib/utils/typeDefinitions/props/layout/projects/project-page'

const GitHubRepositoryLink: FC<GitHubRepositoryLinkProps> = ({ link }): JSX.Element => {
  return (
    <ListItem>
      <span className="leading-tight">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-violet-600 underline hover:no-underline"
        >
          GitHub repository →
        </a>
      </span>
    </ListItem>
  )
}

export default GitHubRepositoryLink
