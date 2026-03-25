import { HeadingProps } from '@/components/shared/Heading.types'

import { getAttributes } from '@/lib/utils/helpers/getAttributes'

import { HEADING_DEFAULTS } from './Heading.constants'

const Heading = ({
  as = 'h1',
  size,
  sizeSM,
  sizeMD,
  id = '',
  dataTestId = '',
  textColor,
  customCss = '',
  children,
}: HeadingProps) => {
  const attributes = getAttributes({ id, dataTestId })
  const defaults = HEADING_DEFAULTS[as]

  const className = [
    defaults.className,
    textColor || defaults.textColor,
    `text-${size || defaults.size}`,
    (sizeSM || defaults.sizeSM) && `sm:text-${sizeSM || defaults.sizeSM}`,
    (sizeMD || defaults.sizeMD) && `md:text-${sizeMD || defaults.sizeMD}`,
    customCss,
  ]
    .filter(Boolean)
    .join(' ')

  const Component = as

  return (
    <Component {...attributes} className={className}>
      {children}
    </Component>
  )
}

export default Heading
