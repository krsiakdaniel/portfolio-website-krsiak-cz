import { FC } from 'react'

import { getDataTestIdAttribute } from '@/lib/utils/helpers/getDataTestIdAttribute'

import { Heading1Props } from '@/lib/utils/typeDefinitions/props/shared/headings'

const Heading1: FC<Heading1Props> = ({
  children,
  dataTestId = '',
  textColor = 'text-violet-600',
  textSize = '5xl',
  textSizeSM = '6xl',
  textSizeMD = '7xl',
  customCss = '',
}): JSX.Element => {
  return (
    <h1
      className={`break-words font-bold tracking-tight ${textColor} text-${textSize} sm:text-${textSizeSM} md:text-${textSizeMD} ${customCss}`}
      {...getDataTestIdAttribute(dataTestId)}
    >
      {children}
    </h1>
  )
}

export default Heading1
