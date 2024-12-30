import { ReactNode } from 'react'

type Heading5Props = {
  children: ReactNode
  dataTestId?: string
  textColor?: string
  customCss?: string
}

const Heading5 = ({ children, dataTestId = '', textColor = '', customCss = '' }: Heading5Props): JSX.Element => {
  return (
    <h5 {...(dataTestId && { 'data-testid': dataTestId })} className={`font-bold ${textColor} ${customCss}`}>
      {children}
    </h5>
  )
}

export default Heading5
