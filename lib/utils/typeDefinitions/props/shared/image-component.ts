import { StaticImageData } from 'next/image'
import { ReactNode } from 'react'

import { ImageLoading } from '@/lib/utils/typeDefinitions/enums'
import { PlaceholderValue } from '@/node_modules/next/dist/shared/lib/get-img-props'

/**
 * Props for the Image component
 *
 * @property {StaticImageData | string} src - The source URL or StaticImageData object for the image.
 * @property {number} [width] - Optional width of the image in pixels.
 * @property {number} [height] - Optional height of the image in pixels.
 * @property {string} alt - Required accessibility text description of the image.
 * @property {boolean} [priority]
 * - priority: When true, the image will be considered high priority and preloaded.
 * - priority: Use for images that will be visible in the initial viewport to improve LCP.
 * @property {ImageLoading | undefined} loading - Controls the loading behavior ('lazy', 'eager', or undefined).
 * @property {string} [customCss] - Optional CSS class names to apply to the image.
 * @property {PlaceholderValue} [placeholder] - Optional placeholder strategy ('blur' or 'empty').
 * @property {string} [blurDataURL] - Optional Base64 data URL to use as blur placeholder.
 * @property {string | ReactNode} [caption] - Optional caption to display below the image.
 * @property {string | null} [dataTooltipContent] - Optional tooltip content.
 * @property {string} [dataTestId] - Optional test ID for testing frameworks.
 */
export type ImageComponentProps = {
  src: StaticImageData | string
  width?: number
  height?: number
  alt: string
  priority?: boolean
  loading: ImageLoading | undefined
  customCss?: string
  placeholder?: PlaceholderValue
  blurDataURL?: string
  caption?: string | ReactNode
  dataTooltipContent?: string | null
  dataTestId?: string
}
