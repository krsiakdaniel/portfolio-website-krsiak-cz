import { getSkillBadgeColor } from '@/utils/getSkillBadgeColor'
import { CategoryDescriptionType } from '@/utils/types'

describe('getSkillBadgeColor', () => {
  it(`returns 'yellow' color for 'Frontend'`, () => {
    expect(getSkillBadgeColor('Frontend' as CategoryDescriptionType)).toEqual('yellow')
  })
})
