import { ReactNode } from 'react'

type Heading4Props = {
  children: ReactNode
  dataTestId?: string
  textColor?: string
  customCss?: string
}

const Heading4 = ({ children, dataTestId = '', textColor = '', customCss = '' }: Heading4Props): JSX.Element => {
  return (
    <h4
      {...(dataTestId && { 'data-testid': dataTestId })}
      className={`mt-8 text-xl font-bold ${textColor} ${customCss}`}
    >
      {children}
    </h4>
  )
}

export default Heading4
