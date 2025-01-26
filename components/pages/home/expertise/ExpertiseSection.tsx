import { FC } from 'react'

import Heading3 from '@/components/shared/Heading3'
import List from '@/components/shared/List'
import ListItem from '@/components/shared/ListItem'

import { ExpertiseSectionProps } from '@/lib/utils/typeDefinitions/props/pages/home/expertise'

const ExpertiseSection: FC<ExpertiseSectionProps> = ({ heading, listItems = [] }): JSX.Element => {
  return (
    <div className="min-w-[250px] flex-1">
      <Heading3 textColor="text-violet-600">{heading}</Heading3>
      <div className="mt-4">
        <List>
          {listItems.map((item) => (
            <ListItem key={item.id}>
              <span className="inline">
                {item.text}
                {item.years && <span className="hidden text-sm lg:ml-1 xl:inline">· {item.years}</span>}
              </span>
            </ListItem>
          ))}
        </List>
      </div>
    </div>
  )
}

export default ExpertiseSection
