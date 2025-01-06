import { FC } from 'react'

import { ARIA_LABELS } from '@/lib/utils/constants/ariaLabels'

const TheMoon: FC = () => {
  return (
    <span role="img" aria-label={ARIA_LABELS.moon} className="text-2xl">
      🌔
    </span>
  )
}

export default TheMoon
