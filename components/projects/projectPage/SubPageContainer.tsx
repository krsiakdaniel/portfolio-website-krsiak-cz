type Props = {
  id: string
  children: React.ReactNode
}

const ContainerSubPage = ({ id, children }: Props) => (
  <div id={id}>
    <div className="container mx-auto my-20">{children}</div>
  </div>
)

export default ContainerSubPage
