import GitHubRepositoryLink from '@/components/layout/projects/project-page/GitHubRepositoryLink'
import ExternalLink from '@/components/shared/external-link/ExternalLink'
import List from '@/components/shared/list/List'
import ListItem from '@/components/shared/list/ListItem'

import { SHARED, TEXT } from '@/localization'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'

import { type ProjectLinksListProps } from './ProjectLinksList.types'

const ProjectLinksList = ({ projectLinks = [], linkGitHub }: ProjectLinksListProps) => {
  return (
    <List>
      {projectLinks.map((link) => (
        <ListItem key={link.url}>
          <ExternalLink
            href={link.url}
            text={link.urlText}
            title={TEXT.opensInNewTab}
            dataTestId={`${DATA_TEST_IDS.externalLinks.projectLinkWebsite}-${link.dataTestId}`}
          />
        </ListItem>
      ))}

      {linkGitHub && <GitHubRepositoryLink href={linkGitHub} text={SHARED.githubRepository} />}
    </List>
  )
}

export default ProjectLinksList
