import { AlertColorVariantEnum } from '@/lib/types/enums'

// Interface for styles
interface SocialLinkStyles {
  bgColor: string
  hoverColor: string
  focusRingColor: string
}

// Creates button styling classes for a given color
const createButtonStyles = (color: string): SocialLinkStyles => ({
  bgColor: `bg-${color}-600`,
  hoverColor: `hover:bg-${color}-800`,
  focusRingColor: `focus:ring-${color}-400`,
})

// Centralized data structure for social link styles based on AlertColorVariantEnum color variants
export const socialLinkTypeClasses: Record<AlertColorVariantEnum, SocialLinkStyles> = {
  [AlertColorVariantEnum.Neutral]: createButtonStyles('gray'),
  [AlertColorVariantEnum.Info]: createButtonStyles('blue'),
  [AlertColorVariantEnum.Success]: createButtonStyles('green'),
  [AlertColorVariantEnum.Warning]: createButtonStyles('yellow'),
  [AlertColorVariantEnum.Error]: createButtonStyles('red'),
} as const
