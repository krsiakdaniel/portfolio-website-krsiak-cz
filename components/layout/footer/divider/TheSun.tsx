import { FC } from 'react'

import { ICON_EMOJI } from '@/localization/english'

import { ARIA_LABELS } from '@/lib/utils/constants/ariaLabels'

const TheSun: FC = (): JSX.Element => {
  return (
    <span role="img" aria-label={ARIA_LABELS.sun} className="text-2xl">
      {ICON_EMOJI.sun}
    </span>
  )
}

export default TheSun
