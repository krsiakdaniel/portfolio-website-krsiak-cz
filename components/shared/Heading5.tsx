import { FC } from 'react'

import { getAttributes } from '@/lib/utils/helpers/getAttributes'

import { HeadingProps } from '@/lib/utils/typeDefinitions/props/shared/headings'

// Import typography design tokens
import { TYPOGRAPHY_CLASSES } from '@/lib/design-tokens/typography'

const Heading5: FC<HeadingProps> = ({
  id = '',
  dataTestId = '',
  textColor = 'text-neutral-900',
  customCss = '',
  children,
}): JSX.Element => {
  const attributes = getAttributes({ id, dataTestId })

  return (
    <h5
      {...attributes}
      className={`${TYPOGRAPHY_CLASSES.h5} break-words font-bold ${textColor} ${customCss}`}
    >
      {children}
    </h5>
  )
}

export default Heading5
