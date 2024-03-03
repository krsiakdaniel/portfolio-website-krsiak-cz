type Props = {
  children: React.ReactNode
}

const List = ({ children }: Props) => {
  return (
    <>
      <ul className="ml-2 list-inside space-y-2 text-neutral-600 dark:text-neutral-600">{children}</ul>
    </>
  )
}

export default List
