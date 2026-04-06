import { NB_HYPHEN } from '@/lib/utils/constants/specialCharacters'
import { PAGES_URL } from '@/lib/utils/constants/urls/pageUrls'
import { PROJECTS_WORK_URLS } from '@/lib/utils/constants/urls/projectsUrls'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'

export const PROJECTS_WORK_MORAVIA = {
  sections: {
    responsibility: {
      title: 'My Job',
      items: ['I\u00A0managed a\u00A0team of\u00A03\u00A0people in\u00A0localization team.'],
    },
    delivery: {
      title: 'Responsibility',
      items: [
        'I\u00A0was responsible for\u00A0translation delivery and\u00A0quality checks for\u00A0Microsoft projects Windows\u00A08 +\u00A0Windows\u00A0Phone.',
      ],
    },
    automation: {
      title: 'QA\u00A0Automation',
      items: [
        'I\u00A0was working on\u00A0automation and\u00A0scripts for\u00A0manual repetitive tasks including filling in\u00A0forms and\u00A0checking translations.',
      ],
    },
  },
}

export const PROJECTS_WORK_MORAVIA_OVERVIEW = {
  title: 'Windows',
  company: 'Moravia\u00A0IT',
  role: `QA\u00A0Automation ${NB_HYPHEN}\u00A0Team\u00A0Leader`,
  years: '1 year',
  description:
    'Worked on\u00A0localization for\u00A0the\u00A0Microsoft Windows\u00A08 and\u00A0Windows Phone. I\u00A0had an\u00A0amazing chance to\u00A0be team leader on\u00A0Microsoft products.',
  linkText: 'Project details',
  projectLinks: [
    {
      urlText: 'Website',
      url: PROJECTS_WORK_URLS.workMoraviaExternal,
      dataTestId: DATA_TEST_IDS.links.MORAVIA,
    },
  ],
  customers: '80\u00A0out of\u00A0the\u00A0world top\u00A0100\u00A0brands',
  linkProjectPage: PAGES_URL.workMoravia,
}
