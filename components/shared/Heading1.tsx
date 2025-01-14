import { FC, ReactNode } from 'react'

import { getDataTestIdAttribute } from '@/lib/utils/helpers/getDataTestIdAttribute'

type Heading1Props = {
  children: ReactNode
  dataTestId?: string
  textColor?: string
  textSize?: string
  textSizeSM?: string
  textSizeLG?: string
  customCss?: string | null
}

const Heading1: FC<Heading1Props> = ({
  children,
  dataTestId = '',
  textColor = 'text-violet-600',
  textSize = '5xl',
  textSizeSM = '6xl',
  textSizeLG = '7xl',
  customCss = '',
}): JSX.Element => {
  return (
    <h1
      className={`font-bold tracking-tight ${textColor} text-${textSize} sm:text-${textSizeSM} lg:text-${textSizeLG} ${customCss}`}
      {...getDataTestIdAttribute(dataTestId)}
    >
      {children}
    </h1>
  )
}

export default Heading1
