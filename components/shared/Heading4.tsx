type Heading4Props = {
  children: React.ReactNode
  textColor?: string
  customCss?: string
}

const Heading4 = ({ children, textColor = '', customCss = '' }: Heading4Props) => {
  return <h4 className={`mb-4 mt-8 text-xl font-bold ${textColor} ${customCss}`}>{children}</h4>
}

export default Heading4
