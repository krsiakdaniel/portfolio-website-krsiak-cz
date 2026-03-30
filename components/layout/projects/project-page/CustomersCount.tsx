import List from '@/components/shared/List'
import ListItem from '@/components/shared/ListItem'

import { SHARED } from '@/localization'

import { CustomersCountProps } from './CustomersCount.types'

const CustomersCount = ({ count }: CustomersCountProps) => {
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
