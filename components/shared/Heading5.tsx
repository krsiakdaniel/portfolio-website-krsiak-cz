import { FC } from 'react'

import { getDataTestIdAttribute } from '@/lib/utils/helpers/getDataTestIdAttribute'

import { Heading5Props } from '@/lib/utils/typeDefinitions/props/shared/headings'

const Heading5: FC<Heading5Props> = ({ children, dataTestId = '', textColor = '', customCss = '' }): JSX.Element => {
  return (
    <h5 className={`font-bold ${textColor} ${customCss}`} {...getDataTestIdAttribute(dataTestId)}>
      {children}
    </h5>
  )
}

export default Heading5
