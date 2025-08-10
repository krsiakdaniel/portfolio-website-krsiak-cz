import { getAttributes } from '@/lib/utils/helpers/getAttributes'

import { HeadingProps } from '@/lib/utils/typeDefinitions/props/shared/headings'

const Heading1 = ({
  id = '',
  dataTestId = '',
  textColor = 'text-violet-600',
  textSize = '5xl',
  textSizeSM = '6xl',
  textSizeMD = '7xl',
  customCss = '',
  children,
}: HeadingProps) => {
  const attributes = getAttributes({ id, dataTestId })

  return (
    <h1
      {...attributes}
      className={`font-bold tracking-tight break-words ${textColor} text-${textSize} sm:text-${textSizeSM} md:text-${textSizeMD} ${customCss}`}
    >
      {children}
    </h1>
  )
}

export default Heading1
