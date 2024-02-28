import List from '@/components/shared/List'
import ListItem from '@/components/shared/ListItem'
import { SectionItem } from '@/utils/types'

const Section = ({ title, items }: SectionItem) => (
  <div className="mt-8">
    <h3 className="pb-2 font-bold">{title}</h3>
    <List>
      {items.map((item, index) => (
        <ListItem key={index}>{item}</ListItem>
      ))}
    </List>
  </div>
)

export default Section
