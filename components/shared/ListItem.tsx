import { IconCheck } from '@/components/icons'

type Props = {
  children: React.ReactNode
}

const ListItem = ({ children }: Props) => {
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
