import List from '@/components/shared/List'
import ListItem from '@/components/shared/ListItem'
import { Section } from '@/utils/interfaces/interfaces'

type PageSectionProps = Section

const PageSection = ({ title, titleHighlight, items }: PageSectionProps) => {
  return (
    <div className="mt-8">
      <h3 className="mb-4 text-3xl font-bold">
        {title} {titleHighlight && <span className="text-violet-600">{titleHighlight}</span>}
      </h3>
      <List>
        {items.map((item) => (
          <ListItem key={item.id}>{item.text}</ListItem>
        ))}
      </List>
    </div>
  )
}

export default PageSection
