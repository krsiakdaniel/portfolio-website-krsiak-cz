import { FC } from 'react'

import { ARIA_LABELS } from '@/lib/utils/constants/ariaLabels'

const TheSun: FC = (): JSX.Element => {
  return (
    <span role="img" aria-label={ARIA_LABELS.sun} className="text-2xl">
      ☀️
    </span>
  )
}

export default TheSun
