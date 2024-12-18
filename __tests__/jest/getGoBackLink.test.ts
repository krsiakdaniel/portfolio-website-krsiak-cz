import { getGoBackLinkID } from '@/utils/helpers/getGoBackLink'
import { GoBackLinkType } from '@/utils/interfaces/types'

describe('getGoBackLinkID', () => {
  it('returns correct link for type "work"', () => {
    const sectionID = 'react'
    expect(getGoBackLinkID('work' as GoBackLinkType, sectionID)).toEqual(`/work-experience/#${sectionID}`)
  })

  it('returns correct link for type "personal"', () => {
    const sectionID = 'next'
    expect(getGoBackLinkID('personal' as GoBackLinkType, sectionID)).toEqual(`/personal-projects/#${sectionID}`)
  })

  it('returns default link for unknown type', () => {
    const sectionID = 'unknown'
    expect(getGoBackLinkID('unknown' as GoBackLinkType, sectionID)).toEqual('/')
  })
})
