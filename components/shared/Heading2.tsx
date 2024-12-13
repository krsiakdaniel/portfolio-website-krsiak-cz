type Heading2Props = {
  children: React.ReactNode
  textColor?: string
  customCss?: string
}

const Heading2 = ({ children, textColor = 'text-violet-600', customCss = '' }: Heading2Props) => {
  return <h2 className={`mb-2 text-4xl font-bold tracking-tight ${textColor} ${customCss}`}>{children}</h2>
}

export default Heading2
