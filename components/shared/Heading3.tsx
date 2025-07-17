import { FC } from 'react'

import { getAttributes } from '@/lib/utils/helpers/getAttributes'

import { HeadingProps } from '@/lib/utils/typeDefinitions/props/shared/headings'

// Import typography design tokens
import { TYPOGRAPHY_CLASSES, RESPONSIVE_TYPOGRAPHY } from '@/lib/design-tokens/typography'

const Heading3: FC<HeadingProps> = ({
  id = '',
  dataTestId = '',
  textColor = 'text-neutral-900',
  customCss = '',
  children,
}): JSX.Element => {
  const attributes = getAttributes({ id, dataTestId })

  return (
    <h3
      {...attributes}
      className={`${TYPOGRAPHY_CLASSES.h3} break-words font-bold ${textColor} ${RESPONSIVE_TYPOGRAPHY.h3.base} ${RESPONSIVE_TYPOGRAPHY.h3.sm} ${RESPONSIVE_TYPOGRAPHY.h3.md} ${customCss}`}
    >
      {children}
    </h3>
  )
}

export default Heading3
