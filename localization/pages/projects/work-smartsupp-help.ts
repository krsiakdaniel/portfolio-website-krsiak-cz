import { NB_HYPHEN } from '@/lib/utils/constants/specialCharacters'
import { PAGES_URL } from '@/lib/utils/constants/urls/pageUrls'
import { PROJECTS_WORK_URLS } from '@/lib/utils/constants/urls/projectsUrls'

import { ARIA_LABELS } from '@/localization/accessibility/aria'
import { ICON_EMOJI } from '@/localization/constants/iconsEmoji'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'

import { CUSTOMERS_COUNT } from '../../constants/customers'

export const PROJECTS_WORK_SMARTSUPP_HELP = {
  sections: {
    responsibility: {
      title: 'My Job',
      items: [
        'I\u00A0was the\u00A0company WordPress\u00A0administrator and\u00A0I\u00A0was responsible for\u00A0the\u00A0HELP\u00A0website.',
      ],
    },
    tutorials: {
      title: 'Writing new tutorials',
      items: [
        'I\u00A0was writing tutorials for\u00A0the\u00A0company main product chat\u00A0dashboard, taking screenshots and\u00A0creating new content.',
      ],
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

export const PROJECTS_WORK_SMARTSUPP_HELP_OVERVIEW = {
  title: `SaaS Company ${NB_HYPHEN}\u00A0HELP`,
  company: 'Smartsupp',
  role: 'Admin &\u00A0Content Writer',
  years: '6\u00A0months',
  description:
    "Localization of\u00A0the\u00A0company's HELP site. I\u00A0was\u00A0also\u00A0writing tutorials and\u00A0creating content.",
  linkText: 'Project details',
  projectLinks: [
    {
      urlText: 'Website',
      url: PROJECTS_WORK_URLS.workSmartsuppHelpExternal,
      dataTestId: DATA_TEST_IDS.links.SMARTSUPP_HELP,
    },
  ],
  customers: `${CUSTOMERS_COUNT.smartsupp}`,
  linkProjectPage: PAGES_URL.workSmartsuppHelp,
}
