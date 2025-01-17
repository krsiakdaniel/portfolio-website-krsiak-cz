import { FC } from 'react'

import { ListProps } from '@/lib/utils/typeDefinitions/props/props'

const List: FC<ListProps> = ({ children }): JSX.Element => {
  return <ul className="ml-2 list-inside space-y-2 text-neutral-600">{children}</ul>
}

export default List
