import { getSkillBadgeColor } from '@/utils/getSkillBadgeColor'
import { SkillCategoryType } from '@/utils/types'

describe('getSkillBadgeColor', () => {
  it('returns "yellow" color for "Frontend"', () => {
    expect(getSkillBadgeColor('Frontend' as SkillCategoryType)).toEqual('yellow')
  })

  it('returns "indigo" color for "Design"', () => {
    expect(getSkillBadgeColor('Design' as SkillCategoryType)).toEqual('indigo')
  })

  it('return "lime" color for "Other"', () => {
    expect(getSkillBadgeColor('Other' as SkillCategoryType)).toEqual('lime')
  })

  it('returns "neutral" for unknown category', () => {
    const category: SkillCategoryType = 'unknown' as SkillCategoryType
    expect(getSkillBadgeColor(category)).toEqual('neutral')
  })

  it('returns "neutral" for empty category', () => {
    const category: SkillCategoryType = '' as SkillCategoryType
    expect(getSkillBadgeColor(category)).toEqual('neutral')
  })
})
