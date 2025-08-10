import { getAttributes } from '@/lib/utils/helpers/getAttributes'

import { HeadingProps } from '@/lib/utils/typeDefinitions/props/shared/headings'

const Heading2 = ({
  id = '',
  dataTestId = '',
  textColor = 'text-violet-600',
  textSize = '4xl',
  customCss = '',
  children,
}: HeadingProps) => {
  const attributes = getAttributes({ id, dataTestId })

  return (
    <h2
      {...attributes}
      className={`font-bold tracking-tight break-words ${textColor} text-${textSize} ${customCss}`}
    >
      {children}
    </h2>
  )
}

export default Heading2
