import { FC } from 'react'

import { getAttributes } from '@/lib/utils/helpers/getAttributes'

import { ParagraphProps } from '@/lib/utils/typeDefinitions/props/shared/paragraph'

const Paragraph: FC<ParagraphProps> = ({
  marginTop = 'mt-4',
  dataTestId = '',
  textColor = 'text-neutral-600',
  size = 'text-lg',
  customCss = '',
  children,
}) => {
  const attributes = getAttributes({ dataTestId })

  return (
    <p {...attributes} className={`break-words ${marginTop} ${size} ${textColor} ${customCss}`}>
      {children}
    </p>
  )
}

export default Paragraph
