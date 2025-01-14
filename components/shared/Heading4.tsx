import { FC, ReactNode } from 'react'

import { getDataTestIdAttribute } from '@/lib/utils/helpers/getDataTestIdAttribute'

type Heading4Props = {
  children: ReactNode
  dataTestId?: string
  textColor?: string
  customCss?: string
}

const Heading4: FC<Heading4Props> = ({ children, dataTestId = '', textColor = '', customCss = '' }): JSX.Element => {
  return (
    <h4 className={`mt-8 text-xl font-bold ${textColor} ${customCss}`} {...getDataTestIdAttribute(dataTestId)}>
      {children}
    </h4>
  )
}

export default Heading4
