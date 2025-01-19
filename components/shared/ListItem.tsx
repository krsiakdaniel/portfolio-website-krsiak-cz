import { FC } from 'react'

import IconCheck from '@/components/icons/IconCheck'

import { ListItemProps } from '@/lib/utils/typeDefinitions/props/shared/list'

const ListItem: FC<ListItemProps> = ({ children }): JSX.Element => {
  return (
    <li className="flex-start flex items-start md:items-center">
      <span className="mt-1 flex md:mt-0">
        <IconCheck />
      </span>
      {children}
    </li>
  )
}

export default ListItem
