import { FC } from 'react'

import List from '@/components/shared/List'
import ListItem from '@/components/shared/ListItem'

import { CustomersCountProps } from '@/lib/utils/typeDefinitions/props/layout/projects/project-page'
import { SHARED } from '@/localization/english'

const CustomersCount: FC<CustomersCountProps> = ({ count }): JSX.Element => {
  return (
    <List>
      <ListItem>
        <span className="font-bold text-neutral-600">
          {count} {SHARED.customers}
        </span>
      </ListItem>
    </List>
  )
}

export default CustomersCount
