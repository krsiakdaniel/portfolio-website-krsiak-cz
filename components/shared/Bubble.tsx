import { BubbleProps } from '@/lib/utils/typeDefinitions/props/shared/bubble'
import { FC } from 'react'

/**
 * Bubble component
 *
 * This component renders a div with a set of predefined CSS classes and any custom CSS passed via props.
 * It is used to display a bubble with specific styles.
 *
 */
const Bubble: FC<BubbleProps> = ({ customCss }) => {
  return (
    <div
      className={`absolute m-2 transform rounded-full opacity-50 transition-transform duration-500 lg:m-0 ${customCss}`}
    />
  )
}

export default Bubble
