import { getSkillBadgeColor } from '@/utils/getSkillBadgeColor'
import { CategoryDescriptionType } from '@/utils/types'

describe('getSkillBadgeColor', () => {
  it('returns "yellow" color for "Frontend"', () => {
    expect(getSkillBadgeColor('Frontend' as CategoryDescriptionType)).toEqual('yellow')
  })

  it('returns "indigo" color for "Design"', () => {
    expect(getSkillBadgeColor('Design' as CategoryDescriptionType)).toEqual('indigo')
  })

  it('return "lime" color for "Other"', () => {
    expect(getSkillBadgeColor('Other' as CategoryDescriptionType)).toEqual('lime')
  })
})
