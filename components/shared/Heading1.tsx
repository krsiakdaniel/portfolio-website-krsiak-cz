import { FC } from 'react'

import { getAttributes } from '@/lib/utils/helpers/getAttributes'

import { HeadingProps } from '@/lib/utils/typeDefinitions/props/shared/headings'

// Import typography design tokens
import { TYPOGRAPHY_CLASSES, RESPONSIVE_TYPOGRAPHY } from '@/lib/design-tokens/typography'

const Heading1: FC<HeadingProps> = ({
  id = '',
  dataTestId = '',
  textColor = 'text-violet-600',
  customCss = '',
  children,
}): JSX.Element => {
  const attributes = getAttributes({ id, dataTestId })

  return (
    <h1
      {...attributes}
      className={`${TYPOGRAPHY_CLASSES.h1} break-words font-bold tracking-tight ${textColor} ${RESPONSIVE_TYPOGRAPHY.h1.base} ${RESPONSIVE_TYPOGRAPHY.h1.sm} ${RESPONSIVE_TYPOGRAPHY.h1.md} ${RESPONSIVE_TYPOGRAPHY.h1.lg} ${customCss}`}
    >
      {children}
    </h1>
  )
}

export default Heading1
