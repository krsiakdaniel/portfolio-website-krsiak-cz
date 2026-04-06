import { NB_HYPHEN } from '@/lib/utils/constants/specialCharacters'
import { PAGES_URL } from '@/lib/utils/constants/urls/pageUrls'
import { PROJECTS_WORK_URLS } from '@/lib/utils/constants/urls/projectsUrls'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'

import { CUSTOMERS_COUNT } from '../../constants/customers'

export const PROJECTS_WORK_SMARTSUPP_DASHBOARD = {
  sections: {
    responsibility: {
      title: 'My Job',
      items: [
        'I\u00A0worked for\u00A0a\u00A0company that creates a\u00A0chat solution for\u00A0customer care teams.',
        'The\u00A0product is\u00A0a\u00A0chat box for\u00A0e-commerce and\u00A0regular websites, and\u00A0integrates with an\u00A0email inbox and\u00A0Facebook Messenger, all-in-one messaging platform.',
      ],
    },
    features: {
      title: 'Developed new features',
      items: [
        'I\u00A0participated in\u00A0the\u00A0implementation of\u00A0new features for\u00A0the\u00A0chat application dashboard.',
        'Ranging from new chat features to\u00A0working on\u00A0a\u00A0chatbot page and\u00A0creating graphs for\u00A0statistics.',
        'I\u00A0also updated the\u00A0old JavaScript codebase to\u00A0a\u00A0modern one using REACT with hooks.',
      ],
    },
  },
}

export const PROJECTS_WORK_SMARTSUPP_DASHBOARD_OVERVIEW = {
  title: `SaaS Company\u00A0${NB_HYPHEN}\u00A0Dashboard`,
  company: 'Smartsupp',
  role: 'React Developer',
  years: '3\u00A0years 2\u00A0months',
  description:
    'I\u00A0worked on\u00A0chat dashboard features and\u00A0redesigned the\u00A0app\u00A0settings. I\u00A0was involved in\u00A0UX team learning about user needs.',
  linkText: 'Project details',
  projectLinks: [
    {
      urlText: 'Website',
      url: PROJECTS_WORK_URLS.workSmartsuppDashboardExternal,
      dataTestId: DATA_TEST_IDS.links.SMARTSUPP_DASHBOARD,
    },
  ],
  customers: `${CUSTOMERS_COUNT.smartsupp}`,
  linkProjectPage: PAGES_URL.workSmartsuppDashboard,
}
