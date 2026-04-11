import Heading from '@/components/shared/heading/Heading'
import Highlight from '@/components/shared/highlight/Highlight'
import List from '@/components/shared/list/List'
import ListItem from '@/components/shared/list/ListItem'

import { ProjectResponsibilitySectionProps } from './ProjectResponsibilitySection.types'

const ProjectResponsibilitySection = ({
  title,
  titleHighlight,
  items = [],
}: ProjectResponsibilitySectionProps) => {
  return (
    <div className="mt-8">
      <Heading as="h3">
        {title} {titleHighlight && <Highlight text={titleHighlight} />}
      </Heading>
      <div className="mt-4">
        <List>
          {items.map((item) => (
            <ListItem key={item.id}>
              {item.text}
              {item.flags?.map(({ emoji, ariaLabel }) => (
                <span key={emoji} role="img" aria-label={ariaLabel} className="ml-1">
                  {emoji}
                </span>
              ))}
            </ListItem>
          ))}
        </List>
      </div>
    </div>
  )
}

export default ProjectResponsibilitySection
