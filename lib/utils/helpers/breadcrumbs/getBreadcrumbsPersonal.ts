import { URL_PERSONAL_PROJECTS } from '@/lib/utils/constants/urls/pageUrls'

import { TEXT } from '@/localization/english'

import { BreadCrumbsType } from '@/lib/utils/interfaces/types'

/**
 * Generates breadcrumb data for personal projects.
 *
 * @param {string} level2Url - The URL for the second level breadcrumb.
 * @param {string} level2Text - The text for the second level breadcrumb.
 * @returns {BreadCrumbsType} - The breadcrumb data.
 */

export const getBreadcrumbsPersonal = (level2Url: string, level2Text: string): BreadCrumbsType => {
  return {
    level1Url: URL_PERSONAL_PROJECTS,
    level1Text: TEXT.personalProjects,
    level2Url,
    level2Text,
  }
}
