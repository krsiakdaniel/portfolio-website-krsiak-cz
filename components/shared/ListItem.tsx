import { ReactNode } from 'react'

import { IconCheck } from '@/components/icons/IconCheck'

type ListItemProps = {
  children: ReactNode
}

const ListItem = ({ children }: ListItemProps): JSX.Element => {
  return (
    <>
      <li className="flex-start flex">
        <span className="flex">
          <IconCheck />
        </span>
        {children}
      </li>
    </>
  )
}

export default ListItem
