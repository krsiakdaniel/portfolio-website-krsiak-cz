import { GitHubRepositoryLinkProps } from '@/components/layout/projects/project-page/ProjectPage.types'
import ExternalLink from '@/components/shared/ExternalLink'
import ListItem from '@/components/shared/ListItem'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'

import { TEXT } from '@/localization'

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
