import { BubbleProps } from '@/lib/utils/typeDefinitions/props/shared/bubble'

/**
 * Bubble component
 *
 * It is used to display a bubble with specific styles.
 * This component renders a div with a set of predefined CSS classes.
 * Also it adds and uses custom CSS passed via props.
 *
 */
const Bubble = ({ customCss }: BubbleProps) => {
  return <div className={`absolute m-2 rounded-full opacity-50 lg:m-0 ${customCss}`} />
}

export default Bubble
