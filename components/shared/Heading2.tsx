import { FC } from 'react'

import { getDataTestIdAttribute } from '@/lib/utils/helpers/getDataTestIdAttribute'

import { Heading2Props } from '@/lib/utils/typeDefinitions/props/props'

const Heading2: FC<Heading2Props> = ({
  children,
  dataTestId = '',
  textColor = 'text-violet-600',
  customCss = '',
}): JSX.Element => {
  return (
    <h2
      {...getDataTestIdAttribute(dataTestId)}
      className={`text-4xl font-bold tracking-tight ${textColor} ${customCss}`}
    >
      {children}
    </h2>
  )
}

export default Heading2
