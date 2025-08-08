import { AlertTypeEnum } from '@/lib/utils/typeDefinitions/enums'

// Interface for styles
interface SocialLinkStyles {
  bgColor: string
  hoverColor: string
  focusRingColor: string
}

// Creates button styling classes for a given color
const createButtonCSS = (color: string): SocialLinkStyles => ({
  bgColor: `bg-${color}-600`,
  hoverColor: `hover:bg-${color}-800`,
  focusRingColor: `focus:ring-${color}-400`,
})

// Centralized data structure for social link styles based on AlertTypeEnum
export const socialLinkTypeClasses: Record<AlertTypeEnum, SocialLinkStyles> = {
  [AlertTypeEnum.Neutral]: createButtonCSS('gray'),
  [AlertTypeEnum.Info]: createButtonCSS('blue'),
  [AlertTypeEnum.Success]: createButtonCSS('green'),
  [AlertTypeEnum.Warning]: createButtonCSS('yellow'),
  [AlertTypeEnum.Error]: createButtonCSS('red'),
} as const
