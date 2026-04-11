import { type HeadingDefaults, type HeadingLevel, type HeadingSize } from './Heading.types'

export const HEADING_DEFAULTS: Record<HeadingLevel, HeadingDefaults> = {
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
