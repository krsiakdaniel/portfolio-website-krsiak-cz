import { ARIA_LABELS } from '@/lib/utils/constants/ariaLabels'

const TheMoon = () => {
  return (
    <span role="img" aria-label={ARIA_LABELS.moon} className="text-2xl">
      🌔
    </span>
  )
}

export default TheMoon
