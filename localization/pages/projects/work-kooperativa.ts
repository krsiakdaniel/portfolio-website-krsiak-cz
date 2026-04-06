import { NB_HYPHEN } from '@/lib/utils/constants/specialCharacters'
import { PAGES_URL } from '@/lib/utils/constants/urls/pageUrls'
import { PROJECTS_WORK_URLS } from '@/lib/utils/constants/urls/projectsUrls'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'

import { CUSTOMERS_COUNT } from '../../constants/customers'

export const PROJECTS_WORK_KOOPERATIVA = {
  sections: {
    responsibility: {
      title: 'My Job',
      items: [
        'I\u00A0worked for\u00A0Kooperativa, the\u00A02nd biggest insurance company in\u00A0the\u00A0Czech Republic, owned by\u00A0Vienna Insurance Group.',
        'I\u00A0was involved in\u00A0the\u00A0development of\u00A0an\u00A0application that will improve services and\u00A0customer experience of\u00A0over 2\u00A0480\u00A0000+ customers.',
      ],
    },
    features: {
      title: 'Developed new features',
      items: [
        'I\u00A0was part of\u00A0a\u00A0team to\u00A0create a\u00A0comprehensive solution for\u00A0arranging and\u00A0managing insurance contracts.',
        'The\u00A0application is\u00A0designed to\u00A0enhance the\u00A0customer experience while providing employees with a\u00A0modern system that simplifies their work.',
        'I\u00A0worked with TypeScript, React, and\u00A0Redux. I\u00A0used Figma designs to\u00A0develop a\u00A0user interface. I\u00A0also worked with a\u00A0backend developer to\u00A0ensure API integration.',
      ],
    },
  },
}

export const PROJECTS_WORK_KOOPERATIVA_OVERVIEW = {
  title: `Insurance Company ${NB_HYPHEN}\u00A0App`,
  company: 'Kooperativa',
  role: 'React Developer',
  years: '8\u00A0months',
  description: `I\u00A0worked on\u00A0an\u00A0application for\u00A0managing insurance policies for\u00A0citizens. Kooperativa has over ${CUSTOMERS_COUNT.kooperativa} customers in\u00A0Czech\u00A0Republic.`,
  linkText: 'Project details',
  projectLinks: [
    {
      urlText: 'Website',
      url: PROJECTS_WORK_URLS.workKooperativaExternal,
      dataTestId: DATA_TEST_IDS.links.KOOPERATIVA,
    },
  ],
  customers: `${CUSTOMERS_COUNT.kooperativa}`,
  linkProjectPage: PAGES_URL.workKooperativa,
}
