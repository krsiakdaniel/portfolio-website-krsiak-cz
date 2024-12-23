import { IconCheck } from '@/components/icons/IconCheck'

type ListItemProps = {
  children: React.ReactNode
}

const ListItem = ({ children }: ListItemProps) => {
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
