import { FC } from 'react'

import ExternalLink from '@/components/shared/ExternalLink'
import ListItem from '@/components/shared/ListItem'

import { GitHubRepositoryLinkProps } from '@/lib/utils/typeDefinitions/props/layout/projects/project-page'

const GitHubRepositoryLink: FC<GitHubRepositoryLinkProps> = ({ href, text }): JSX.Element => {
  return (
    <ListItem>
      <ExternalLink href={href} text={text} dataTestId="project-link-github" />
    </ListItem>
  )
}

export default GitHubRepositoryLink
