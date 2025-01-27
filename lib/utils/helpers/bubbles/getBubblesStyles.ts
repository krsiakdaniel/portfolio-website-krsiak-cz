import { BubbleStyleCSS } from '@/lib/utils/typeDefinitions/interfaces'

// TODO: write unit test

/**
 * Generates an array of bubble styles based on the provided colors.
 *
 * @param {string[]} colors - An array of color classes to be applied to the bubbles.
 *
 * @returns {BubbleStyleCSS[]} An array of bubble style objects.
 */
export const getBubblesStyles = (colors: string[]): BubbleStyleCSS[] => [
  {
    id: 'bubble-1',
    color: colors[0],
    position: '-left-8 -top-8 2xl:-left-12',
    size: 'h-24 w-24',
    hoverTranslate:
      'transition duration-500 group-hover:-translate-x-1 group-hover:translate-y-1 2xl:group-hover:-translate-x-2 2xl:group-hover:translate-y-2',
  },
  {
    id: 'bubble-2',
    color: colors[1],
    position: '-right-8 2xl:-right-16 -top-12 2xl:-top-14',
    size: 'h-44 w-44',
    hoverTranslate:
      'transition duration-500 group-hover:translate-x-1 group-hover:translate-y-1 2xl:group-hover:translate-x-2 2xl:group-hover:translate-y-2',
  },
  {
    id: 'bubble-3',
    color: colors[2],
    position: '-bottom-10 2xl:-bottom-12 -right-8 2xl:-right-10',
    size: 'h-32 w-32',
    hoverTranslate:
      'transition duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 2xl:group-hover:translate-x-2 2xl:group-hover:-translate-y-2',
  },
]
