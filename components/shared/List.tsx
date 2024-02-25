type Props = {
  children: React.ReactNode
}

const List = ({ children }: Props) => {
  return (
    <>
      <ul role="list" className="space-y-2">
        {children}
      </ul>
    </>
  )
}

export default List
