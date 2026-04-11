import { CircleCheck } from 'lucide-react'

import { type ListItemProps } from './ListItem.types'

const ListItem = ({ children, showIcon = true }: ListItemProps) => {
  return (
    <li className="flex-start flex">
      {showIcon && (
        <span className="mt-1 flex">
          <CircleCheck
            className="text-violet-600 mr-2 h-4 w-4"
            aria-hidden="true"
            fill="currentColor"
            stroke="white"
            strokeWidth={2}
          />
        </span>
      )}
      {children}
    </li>
  )
}

export default ListItem
