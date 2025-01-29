import { FC } from 'react'

import ExternalLink from '@/components/shared/ExternalLink'
import ListItem from '@/components/shared/ListItem'

import { TEXT } from '@/localization/english'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'
import { GitHubRepositoryLinkProps } from '@/lib/utils/typeDefinitions/props/layout/projects/project-page'

const GitHubRepositoryLink: FC<GitHubRepositoryLinkProps> = ({ href, text }): JSX.Element => {
  return (
    <ListItem>
      <ExternalLink
        href={href}
        text={text}
        title={TEXT.opensInNewTab}
        dataTestId={DATA_TEST_IDS.externalLinks.projectLinkGitHub}
      />
    </ListItem>
  )
}

export default GitHubRepositoryLink
