import { Hemisphere, Moon } from 'lunarphase-js'

import { SetLunarPhaseEmoji } from '@/lib/utils/typeDefinitions/types'

/**
 * Updates the lunar phase emoji based on the current date.
 *
 * @param {SetLunarPhaseEmoji} setLunarPhaseEmoji - Function to set the lunar phase emoji.
 */
export const updateLunarPhase = (setLunarPhaseEmoji: SetLunarPhaseEmoji): void => {
  const date = new Date()
  const options = {
    hemisphere: Hemisphere.NORTHERN,
  }
  const emoji = Moon.lunarPhaseEmoji(date, options)
  setLunarPhaseEmoji(emoji)
}
