import List from '@/components/shared/List'
import ListItem from '@/components/shared/ListItem'

type CustomersCountProps = {
  count: string
}

const CustomersCount = ({ count }: CustomersCountProps): JSX.Element => {
  return (
    <List>
      <ListItem>
        <span className="mr-1 font-bold text-neutral-500">{count}</span> customers.
      </ListItem>
    </List>
  )
}

export default CustomersCount
