type Heading2Props = {
  children: React.ReactNode
  textColor: string
}

const Heading2 = ({ children, textColor }: Heading2Props) => {
  return <h2 className={`mb-2 text-4xl font-bold tracking-tight ${textColor}`}>{children}</h2>
}

export default Heading2
