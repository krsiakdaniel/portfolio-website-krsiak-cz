import { FC } from 'react'

import List from '@/components/shared/List'
import ListItem from '@/components/shared/ListItem'

import { CustomersCountProps } from '@/lib/utils/typeDefinitions/componentProps'

const CustomersCount: FC<CustomersCountProps> = ({ count }): JSX.Element => {
  return (
    <List>
      <ListItem>
        <span className="font-semibold text-neutral-500">{count} customers.</span>
      </ListItem>
    </List>
  )
}

export default CustomersCount
