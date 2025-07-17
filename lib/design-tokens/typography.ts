// Typography Design Tokens
// Research-backed typographic standards for enhanced readability and UX

// Base font size - 16px minimum for accessibility and readability
export const BASE_FONT_SIZE = 16 // px

// Line height multiplier - 1.5-1.6x for optimal vertical spacing
export const LINE_HEIGHT_MULTIPLIER = 1.5

// Paragraph spacing - 1.5x line height for better chunking
export const PARAGRAPH_SPACING_MULTIPLIER = 1.5

// Typography scale with improved readability
export const TYPOGRAPHY_SCALE = {
  // Body text - minimum 16px for accessibility
  body: {
    fontSize: '16px', // text-base equivalent
    lineHeight: '1.5', // 24px
    marginBottom: '1.5rem', // 24px (1.5 * 16px)
  },

  // Paragraph text - comfortable reading
  paragraph: {
    fontSize: '18px', // text-lg equivalent
    lineHeight: '1.6', // 28.8px
    marginBottom: '1.5rem', // 24px
  },

  // Small text - still readable
  small: {
    fontSize: '14px', // text-sm equivalent
    lineHeight: '1.5', // 21px
    marginBottom: '1rem', // 16px
  },

  // Large text - emphasis
  large: {
    fontSize: '20px', // text-xl equivalent
    lineHeight: '1.5', // 30px
    marginBottom: '1.5rem', // 24px
  },

  // Headings with proper hierarchy
  h1: {
    fontSize: '2.5rem', // 40px
    lineHeight: '1.2', // 48px
    marginBottom: '1.5rem', // 24px
    marginTop: '2rem', // 32px
  },

  h2: {
    fontSize: '2rem', // 32px
    lineHeight: '1.25', // 40px
    marginBottom: '1.25rem', // 20px
    marginTop: '2rem', // 32px
  },

  h3: {
    fontSize: '1.5rem', // 24px
    lineHeight: '1.33', // 32px
    marginBottom: '1rem', // 16px
    marginTop: '1.5rem', // 24px
  },

  h4: {
    fontSize: '1.25rem', // 20px
    lineHeight: '1.4', // 28px
    marginBottom: '0.75rem', // 12px
    marginTop: '1.25rem', // 20px
  },

  h5: {
    fontSize: '1.125rem', // 18px
    lineHeight: '1.44', // 26px
    marginBottom: '0.5rem', // 8px
    marginTop: '1rem', // 16px
  },

  h6: {
    fontSize: '1rem', // 16px
    lineHeight: '1.5', // 24px
    marginBottom: '0.5rem', // 8px
    marginTop: '1rem', // 16px
  },
} as const

// CSS class mappings for Tailwind
export const TYPOGRAPHY_CLASSES = {
  body: 'text-base leading-6 mb-6',
  paragraph: 'text-lg leading-relaxed mb-6', // leading-relaxed = 1.625
  small: 'text-sm leading-6 mb-4',
  large: 'text-xl leading-8 mb-6',

  h1: 'text-4xl leading-tight mb-6 mt-8',
  h2: 'text-3xl leading-tight mb-5 mt-8',
  h3: 'text-2xl leading-8 mb-4 mt-6',
  h4: 'text-xl leading-7 mb-3 mt-5',
  h5: 'text-lg leading-7 mb-2 mt-4',
  h6: 'text-base leading-6 mb-2 mt-4',
} as const

// Responsive typography - mobile-first approach
export const RESPONSIVE_TYPOGRAPHY = {
  h1: {
    base: 'text-3xl', // 30px on mobile
    sm: 'sm:text-4xl', // 36px on small screens
    md: 'md:text-5xl', // 48px on medium screens
    lg: 'lg:text-6xl', // 60px on large screens
  },

  h2: {
    base: 'text-2xl', // 24px on mobile
    sm: 'sm:text-3xl', // 30px on small screens
    md: 'md:text-4xl', // 36px on medium screens
  },

  h3: {
    base: 'text-xl', // 20px on mobile
    sm: 'sm:text-2xl', // 24px on small screens
    md: 'md:text-3xl', // 30px on medium screens
  },

  paragraph: {
    base: 'text-base', // 16px on mobile
    sm: 'sm:text-lg', // 18px on small screens and up
  },
} as const

// Typography utilities for better readability
export const TYPOGRAPHY_UTILITIES = {
  // Improved text rendering
  textRendering: 'antialiased',

  // Better word breaking
  wordBreaking: 'break-words',

  // Optimal character spacing
  letterSpacing: {
    tight: '-0.025em',
    normal: '0em',
    wide: '0.025em',
  },

  // Font weights
  fontWeight: {
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
  },

  // Line height options
  lineHeight: {
    tight: 'leading-tight', // 1.25
    normal: 'leading-normal', // 1.5
    relaxed: 'leading-relaxed', // 1.625
    loose: 'leading-loose', // 2
  },
} as const

// Updated text size types with proper hierarchy
export const TEXT_SIZE_OPTIONS = [
  'text-sm', // 14px
  'text-base', // 16px (new minimum)
  'text-lg', // 18px
  'text-xl', // 20px
  'text-2xl', // 24px
] as const

// Updated text color types
export const TEXT_COLOR_OPTIONS = [
  'text-neutral-600', // Secondary text
  'text-neutral-700', // Primary text
  'text-neutral-800', // Emphasized text
  'text-neutral-900', // High contrast text
] as const

// Updated margin types with proper spacing
export const MARGIN_TOP_OPTIONS = [
  'mt-0', // 0px
  'mt-2', // 8px
  'mt-4', // 16px
  'mt-6', // 24px
  'mt-8', // 32px
  'mt-16', // 64px
] as const

// Export types for TypeScript
export type TextSizeType = (typeof TEXT_SIZE_OPTIONS)[number]
export type TextColorType = (typeof TEXT_COLOR_OPTIONS)[number]
export type MarginTopType = (typeof MARGIN_TOP_OPTIONS)[number]
