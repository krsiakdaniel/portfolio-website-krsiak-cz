import { FC } from 'react'

import { ARIA_LABELS } from '@/lib/utils/constants/ariaLabels'

const ManWalkingInForest: FC = () => {
  return (
    <>
      <span role="img" aria-label={ARIA_LABELS.forest} className="text-2xl">
        🌲🌲
      </span>
      <span role="img" aria-label={ARIA_LABELS.manWalking} className="animate-walk text-2xl">
        🚶‍♂️
      </span>
      <span role="img" aria-label={ARIA_LABELS.forestWithMountain} className="text-2xl">
        🏔️🌲
      </span>
    </>
  )
}

export default ManWalkingInForest
