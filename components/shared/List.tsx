type Props = {
  children: React.ReactNode
}

const List = ({ children }: Props) => {
  return (
    <>
      <ul className="space-y-2 text-neutral-600 list-inside dark:text-neutral-600 ml-2">{children}</ul>
    </>
  )
}

export default List
