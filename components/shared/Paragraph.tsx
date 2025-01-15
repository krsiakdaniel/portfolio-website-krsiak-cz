import { FC, ReactNode } from 'react'

import { getDataTestIdAttribute } from '@/lib/utils/helpers/getDataTestIdAttribute'

type ParagraphProps = {
  marginTop?: 'mt-0' | 'mt-2' | 'mt-4' | 'mt-8' | 'mt-16'
  size?: 'text-sm' | 'text-md' | 'text-lg' | 'text-xl' | 'text-2xl'
  textColor?: 'text-neutral-500' | 'text-neutral-600' | 'text-neutral-700' | 'text-neutral-900'
  customCss?: string
  dataTestId?: string
  children: ReactNode
}

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