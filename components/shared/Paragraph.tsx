import { FC } from 'react'

import { getDataTestIdAttribute } from '@/lib/utils/helpers/getDataTestIdAttribute'

import { ParagraphProps } from '@/lib/utils/interfaces/componentProps'

const Paragraph: FC<ParagraphProps> = ({
  marginTop = 'mt-4',
  size = 'text-lg',
  textColor = 'text-neutral-600',
  customCss = '',
  dataTestId = '',
  children,
}) => {
  return (
    <p className={`${marginTop} ${size} ${textColor} ${customCss}`} {...getDataTestIdAttribute(dataTestId)}>
      {children}
    </p>
  )
}

export default Paragraph
