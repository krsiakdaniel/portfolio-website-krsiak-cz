import { ListProps } from '@/lib/utils/typeDefinitions/props/shared/list'

const List = ({ children }: ListProps) => {
  return <ul className="ml-2 list-inside space-y-1 text-neutral-600">{children}</ul>
}

export default List
