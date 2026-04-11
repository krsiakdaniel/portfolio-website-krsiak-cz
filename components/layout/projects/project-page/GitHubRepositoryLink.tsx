import ExternalLink from '@/components/shared/external-link/ExternalLink'
import ListItem from '@/components/shared/list/ListItem'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'

import { TEXT } from '@/localization'

import { type GitHubRepositoryLinkProps } from './GitHubRepositoryLink.types'

const GitHubRepositoryLink = ({ href, text }: GitHubRepositoryLinkProps) => {
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
