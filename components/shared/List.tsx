import { FC, ReactNode } from 'react'

type ListProps = {
  children: ReactNode
}

const List: FC<ListProps> = ({ children }): JSX.Element => {
  return (
    <>
      <ul className="ml-2 list-inside space-y-2 text-neutral-600">{children}</ul>
    </>
  )
}

export default List
