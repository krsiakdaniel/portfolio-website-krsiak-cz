import { FC } from 'react'

import { getDataTestIdAttribute } from '@/lib/utils/helpers/getDataTestIdAttribute'

import { Heading4Props } from '@/lib/utils/typeDefinitions/props/props'

const Heading4: FC<Heading4Props> = ({ children, dataTestId = '', textColor = '', customCss = '' }): JSX.Element => {
  return (
    <h4 className={`mt-8 text-xl font-bold ${textColor} ${customCss}`} {...getDataTestIdAttribute(dataTestId)}>
      {children}
    </h4>
  )
}

export default Heading4
