import { ARIA_LABELS } from '@/localization/english'

export const getFlagAriaLabel = (countryName: string): string => {
  const ariaMapping: Record<string, string> = {
    'South\u00A0Korea': ARIA_LABELS.emoji.flag.southKorea,
    Turkey: ARIA_LABELS.emoji.flag.turkey,
    Tunisia: ARIA_LABELS.emoji.flag.tunisia,
    'United\u00A0Arab\u00A0Emirates': ARIA_LABELS.emoji.flag.uae,
    Austria: ARIA_LABELS.emoji.flag.austria,
    Slovakia: ARIA_LABELS.emoji.flag.slovakia,
    Croatia: ARIA_LABELS.emoji.flag.croatia,
    Switzerland: ARIA_LABELS.emoji.flag.switzerland,
    Poland: ARIA_LABELS.emoji.flag.poland,
    Germany: ARIA_LABELS.emoji.flag.germany,
    Greece: ARIA_LABELS.emoji.flag.greece,
    France: ARIA_LABELS.emoji.flag.france,
    England: ARIA_LABELS.emoji.flag.unitedKingdom,
    Hungary: ARIA_LABELS.emoji.flag.hungary,
    Italy: ARIA_LABELS.emoji.flag.italy,
    Sweden: ARIA_LABELS.emoji.flag.sweden,
    '\u00c5land\u00A0Islands': ARIA_LABELS.emoji.flag.alandIslands,
    Denmark: ARIA_LABELS.emoji.flag.denmark,
    Mallorca: ARIA_LABELS.emoji.flag.spain,
    'Canary\u00A0Islands': ARIA_LABELS.emoji.flag.spain,
  }

  return ariaMapping[countryName] || ARIA_LABELS.emoji.icon
}

export const getVisitCountColor = (visits: number): string => {
  if (visits >= 10) return 'text-violet-600'
  if (visits >= 5) return 'text-emerald-600'
  return 'text-gray-600'
}
