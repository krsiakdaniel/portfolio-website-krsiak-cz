'use client'

import { FC } from 'react'

import { ARIA_LABELS } from '@/localization/english'
import { ID } from '@/lib/utils/constants/ids/elementIds'

/**
 * A skip navigation component that provides accessibility shortcuts for keyboard users.
 *
 * This component renders hidden links that become visible when focused, allowing users
 * to quickly navigate to main content areas without having to tab through all navigation elements.
 *
 * The component follows WCAG 2.1 accessibility guidelines by providing skip links that:
 * - Are visually hidden by default using screen reader only (sr-only) classes
 * - Become visible when focused for keyboard navigation
 * - Use proper color contrast and styling when visible
 * - Include meaningful ARIA labels for screen readers
 *
 * @component
 * @example
 * ```tsx
 * // Basic usage in a layout
 * <SkipNavigationARIA />
 * ```
 *
 * @returns {JSX.Element} A div containing skip navigation links
 *
 * @accessibility
 * - Provides keyboard shortcuts to main content and navigation
 * - Hidden by default, visible on focus
 * - Uses semantic anchor elements with proper href attributes
 * - Includes ARIA labels for screen reader users
 *
 * @see https://www.w3.org/WAI/WCAG21/Techniques/general/G1.html
 */
const SkipNavigationARIA: FC = (): JSX.Element => {
  return (
    <div className="sr-only focus-within:not-sr-only">
      <a
        href={`#${ID.main}`}
        className="absolute top-0 left-0 z-50 bg-violet-600 px-4 py-2 text-white underline hover:bg-violet-700 focus:bg-violet-700"
      >
        {ARIA_LABELS.skipToMainContent}
      </a>
      <a
        href={`#${ID.menu.desktop}`}
        className="absolute top-0 left-20 z-50 bg-violet-600 px-4 py-2 text-white underline hover:bg-violet-700 focus:bg-violet-700"
      >
        {ARIA_LABELS.skipToNavigation}
      </a>
    </div>
  )
}

export default SkipNavigationARIA
