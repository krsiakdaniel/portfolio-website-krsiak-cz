import { getGoBackLinkID } from '@/lib/utils/helpers/getGoBackLink'
import { GoBackLinkEnum } from '@/lib/utils/interfaces/enums'

describe('getGoBackLinkID', () => {
  it('returns correct link for type "work"', () => {
    const sectionID = 'react'
    expect(getGoBackLinkID('work' as GoBackLinkEnum, sectionID)).toEqual(`/work-experience/#${sectionID}`)
  })

  it('returns correct link for type "personal"', () => {
    const sectionID = 'next'
    expect(getGoBackLinkID('personal' as GoBackLinkEnum, sectionID)).toEqual(`/personal-projects/#${sectionID}`)
  })

  it('returns default link for unknown type', () => {
    const sectionID = 'unknown'
    expect(getGoBackLinkID('unknown' as GoBackLinkEnum, sectionID)).toEqual('/')
  })
})
