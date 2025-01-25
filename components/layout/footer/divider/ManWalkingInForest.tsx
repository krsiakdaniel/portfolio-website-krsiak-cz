import { FC } from 'react'

import { ARIA_LABELS } from '@/lib/utils/constants/ariaLabels'

// TODO: change the mountain icon based on the current season - winter has snow, otherwise not
// TODO: and trees = seasons have green trees, and on Christmas change the one in December for 🎄
const ManWalkingInForest: FC = (): JSX.Element => {
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
