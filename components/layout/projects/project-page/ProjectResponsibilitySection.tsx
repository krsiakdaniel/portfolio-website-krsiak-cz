import { ProjectResponsibilitySectionProps } from '@/components/layout/projects/project-page/ProjectPage.types'
import Heading from '@/components/shared/Heading'
import Highlight from '@/components/shared/Highlight'
import List from '@/components/shared/List'
import ListItem from '@/components/shared/ListItem'

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
            <ListItem key={item.id}>{item.text}</ListItem>
          ))}
        </List>
      </div>
    </div>
  )
}

export default ProjectResponsibilitySection
