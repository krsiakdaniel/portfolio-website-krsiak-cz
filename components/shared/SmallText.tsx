import { FC } from 'react'

import { getAttributes } from '@/lib/utils/helpers/getAttributes'

import { ParagraphProps } from '@/lib/utils/typeDefinitions/props/shared/paragraph'

// Import typography design tokens
import { TYPOGRAPHY_CLASSES } from '@/lib/design-tokens/typography'

const SmallText: FC<ParagraphProps> = ({
  marginTop = 'mt-2',
  dataTestId = '',
  textColor = 'text-neutral-600',
  customCss = '',
  children,
}): JSX.Element => {
  const attributes = getAttributes({ dataTestId })

  return (
    <p
      {...attributes}
      className={`${TYPOGRAPHY_CLASSES.small} ${marginTop} ${textColor} ${customCss}`}
    >
      {children}
    </p>
  )
}

export default SmallText
