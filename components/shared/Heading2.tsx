import { FC } from 'react'

import { getAttributes } from '@/lib/utils/helpers/getAttributes'

import { HeadingProps } from '@/lib/utils/typeDefinitions/props/shared/headings'

const Heading2: FC<HeadingProps> = ({
  id = '',
  dataTestId = '',
  textColor = 'text-violet-600',
  textSize = '4xl',
  customCss = '',
  children,
}): JSX.Element => {
  const attributes = getAttributes({ id, dataTestId })

  return (
    <h2 {...attributes} className={`break-words font-bold tracking-tight ${textColor} text-${textSize} ${customCss}`}>
      {children}
    </h2>
  )
}

export default Heading2
