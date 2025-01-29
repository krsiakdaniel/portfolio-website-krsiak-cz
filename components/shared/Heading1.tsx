import { FC } from 'react'

import { getAttributes } from '@/lib/utils/helpers/getAttributes'

import { HeadingProps } from '@/lib/utils/typeDefinitions/props/shared/headings'

const Heading1: FC<HeadingProps> = ({
  id = '',
  dataTestId = '',
  textColor = 'text-violet-600',
  textSize = '5xl',
  textSizeSM = '6xl',
  textSizeMD = '7xl',
  customCss = '',
  children,
}): JSX.Element => {
  const attributes = getAttributes({ id, dataTestId })

  return (
    <h1
      {...attributes}
      className={`break-words font-bold tracking-tight ${textColor} text-${textSize} sm:text-${textSizeSM} md:text-${textSizeMD} ${customCss}`}
    >
      {children}
    </h1>
  )
}

export default Heading1
