type Props = {
  children: React.ReactNode
}

const List = ({ children }: Props) => {
  return (
    <>
      <ul className="space-y-1 text-gray-500 list-inside dark:text-gray-400 ml-2">{children}</ul>
    </>
  )
}

export default List
