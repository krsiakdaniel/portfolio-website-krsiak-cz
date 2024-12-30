import { FC, ReactNode } from 'react'

type Heading5Props = {
  children: ReactNode
  dataTestId?: string
  textColor?: string
  customCss?: string
}

const Heading5: FC<Heading5Props> = ({ children, dataTestId = '', textColor = '', customCss = '' }): JSX.Element => {
  return (
    <h5 {...(dataTestId && { 'data-testid': dataTestId })} className={`font-bold ${textColor} ${customCss}`}>
      {children}
    </h5>
  )
}

export default Heading5
