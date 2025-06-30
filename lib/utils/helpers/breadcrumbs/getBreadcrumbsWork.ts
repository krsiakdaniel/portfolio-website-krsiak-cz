import { PAGES_URL } from '@/lib/utils/constants/urls/pageUrls'

import { ICON_EMOJI, TEXT } from '@/localization/english'

import { BreadCrumbsType } from '@/lib/utils/typeDefinitions/types'

/**
 * Generates breadcrumb data for work experience.
 *
 * @param {string} level2Url - The URL for the second level breadcrumb.
 * @param {string} level2Icon - The icon for the second level breadcrumb.
 * @param {string} level2Text - The text for the second level breadcrumb.
 *
 * @returns {BreadCrumbsType} - The breadcrumb data.
 */

export const getBreadcrumbsWork = (
  level2Url: string,
  level2Icon: string,
  level2Text: string,
): BreadCrumbsType => {
  return {
    level1Url: PAGES_URL.work.mainUrl,
    level1Icon: ICON_EMOJI.manTechnologist.lightSkinTone,
    level1AriaLabel: '',
    level1Text: TEXT.workExperience,
    level2Url,
    level2Icon,
    level2AriaLabel: '',
    level2Text,
  }
}
