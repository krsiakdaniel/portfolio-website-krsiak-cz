import { FC } from 'react'

import { ARIA_LABELS } from '@/lib/utils/constants/ariaLabels'

// TODO: implement function for the current moon phase and change icon based on that
const TheMoon: FC = (): JSX.Element => {
  return (
    <span role="img" aria-label={ARIA_LABELS.moon} className="text-2xl">
      🌔
    </span>
  )
}

export default TheMoon
