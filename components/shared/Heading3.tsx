import { FC } from 'react'

import { getAttributes } from '@/lib/utils/helpers/getAttributes'

import { HeadingProps } from '@/lib/utils/typeDefinitions/props/shared/headings'

const Heading3: FC<HeadingProps> = ({
  id = '',
  dataTestId = '',
  textColor = 'text-neutral-900',
  textSize = '3xl',
  customCss = '',
  children,
}): JSX.Element => {
  const attributes = getAttributes({ id, dataTestId })

  return (
    <h3
      {...attributes}
      className={`font-bold break-words ${textColor} text-${textSize} ${customCss}`}
    >
      {children}
    </h3>
  )
}

export default Heading3
