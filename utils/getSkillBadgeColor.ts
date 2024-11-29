import { SkillCategoryType } from '@/utils/types'

export const getSkillBadgeColor = (categoryDescription: SkillCategoryType): string => {
  switch (categoryDescription) {
    case 'Frontend':
      return 'yellow'
    case 'Design':
      return 'indigo'
    case 'Other':
      return 'lime'
    default:
      return 'neutral'
  }
}
