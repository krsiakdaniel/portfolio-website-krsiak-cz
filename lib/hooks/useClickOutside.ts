import { RefObject, useEffect } from 'react'

/**
 * A React hook that calls a handler function when a mousedown or touchstart event
 * occurs outside of all the provided ref elements.
 *
 * @param refs - Array of React refs to elements that should be considered "inside"
 * @param handler - Callback function to execute when a click occurs outside all refs
 *
 * @example
 * ```tsx
 * const ref1 = useRef<HTMLDivElement>(null);
 * const ref2 = useRef<HTMLButtonElement>(null);
 *
 * useClickOutside([ref1, ref2], () => {
 *   console.log('Clicked outside both elements');
 * });
 * ```
 */
export function useClickOutside<T extends HTMLElement = HTMLElement>(
  refs: RefObject<T | null>[],
  handler: () => void,
): void {
  useEffect(() => {
    const handleEvent = (event: MouseEvent | TouchEvent): void => {
      // Check if the click/touch target is outside all provided refs
      const isOutside = refs.every((ref) => {
        if (!ref.current) {
          return true // If ref is null, consider it as "outside"
        }

        // Check if the event target is contained within the ref element
        return !ref.current.contains(event.target as Node)
      })

      if (isOutside) {
        handler()
      }
    }

    // Add event listeners for both mouse and touch events
    document.addEventListener('mousedown', handleEvent)
    document.addEventListener('touchstart', handleEvent)

    // Cleanup event listeners on unmount or dependency change
    return () => {
      document.removeEventListener('mousedown', handleEvent)
      document.removeEventListener('touchstart', handleEvent)
    }
  }, [refs, handler])
}
