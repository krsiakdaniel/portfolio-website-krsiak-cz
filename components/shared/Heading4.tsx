import { FC } from 'react'

import { getAttributes } from '@/lib/utils/helpers/getAttributes'

import { HeadingProps } from '@/lib/utils/typeDefinitions/props/shared/headings'

const Heading4: FC<HeadingProps> = ({
  id = '',
  dataTestId = '',
  textColor = 'text-neutral-900',
  textSize = '2xl',
  customCss = '',
  children,
}): JSX.Element => {
  const attributes = getAttributes({ id, dataTestId })

  return (
    <h4
      {...attributes}
      className={`font-bold break-words ${textColor} text-${textSize} ${customCss}`}
    >
      {children}
    </h4>
  )
}

export default Heading4
