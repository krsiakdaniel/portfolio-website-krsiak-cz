import { URL_PERSONAL_PROJECTS, URL_WORK_EXPERIENCE } from '@/utils/constants'
import { generateUrlPersonalProject, generateUrlWorkExperience } from '@/utils/generateUrls'

describe('generateUrlWorkExperience', () => {
  it('should return the correct URL for a given company', () => {
    const company = 'exampleCompany'
    const expectedUrl = `${URL_WORK_EXPERIENCE}/${company}`
    const result = generateUrlWorkExperience(company)
    expect(result).toBe(expectedUrl)
  })
})

describe('generateUrlPersonalProject', () => {
  it('should return the correct URL for a given project', () => {
    const project = 'exampleProject'
    const expectedUrl = `${URL_PERSONAL_PROJECTS}/${project}`
    const result = generateUrlPersonalProject(project)
    expect(result).toBe(expectedUrl)
  })
})
