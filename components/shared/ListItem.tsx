import { FC, ReactNode } from 'react'

import { IconCheck } from '@/components/icons/IconCheck'

type ListItemProps = {
  children: ReactNode
}

const ListItem: FC<ListItemProps> = ({ children }): JSX.Element => {
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
