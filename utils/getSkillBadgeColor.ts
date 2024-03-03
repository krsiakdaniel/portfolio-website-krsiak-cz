import { CategoryDescriptionType } from '@/utils/types'

export const getSkillBadgeColor = (categoryDescription: CategoryDescriptionType): string => {
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
