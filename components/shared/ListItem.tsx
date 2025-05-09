import { FC } from 'react'

import IconCheck from '@/components/icons/IconCheck'

import { ListItemProps } from '@/lib/utils/typeDefinitions/props/shared/list'

const ListItem: FC<ListItemProps> = ({ children, showIcon = true }): JSX.Element => {
  return (
    <li className="flex-start flex">
      {showIcon && (
        <span className="mt-1 flex">
          <IconCheck />
        </span>
      )}
      {children}
    </li>
  )
}

export default ListItem
