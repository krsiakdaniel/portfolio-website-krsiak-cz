import ManWalkingInForest from '@/components/layout/footer/divider/ManWalkingInForest'
import TheMoon from '@/components/layout/footer/divider/TheMoon'
import TheSun from '@/components/layout/footer/divider/TheSun'

const sharedCSS = 'mx-2 h-1 w-full flex-1'

const sunRiseToNoon = <div className={`bg-gradient-to-r from-yellow-400 via-sky-300 to-green-500 ${sharedCSS}`} />
const noonToSunSet = <div className={`to-gray-800" bg-gradient-to-r from-green-500 via-blue-700 ${sharedCSS}`} />

// Klub českých turistů
// https://www.kct.cz/

// Stezky z lásky
// https://www.facebook.com/groups/954188525874944

const DividerWithGradient = () => {
  return (
    <div className="my-4 flex w-full items-center justify-between">
      <TheSun />
      {sunRiseToNoon}
      <ManWalkingInForest />
      {noonToSunSet}
      <TheMoon />
    </div>
  )
}

export default DividerWithGradient
