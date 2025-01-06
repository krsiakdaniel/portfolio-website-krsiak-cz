import { ARIA_LABELS } from '@/lib/utils/constants/ariaLabels'

const TheSun = () => {
  return (
    <span role="img" aria-label={ARIA_LABELS.sun} className="text-2xl">
      ☀️
    </span>
  )
}

export default TheSun
