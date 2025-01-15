import { FC } from 'react'

import Heading3 from '@/components/shared/Heading3'
import List from '@/components/shared/List'
import ListItem from '@/components/shared/ListItem'

import { skillsForCompanyItems } from '@/lib/data/pages/home/expertise/skillsForCompany'

import { TEXT } from '@/localization/english'

const SkillsForCompany: FC = (): JSX.Element => {
  return (
    <div>
      <Heading3>{TEXT.skillsForCompany}</Heading3>
      <div className="mt-4">
        <List>
          {skillsForCompanyItems.map((item) => {
            return <ListItem key={item.id}>{item.text}</ListItem>
          })}
        </List>
      </div>
    </div>
  )
}

export default SkillsForCompany
