import { FC } from 'react'

import Heading2 from '@/components/shared/Heading2'
import List from '@/components/shared/List'
import ListItem from '@/components/shared/ListItem'

import { SkillsInfo } from '@/lib/utils/interfaces/interfaces'

interface ExpertiseSectionProps {
  heading: string
  listItems: SkillsInfo[]
}

const ExpertiseSection: FC<ExpertiseSectionProps> = ({ heading, listItems }): JSX.Element => {
  return (
    <div>
      <Heading2>{heading}</Heading2>
      <div className="mt-4">
        <List>
          {listItems.map((item) => (
            <ListItem key={item.id}>{item.text}</ListItem>
          ))}
        </List>
      </div>
    </div>
  )
}

export default ExpertiseSection
