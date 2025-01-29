import { AlertTypeEnum } from '@/lib/utils/typeDefinitions/enums'

/**
 * A record that maps each alert type from `AlertTypeEnum` to a string of CSS classes.
 * These classes are used to style alerts based on their type.
 */
export const alertTypeClasses: Record<AlertTypeEnum, string> = {
  [AlertTypeEnum.Info]: 'border-blue-300 bg-blue-100 text-blue-800',
  [AlertTypeEnum.Success]: 'border-green-300 bg-green-100 text-green-800',
  [AlertTypeEnum.Warning]: 'border-yellow-300 bg-yellow-100 text-yellow-800',
  [AlertTypeEnum.Danger]: 'border-red-300 bg-red-100 text-red-800',
  [AlertTypeEnum.Neutral]: 'border-neutral-300 bg-neutral-100 text-neutral-800',
}
