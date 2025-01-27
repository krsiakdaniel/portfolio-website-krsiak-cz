import { BubbleStyleCSS } from '@/lib/utils/typeDefinitions/interfaces'

// TODO: write unit test

/**
 * Generates a CSS string for a bubble element based on the provided style properties.
 *
 * @param {BubbleStyleCSS} bubbleStyle - An object containing the style properties for the bubble.
 * @param {string} bubbleStyle.color - The color of the bubble.
 * @param {string} bubbleStyle.position - The position of the bubble.
 * @param {string} bubbleStyle.size - The size of the bubble.
 * @param {string} bubbleStyle.hoverTranslate - The hover translation of the bubble.
 *
 * @returns {string} A CSS string that combines the provided style properties.
 */
export const generateBubbleCss = (bubbleStyle: BubbleStyleCSS): string => {
  const { color, position, size, hoverTranslate } = bubbleStyle

  return `${color} ${position} ${size} ${hoverTranslate}`
}
