type ListProps = {
  children: React.ReactNode
}

const List = ({ children }: ListProps) => {
  return (
    <>
      <ul className="ml-2 list-inside space-y-2 text-neutral-600">{children}</ul>
    </>
  )
}

export default List
