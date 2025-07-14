import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'
import { ID } from '@/lib/utils/constants/ids/elementIds'
import { PAGES_URL } from '@/lib/utils/constants/urls/pageUrls'

import { ARIA_LABELS, ICON_EMOJI, TEXT } from '@/localization/english'

import { PageLinkItem } from '@/lib/utils/typeDefinitions/interfaces'

export const pagesLinks: PageLinkItem[] = [
  {
    id: ID.websiteLink.whoIAm,
    href: PAGES_URL.whoIAm,
    icon: ICON_EMOJI.wavingHand,
    ariaLabel: ARIA_LABELS.emoji.wavingHand,
    text: TEXT.whoIAm,
    dataTestId: DATA_TEST_IDS.pagesLinks.whoIAm,
  },
  {
    id: ID.websiteLink.workExperience,
    href: PAGES_URL.work.mainUrl,
    icon: ICON_EMOJI.manTechnologist.lightSkinTone,
    ariaLabel: ARIA_LABELS.emoji.manTechnologist.lightSkinTone,
    text: TEXT.workExperience,
    dataTestId: DATA_TEST_IDS.pagesLinks.workExperience,
  },
  {
    id: ID.websiteLink.resume,
    href: PAGES_URL.resume,
    icon: ICON_EMOJI.memo,
    ariaLabel: ARIA_LABELS.emoji.memo,
    text: TEXT.resume,
    dataTestId: DATA_TEST_IDS.pagesLinks.resume,
  },
  {
    id: ID.websiteLink.personalProjects,
    href: PAGES_URL.personal.mainUrl,
    icon: ICON_EMOJI.rocket,
    ariaLabel: ARIA_LABELS.emoji.rocket,
    text: TEXT.personalProjects,
    dataTestId: DATA_TEST_IDS.pagesLinks.personalProjects,
  },
  {
    id: ID.websiteLink.testimonials,
    href: PAGES_URL.testimonials,
    icon: ICON_EMOJI.speechBalloon,
    ariaLabel: ARIA_LABELS.emoji.speechBalloon,
    text: TEXT.testimonials,
    dataTestId: DATA_TEST_IDS.pagesLinks.testimonials,
  },
  {
    id: ID.websiteLink.blog,
    href: PAGES_URL.blog,
    icon: ICON_EMOJI.writingHand,
    ariaLabel: ARIA_LABELS.emoji.writingHand,
    text: TEXT.blog,
    dataTestId: DATA_TEST_IDS.pagesLinks.blog,
  },
]
