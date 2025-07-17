import { FC } from 'react'

import { getAttributes } from '@/lib/utils/helpers/getAttributes'

import { HeadingProps } from '@/lib/utils/typeDefinitions/props/shared/headings'

// Import typography design tokens
import { TYPOGRAPHY_CLASSES } from '@/lib/design-tokens/typography'

const Heading4: FC<HeadingProps> = ({
  id = '',
  dataTestId = '',
  textColor = 'text-neutral-900',
  customCss = '',
  children,
}): JSX.Element => {
  const attributes = getAttributes({ id, dataTestId })

  return (
    <h4
      {...attributes}
      className={`${TYPOGRAPHY_CLASSES.h4} break-words font-bold ${textColor} ${customCss}`}
    >
      {children}
    </h4>
  )
}

export default Heading4
