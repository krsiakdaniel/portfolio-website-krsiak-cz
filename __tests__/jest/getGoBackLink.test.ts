import { ID_PROJECTS_PERSONAL, ID_PROJECTS_WORK } from '@/utils/constants'
import { getGoBackLinkID } from '@/utils/getGoBackLink'
import { GoBackLinkType } from '@/utils/types'

describe('getGoBackLinkID', () => {
  it('returns correct link for type "work"', () => {
    const sectionID = 'react'
    expect(getGoBackLinkID('work' as GoBackLinkType, sectionID)).toEqual(`/#${ID_PROJECTS_WORK}-${sectionID}`)
  })

  it('returns correct link for type "personal"', () => {
    const sectionID = 'next'
    expect(getGoBackLinkID('personal' as GoBackLinkType, sectionID)).toEqual(`/#${ID_PROJECTS_PERSONAL}-${sectionID}`)
  })

    it('returns default link for unknown type', () => {
      const sectionID = 'unknown'
      expect(getGoBackLinkID('unknown' as GoBackLinkType, sectionID)).toEqual('/')
    })
})
