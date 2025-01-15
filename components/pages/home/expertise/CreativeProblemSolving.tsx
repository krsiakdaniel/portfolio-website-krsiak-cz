import { FC } from 'react'

import Heading3 from '@/components/shared/Heading3'
import List from '@/components/shared/List'
import ListItem from '@/components/shared/ListItem'

import { problemSolving } from '@/lib/data/pages/home/expertise/problemSolving'

import { TEXT } from '@/localization/english'

const CreativeProblemSolving: FC = (): JSX.Element => {
  return (
    <div>
      <Heading3>{TEXT.problemSolving}</Heading3>
      <div className="mt-4">
        <List>
          {problemSolving.map((item) => {
            return <ListItem key={item.id}>{item.text}</ListItem>
          })}
        </List>
      </div>
    </div>
  )
}

export default CreativeProblemSolving
