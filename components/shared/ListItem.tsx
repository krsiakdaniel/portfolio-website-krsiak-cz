import IconCheck from '@/components/icons/IconCheck'
import { ListItemProps } from '@/components/shared/List.types'

const ListItem = ({ children, showIcon = true }: ListItemProps) => {
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
