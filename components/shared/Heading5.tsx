import { FC, ReactNode } from 'react'

import { getDataTestIdAttribute } from '@/lib/utils/helpers/getDataTestIdAttribute'

type Heading5Props = {
  children: ReactNode
  dataTestId?: string
  textColor?: string
  customCss?: string
}

const Heading5: FC<Heading5Props> = ({ children, dataTestId = '', textColor = '', customCss = '' }): JSX.Element => {
  return (
    <h5 className={`font-bold ${textColor} ${customCss}`} {...getDataTestIdAttribute(dataTestId)}>
      {children}
    </h5>
  )
}

export default Heading5
