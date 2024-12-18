import { URL_PERSONAL_PROJECTS, URL_WORK_EXPERIENCE } from '@/utils/constants/pageUrls'

export const generateUrlWorkExperience = (company: string) => {
  return `${URL_WORK_EXPERIENCE}/${company}`
}

export const generateUrlPersonalProject = (project: string) => {
  return `${URL_PERSONAL_PROJECTS}/${project}`
}
