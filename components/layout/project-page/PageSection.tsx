import { FC } from 'react'

import Heading3 from '@/components/shared/Heading3'
import List from '@/components/shared/List'
import ListItem from '@/components/shared/ListItem'

import { Section } from '@/lib/utils/interfaces/interfaces'

type PageSectionProps = Section

const PageSection: FC<PageSectionProps> = ({ title, titleHighlight, items }): JSX.Element => {
  return (
    <div className="mt-8">
      <Heading3>
        {title} {titleHighlight && <span className="text-violet-600">{titleHighlight}</span>}
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

export default PageSection
