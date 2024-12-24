import { URL_PERSONAL_PROJECTS, URL_WORK_EXPERIENCE } from '@/utils/constants/urls/pageUrls'
import { getUrlPersonalProject, getUrlWorkExperience } from '@/utils/helpers/getPageUrls'

describe('getUrlWorkExperience', () => {
  it('should return the correct URL for a given company', () => {
    const company = 'exampleCompany'
    const expectedUrl = `${URL_WORK_EXPERIENCE}/${company}`
    const result = getUrlWorkExperience(company)
    expect(result).toBe(expectedUrl)
  })
})

describe('getUrlPersonalProject', () => {
  it('should return the correct URL for a given project', () => {
    const project = 'exampleProject'
    const expectedUrl = `${URL_PERSONAL_PROJECTS}/${project}`
    const result = getUrlPersonalProject(project)
    expect(result).toBe(expectedUrl)
  })
})
