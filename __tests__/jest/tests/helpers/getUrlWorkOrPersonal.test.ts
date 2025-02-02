import { getUrlPersonalProject, getUrlWorkExperience } from '@/lib/utils/helpers/urls/getPageUrls'

describe('Work - getUrlWorkExperience', () => {
  it('should return the correct URL for a given company', () => {
    const company = 'exampleCompany'
    const expectedUrl = `/work-experience/${company}`
    const result = getUrlWorkExperience(company)
    expect(result).toBe(expectedUrl)
  })

  it('should handle empty company name', () => {
    const company = ''
    const expectedUrl = `/work-experience/`
    const result = getUrlWorkExperience(company)
    expect(result).toBe(expectedUrl)
  })
})

describe('Personal - getUrlPersonalProject', () => {
  it('should return the correct URL for a given project', () => {
    const project = 'exampleProject'
    const expectedUrl = `/personal-projects/${project}`
    const result = getUrlPersonalProject(project)
    expect(result).toBe(expectedUrl)
  })

  it('should handle empty project name', () => {
    const project = ''
    const expectedUrl = `/personal-projects/`
    const result = getUrlPersonalProject(project)
    expect(result).toBe(expectedUrl)
  })
})
