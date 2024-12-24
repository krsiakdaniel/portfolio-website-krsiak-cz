import { URL_PERSONAL_PROJECTS, URL_WORK_EXPERIENCE } from '@/utils/constants/urls/pageUrls'

export const getUrlWorkExperience = (company: string) => {
  return `${URL_WORK_EXPERIENCE}/${company}`
}

export const getUrlPersonalProject = (project: string) => {
  return `${URL_PERSONAL_PROJECTS}/${project}`
}
