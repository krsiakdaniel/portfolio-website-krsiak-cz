import { getAttributes } from '@/lib/utils/helpers/getAttributes'

import {
  HeadingDefaults,
  HeadingLevel,
  HeadingProps,
  HeadingSize,
} from '@/lib/utils/typeDefinitions/props/shared/headings'

const HEADING_DEFAULTS: Record<HeadingLevel, HeadingDefaults> = {
  h1: {
    size: '5xl' as HeadingSize,
    sizeSM: '6xl' as HeadingSize,
    sizeMD: '7xl' as HeadingSize,
    textColor: 'text-violet-600',
    className: 'font-bold tracking-tight break-words',
  },
  h2: {
    size: '4xl' as HeadingSize,
    textColor: 'text-violet-600',
    className: 'font-bold tracking-tight break-words',
  },
  h3: {
    size: '3xl' as HeadingSize,
    textColor: 'text-neutral-900',
    className: 'font-bold break-words',
  },
  h4: {
    size: '2xl' as HeadingSize,
    textColor: 'text-neutral-900',
    className: 'font-bold break-words',
  },
  h5: {
    size: 'lg' as HeadingSize,
    textColor: 'text-neutral-900',
    className: 'font-bold break-words',
  },
  h6: {
    size: 'base' as HeadingSize,
    textColor: 'text-neutral-900',
    className: 'font-bold break-words',
  },
} as const

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
