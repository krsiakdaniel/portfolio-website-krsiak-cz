import { ReactNode } from 'react'

type Heading1Props = {
  children: ReactNode
  dataTestId?: string
  textColor?: string
  textSize?: string
  textSizeSM?: string
  textSizeLG?: string
  customCss?: string | null
}

const Heading1 = ({
  children,
  dataTestId = '',
  textColor = 'text-violet-600',
  textSize = '5xl',
  textSizeSM = '6xl',
  textSizeLG = '7xl',
  customCss = '',
}: Heading1Props) => {
  return (
    <h1
      {...(dataTestId && { 'data-testid': dataTestId })}
      className={`font-bold tracking-tight ${textColor} text-${textSize} sm:text-${textSizeSM} lg:text-${textSizeLG} ${customCss}`}
    >
      {children}
    </h1>
  )
}

export default Heading1
