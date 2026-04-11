import { NB_HYPHEN } from '@/lib/utils/constants/specialCharacters'
import { PAGES_URL } from '@/lib/utils/constants/urls/pageUrls'
import { PROJECTS_WORK_URLS } from '@/lib/utils/constants/urls/projectsUrls'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'

import { ARIA_LABELS } from '../../accessibility/aria'
import { CUSTOMERS_COUNT } from '../../constants/customers'
import { ICON_EMOJI } from '../../constants/iconsEmoji'

export const PROJECTS_WORK_SMARTSUPP_WEB = {
  sections: {
    responsibility: {
      title: 'My Job',
      items: [
        "I\u00A0was responsible for\u00A0the\u00A0entire company's Front\u00A0End and\u00A0website presentation.",
      ],
    },
    website: {
      title: 'Developed new website',
      items: ['The\u00A0main company website was built with PHP and\u00A0JavaScript.'],
    },
    localization: {
      title: 'Website localization',
      items: [
        {
          text: `The\u00A0company had customers from different countries, I\u00A0was responsible for\u00A0the\u00A0localization into 9\u00A0languages.`,
          flags: [
            {
              emoji: ICON_EMOJI.flagUnitedKingdom,
              ariaLabel: ARIA_LABELS.emoji.flag.unitedKingdom,
            },
            {
              emoji: ICON_EMOJI.flagCzechRepublic,
              ariaLabel: ARIA_LABELS.emoji.flag.czechRepublic,
            },
            { emoji: ICON_EMOJI.flagSpain, ariaLabel: ARIA_LABELS.emoji.flag.spain },
            { emoji: ICON_EMOJI.flagFrance, ariaLabel: ARIA_LABELS.emoji.flag.france },
            { emoji: ICON_EMOJI.flagHungary, ariaLabel: ARIA_LABELS.emoji.flag.hungary },
            { emoji: ICON_EMOJI.flagGermany, ariaLabel: ARIA_LABELS.emoji.flag.germany },
            { emoji: ICON_EMOJI.flagItaly, ariaLabel: ARIA_LABELS.emoji.flag.italy },
            { emoji: ICON_EMOJI.flagNetherlands, ariaLabel: ARIA_LABELS.emoji.flag.netherlands },
            { emoji: ICON_EMOJI.flagPoland, ariaLabel: ARIA_LABELS.emoji.flag.poland },
          ],
        },
      ],
    },
  },
}

export const PROJECTS_WORK_SMARTSUPP_WEB_OVERVIEW = {
  title: `SaaS Company ${NB_HYPHEN}\u00A0Website`,
  company: 'Smartsupp',
  role: 'Front End Developer',
  years: '1\u00A0year',
  description:
    'I\u00A0created a\u00A0SaaS company website and\u00A0was responsible for\u00A0the\u00A0Front End. I\u00A0worked with the\u00A0main UX designer on\u00A0a\u00A0new brand color theme.',
  linkText: 'Project details',
  projectLinks: [
    {
      urlText: 'Website',
      url: PROJECTS_WORK_URLS.workSmartsuppWebExternal,
      dataTestId: DATA_TEST_IDS.links.SMARTSUPP_WEB,
    },
  ],
  customers: `${CUSTOMERS_COUNT.smartsupp}`,
  linkProjectPage: PAGES_URL.workSmartsuppWeb,
}
