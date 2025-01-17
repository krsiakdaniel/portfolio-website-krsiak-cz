import { FC } from 'react'

import { getDataTestIdAttribute } from '@/lib/utils/helpers/getDataTestIdAttribute'

import { Heading3Props } from '@/lib/utils/typeDefinitions/props/shared/headings'

const Heading3: FC<Heading3Props> = ({ children, dataTestId = '', textColor = '', customCss = '' }): JSX.Element => {
  return (
    <h3 className={`text-3xl font-bold ${textColor} ${customCss}`} {...getDataTestIdAttribute(dataTestId)}>
      {children}
    </h3>
  )
}

export default Heading3
