import { PAGES_URL } from '@/lib/utils/constants/urls/pageUrls'

import { ICON_EMOJI, TEXT } from '@/localization/english'

import { BreadCrumbsType } from '@/lib/utils/typeDefinitions/types'

/**
 * Generates breadcrumb data for personal projects.
 *
 * @param {string} level2Url - The URL for the second level breadcrumb.
 * @param {string} level2Icon - The icon for the second level breadcrumb.
 * @param {string} level2Text - The text for the second level breadcrumb.
 *
 * @returns {BreadCrumbsType} - The breadcrumb data.
 */

export const getBreadcrumbsPersonal = (level2Url: string, level2Icon: string, level2Text: string): BreadCrumbsType => {
  return {
    level1Url: PAGES_URL.personal.mainUrl,
    level1Icon: ICON_EMOJI.rocket,
    level1Text: TEXT.personalProjects,
    level2Url,
    level2Icon,
    level2Text,
  }
}
