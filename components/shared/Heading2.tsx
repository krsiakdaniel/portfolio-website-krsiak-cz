import { FC, ReactNode } from 'react'

type Heading2Props = {
  children: ReactNode
  dataTestId?: string
  textColor?: string
  customCss?: string
}

const Heading2: FC<Heading2Props> = ({
  children,
  dataTestId = '',
  textColor = 'text-violet-600',
  customCss = '',
}): JSX.Element => {
  return (
    <h2
      {...(dataTestId && { 'data-testid': dataTestId })}
      className={`text-4xl font-bold tracking-tight ${textColor} ${customCss}`}
    >
      {children}
    </h2>
  )
}

export default Heading2
