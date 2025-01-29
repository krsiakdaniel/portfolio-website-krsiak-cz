import { ICON_EMOJI } from '@/localization/english'

/**
 * Updates the forest and mountain icons based on the given date.
 *
 * @param {Date} date - The current date.
 * @param {function} setForestIcon - Function to set the forest icon.
 * @param {function} setMountainIcon - Function to set the mountain icon.
 */
export const updateIconsManWalkingInForest = (
  date: Date,
  setForestIcon: (icon: string) => void,
  setMountainIcon: (icon: string) => void,
): void => {
  const month = date.getMonth()
  const day = date.getDate()

  // Determine if it is winter (December, January, February)
  const isWinter = month === 11 || month === 0 || month === 1

  // Determine if it is Christmas week (December 23-29)
  const isChristmas = month === 11 && day >= 23 && day <= 29

  // Update forest icon based on the season
  if (isChristmas) {
    setForestIcon(ICON_EMOJI.nature.christmasForest) // Christmas trees
  } else {
    setForestIcon(ICON_EMOJI.nature.forest) // Evergreen trees
  }

  // Update mountain icon based on the season
  if (isChristmas) {
    setMountainIcon(ICON_EMOJI.nature.christmasMountainAndTree) // Christmas
  } else if (isWinter) {
    setMountainIcon(ICON_EMOJI.nature.winterMountainAndTree) // Winter
  } else {
    setMountainIcon(ICON_EMOJI.nature.mountainAndTree) // Other seasons
  }
}
