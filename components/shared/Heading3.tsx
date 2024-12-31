import { FC, ReactNode } from 'react'

type Heading3Props = {
  children: ReactNode
  dataTestId?: string
  textColor?: string
  customCss?: string
}

const Heading3: FC<Heading3Props> = ({ children, dataTestId = '', textColor = '', customCss = '' }): JSX.Element => {
  return (
    <h3 {...(dataTestId && { 'data-testid': dataTestId })} className={`text-3xl font-bold ${textColor} ${customCss}`}>
      {children}
    </h3>
  )
}

export default Heading3
