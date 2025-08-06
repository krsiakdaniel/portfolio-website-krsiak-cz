import { FC } from 'react'

import ManWalkingInForest from '@/components/layout/footer/divider/ManWalkingInForest'
import TheMoon from '@/components/layout/footer/divider/TheMoon'
import TheSun from '@/components/layout/footer/divider/TheSun'

/**
 * @description
 *
 * Klub českých turistů
 * https://www.kct.cz/
 *
 * Stezky z lásky
 * https://www.facebook.com/groups/954188525874944
 *
 * I am a scout, and scout leader, deeply connected with nature.
 * I spend my days trailblazing, painting hiking posts, and embracing the wilderness.
 * My love for nature and the outdoors has been a lifelong journey.
 * Whether it's navigating new paths or appreciating the beauty of the natural world, every step I take fuels my passion for the great outdoors.
 *
 * @joke Why don't mountains get cold in the winter? Because they wear snowcaps!
 *
 */

const sharedCSS = 'mx-2 h-1 w-full flex-1'

const noonToSunSet = (
  <div className={`bg-linear-to-l from-sky-300 via-blue-400 to-gray-500 ${sharedCSS}`} />
)
const sunRiseToNoon = (
  <div className={`bg-linear-to-l from-red-500 via-yellow-400 to-sky-300 ${sharedCSS}`} />
)

const DividerWithEmojis: FC = (): JSX.Element => {
  return (
    <div className="flex w-full items-center justify-between">
      <TheMoon />
      {noonToSunSet}
      <ManWalkingInForest />
      {sunRiseToNoon}
      <TheSun />
    </div>
  )
}

export default DividerWithEmojis
