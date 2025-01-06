import { FC } from 'react'

import List from '@/components/shared/List'
import ListItem from '@/components/shared/ListItem'

type CustomersCountProps = {
  count: string
}

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