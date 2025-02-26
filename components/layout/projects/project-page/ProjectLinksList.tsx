import { FC } from 'react'

import GitHubRepositoryLink from '@/components/layout/projects/project-page/GitHubRepositoryLink'
import ExternalLink from '@/components/shared/ExternalLink'
import List from '@/components/shared/List'
import ListItem from '@/components/shared/ListItem'

import { SHARED, TEXT } from '@/localization/english'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'
import { ProjectLinksListProps } from '@/lib/utils/typeDefinitions/props/layout/projects/project-page'

const ProjectLinksList: FC<ProjectLinksListProps> = ({
  projectLinks = [],
  linkGitHub,
}): JSX.Element => {
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
