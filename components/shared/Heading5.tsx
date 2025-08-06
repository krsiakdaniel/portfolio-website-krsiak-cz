import { FC } from 'react'

import { getAttributes } from '@/lib/utils/helpers/getAttributes'

import { HeadingProps } from '@/lib/utils/typeDefinitions/props/shared/headings'

const Heading5: FC<HeadingProps> = ({
  id = '',
  dataTestId = '',
  textColor = 'text-neutral-900',
  textSize = 'lg',
  customCss = '',
  children,
}): JSX.Element => {
  const attributes = getAttributes({ id, dataTestId })

  return (
    <h5
      {...attributes}
      className={`font-bold break-words ${textColor} text-${textSize} ${customCss}`}
    >
      {children}
    </h5>
  )
}

export default Heading5
