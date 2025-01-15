import { FC } from 'react'

import Heading3 from '@/components/shared/Heading3'
import List from '@/components/shared/List'
import ListItem from '@/components/shared/ListItem'

import { committedMindset } from '@/lib/data/pages/home/expertise/committedMindset'

import { TEXT } from '@/localization/english'

const CommittedMindset: FC = (): JSX.Element => {
  return (
    <div>
      <Heading3>{TEXT.committedMindset}</Heading3>
      <div className="mt-4">
        <List>
          {committedMindset.map((item) => {
            return <ListItem key={item.id}>{item.text}</ListItem>
          })}
        </List>
      </div>
    </div>
  )
}

export default CommittedMindset
