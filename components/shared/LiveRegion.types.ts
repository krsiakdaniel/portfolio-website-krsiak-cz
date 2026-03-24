/**
 * Props for the LiveRegion component
 *
 * @see {@link LiveRegion.tsx} component for usage examples
 */
export type LiveRegionProps = {
  /**
   * The message to announce to screen reader users when content changes dynamically.
   * If empty, undefined, or falsy, the LiveRegion component will not render.
   *
   * @example
   * ```tsx
   * // Status messages
   * message="Form saved successfully"
   * message="Loading search results..."
   *
   * // Error messages
   * message="Error: Please fill in all required fields"
   *
   * // Dynamic content
   * message={`${results.length} results found`}
   * ```
   */
  message?: string

  /**
   * The priority level for screen reader announcements using the aria-live attribute.
   *
   * - `'polite'` (default): The screen reader waits for the user to pause before announcing
   *   the message. Use for non-critical updates like status messages, search results,
   *   or completion notifications.
   *
   * - `'assertive'`: The screen reader immediately interrupts whatever it's currently
   *   announcing to deliver this message. Use sparingly and only for urgent messages
   *   like errors, critical alerts, or time-sensitive information.
   *
   * @default 'polite'
   *
   * @example
   * ```tsx
   * // Non-urgent updates (default)
   * priority="polite"
   *
   * // Urgent messages
   * priority="assertive"
   * ```
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-live
   */
  priority?: 'polite' | 'assertive'
}
