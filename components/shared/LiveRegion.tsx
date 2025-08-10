'use client'

import { LiveRegionProps } from '@/lib/utils/typeDefinitions/props/shared/liveRegion'
import { ARIA_LABELS } from '@/localization/english'

/**
 * A live region component that announces dynamic content changes to screen reader users.
 *
 * Live regions are accessibility features that automatically notify assistive technology users
 * when content changes without requiring them to navigate to the updated content. This is
 * essential for dynamic updates like form validation messages, loading states, and notifications.
 *
 * The component is visually hidden (using `sr-only`) since it's specifically designed for
 * screen reader users who cannot see visual changes on the page.
 *
 * @param props - The component props
 * @param props.message - The message to announce. If empty, component doesn't render
 * @param props.priority - Announcement priority: 'polite' (default) or 'assertive'
 *
 * @returns A visually hidden div that announces messages to screen readers
 *
 * @example
 * ```tsx
 * // Basic usage for status updates
 * <LiveRegion message="Profile saved successfully" />
 *
 * // For urgent error messages
 * <LiveRegion message="Error: Invalid email address" priority="assertive" />
 *
 * // For loading states
 * const [loading, setLoading] = useState(false);
 * <LiveRegion message={loading ? "Loading..." : ""} />
 *
 * // For dynamic content updates
 * <LiveRegion message={`${searchResults.length} results found`} />
 * ```
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions
 * @see https://www.w3.org/wiki/PF/ARIA/BestPractices/LiveRegion
 */
const LiveRegion = ({ message = '', priority = 'polite' }: LiveRegionProps) => {
  if (!message) {
    return <></>
  }

  return (
    <div role="status" aria-live={priority} aria-label={ARIA_LABELS.liveRegion} className="sr-only">
      {message}
    </div>
  )
}

export default LiveRegion
