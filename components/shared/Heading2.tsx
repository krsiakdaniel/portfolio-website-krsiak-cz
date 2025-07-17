import { FC } from 'react'

import { getAttributes } from '@/lib/utils/helpers/getAttributes'

import { HeadingProps } from '@/lib/utils/typeDefinitions/props/shared/headings'

// Import typography design tokens
import { TYPOGRAPHY_CLASSES, RESPONSIVE_TYPOGRAPHY } from '@/lib/design-tokens/typography'

const Heading2: FC<HeadingProps> = ({
  id = '',
  dataTestId = '',
  textColor = 'text-violet-600',
  customCss = '',
  children,
}): JSX.Element => {
  const attributes = getAttributes({ id, dataTestId })

  return (
    <h2
      {...attributes}
      className={`${TYPOGRAPHY_CLASSES.h2} break-words font-bold tracking-tight ${textColor} ${RESPONSIVE_TYPOGRAPHY.h2.base} ${RESPONSIVE_TYPOGRAPHY.h2.sm} ${RESPONSIVE_TYPOGRAPHY.h2.md} ${customCss}`}
    >
      {children}
    </h2>
  )
}

export default Heading2
