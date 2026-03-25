import { ParagraphProps } from '@/components/shared/Paragraph.types'

import { getAttributes } from '@/lib/utils/helpers/getAttributes'

const Paragraph = ({
  marginTop = 'mt-4',
  dataTestId = '',
  textColor = 'text-neutral-600',
  size = 'text-lg',
  customCss = '',
  children,
}: ParagraphProps) => {
  const attributes = getAttributes({ dataTestId })

  return (
    <p {...attributes} className={`break-words ${marginTop} ${size} ${textColor} ${customCss}`}>
      {children}
    </p>
  )
}

export default Paragraph
