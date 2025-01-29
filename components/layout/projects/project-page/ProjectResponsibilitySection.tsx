import { FC } from 'react'

import Heading3 from '@/components/shared/Heading3'
import Highlight from '@/components/shared/Highlight'
import List from '@/components/shared/List'
import ListItem from '@/components/shared/ListItem'

import { ProjectResponsibilitySectionProps } from '@/lib/utils/typeDefinitions/props/layout/projects/project-page'

const ProjectResponsibilitySection: FC<ProjectResponsibilitySectionProps> = ({
  title,
  titleHighlight,
  items = [],
}): JSX.Element => {
  return (
    <div className="mt-8">
      <Heading3>
        {title} {titleHighlight && <Highlight text={titleHighlight} />}
      </Heading3>
      <div className="mt-4">
        <List>
          {items.map((item) => (
            <ListItem key={item.id}>{item.text}</ListItem>
          ))}
        </List>
      </div>
    </div>
  )
}

export default ProjectResponsibilitySection
