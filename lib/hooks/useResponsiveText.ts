import { useEffect, useState } from 'react'
import { ScreenSizeEnum } from '../utils/typeDefinitions/enums'

interface ResponsiveTextProps {
  mobileText: string
  desktopText: string
  screenSize?: ScreenSizeEnum
}

/**
 * Custom hook that returns different text content based on the viewport width.
 *
 * @param options - Configuration object for responsive text
 * @param options.mobileText - The text to display on mobile devices
 * @param options.desktopText - The text to display on desktop devices
 * @param options.screenSize - The screen size breakpoint enum (ScreenSizeEnum) to switch between mobile and desktop text (defaults to ScreenSizeEnum.MD)
 * @returns The current text based on the viewport width
 *
 * @example
 * ```tsx
 * const text = useResponsiveText({
 *   mobileText: 'Mobile View',
 *   desktopText: 'Desktop View',
 *   screenSize: ScreenSizeEnum.MD
 * });
 * ```
 */

export const useResponsiveText = ({
  mobileText,
  desktopText,
  screenSize = ScreenSizeEnum.MD,
}: ResponsiveTextProps): string => {
  const [text, setText] = useState<string>(desktopText)

  useEffect(() => {
    const handleResize = (): void => {
      setText(window.innerWidth <= screenSize ? mobileText : desktopText)
    }

    window.addEventListener('resize', handleResize)
    handleResize() // Initial check

    return () => window.removeEventListener('resize', handleResize)
  }, [mobileText, desktopText, screenSize])

  return text
}
