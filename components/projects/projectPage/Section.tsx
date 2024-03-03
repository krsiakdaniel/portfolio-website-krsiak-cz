import List from '@/components/shared/List'
import ListItem from '@/components/shared/ListItem'
import { SectionItem } from '@/utils/types'

const Section = ({ title, titleHighlight, items }: SectionItem) => (
  <div className="mt-8">
    <h3 className="text-3xl font-bold dark:text-white mb-4">
      {title} {titleHighlight && <span className="text-violet-600">{titleHighlight}</span>}
    </h3>
    <List>
      {items.map((item, index) => (
        <ListItem key={index}>{item}</ListItem>
      ))}
    </List>
  </div>
)

export default Section
