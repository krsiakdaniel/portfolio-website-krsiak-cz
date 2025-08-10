import { CHRISTMAS_PERIOD, MONTHS, WINTER_MONTHS } from '@/lib/utils/constants/calendar'
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
  const isWinter = WINTER_MONTHS.includes(month)

  // Determine if it is Christmas week (December 23-29)
  const isChristmas =
    month === MONTHS.DECEMBER &&
    day >= CHRISTMAS_PERIOD.START_DAY &&
    day <= CHRISTMAS_PERIOD.END_DAY

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
