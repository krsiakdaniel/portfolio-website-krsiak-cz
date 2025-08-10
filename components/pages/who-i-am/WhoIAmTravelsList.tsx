import List from '@/components/shared/List'
import ListItem from '@/components/shared/ListItem'

import { travelItems } from '@/lib/data/pages/who-i-am/travelItems'

const WhoIAmTravelsList = () => {
  return (
    <div className="mt-4">
      <List>
        {travelItems.map(({ id, flag, text }) => (
          <ListItem key={id} showIcon={false}>
            <span>{flag}</span>
            <span className="ml-2">{text}</span>
          </ListItem>
        ))}
      </List>
    </div>
  )
}

export default WhoIAmTravelsList
