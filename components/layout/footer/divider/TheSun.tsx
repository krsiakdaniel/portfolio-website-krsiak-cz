import { ARIA_LABELS, ICON_EMOJI } from '@/localization/english'

const TheSun = () => {
  return (
    <span role="img" aria-label={ARIA_LABELS.sun} className="text-2xl">
      {ICON_EMOJI.sun}
    </span>
  )
}

export default TheSun
