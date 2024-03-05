import { getFeaturedBorderColor } from '@/utils/getFeaturedBorderColor'

const BORDER_NEUTRAL_300 = 'border-neutral-300'
const BORDER_YELLOW_300 = 'border-yellow-300'

describe('getFeaturedBorderColor', () => {
  it('returns "border-neutral-300" if the parameter is "false"', () => {
    expect(getFeaturedBorderColor(false)).toEqual(BORDER_NEUTRAL_300)
  })

  it('returns "border-neutral-300" if the parameter is "undefined"', () => {
    expect(getFeaturedBorderColor(undefined)).toEqual(BORDER_NEUTRAL_300)
  })

  it('returns "border-yellow-300" if the parameter is "true"', () => {
    expect(getFeaturedBorderColor(true)).toEqual(BORDER_YELLOW_300)
  })
})
