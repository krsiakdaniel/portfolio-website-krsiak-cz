import { NB_HYPHEN } from '@/lib/utils/constants/specialCharacters'
import { PAGES_URL } from '@/lib/utils/constants/urls/pageUrls'
import { PROJECTS_WORK_URLS } from '@/lib/utils/constants/urls/projectsUrls'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'

import { CUSTOMERS_COUNT } from '../../constants/customers'

export const PROJECTS_WORK_KOMERCNI_BANKA = {
  sections: {
    responsibility: {
      title: 'My Job',
      items: [
        'I\u00A0worked for\u00A0the\u00A03rd biggest bank in\u00A0the\u00A0Czech Republic, Komerční banka, owned by\u00A0Société Générale.',
        `I\u00A0worked on\u00A0a\u00A0website that is\u00A0used by ${CUSTOMERS_COUNT.komercniBanka} customers.`,
      ],
    },
    features: {
      title: 'Developed new features',
      items: [
        'I\u00A0was tasked with creating a\u00A0search page with filters and\u00A0results pagination for\u00A0the\u00A0bank branches, ATM locations, and\u00A0detail sub-pages.',
        'My task was to\u00A0provide an\u00A0easy user experience for\u00A0all customers, using the\u00A0Geolocation API and\u00A0the\u00A0Google Places Autocomplete API, so\u00A0they could find their nearest bank branch or\u00A0ATM.',
        'I\u00A0created an\u00A0Exchange Rates page with rates detail pages.',
      ],
    },
    responsive: {
      title: 'Responsive design',
      items: [
        'I\u00A0was responsible for\u00A0the\u00A0responsive aspects of\u00A0the\u00A0web as\u00A0well.',
        'Making sure it\u00A0works well for\u00A0users across desktop, tablet, and\u00A0mobile platforms.',
      ],
    },
  },
}

export const PROJECTS_WORK_KOMERCNI_BANKA_OVERVIEW = {
  title: `Commerce Bank ${NB_HYPHEN}\u00A0Website`,
  company: 'Komerční banka',
  role: 'React Developer',
  years: '10\u00A0months',
  description:
    'I\u00A0created a\u00A0search page for\u00A0ATMs and\u00A0branches, with their detail pages. I\u00A0also developed an\u00A0Exchange rates page with details for\u00A0each currency.',
  linkText: 'Project details',
  projectLinks: [
    {
      urlText: `Branches &\u00A0ATMs`,
      url: PROJECTS_WORK_URLS.workKomercniBankaBranchesAndAtmsExternal,
      dataTestId: DATA_TEST_IDS.links.KOMERCNI_BANKA_BRANCHES_AND_ATMS,
    },
    {
      urlText: `Branches &\u00A0ATMs ${NB_HYPHEN}\u00A0Details`,
      url: PROJECTS_WORK_URLS.workKomercniBankaBranchesDetailsExternal,
      dataTestId: DATA_TEST_IDS.links.KOMERCNI_BANKA_BRANCHES_AND_ATMS_DETAILS,
    },
    {
      urlText: 'Exchange Rates',
      url: PROJECTS_WORK_URLS.workKomercniBankaExchangeRatesExternal,
      dataTestId: DATA_TEST_IDS.links.KOMERCNI_BANKA_EXCHANGE_RATES,
    },
    {
      urlText: `Exchange Rates ${NB_HYPHEN}\u00A0Details`,
      url: PROJECTS_WORK_URLS.workKomercniBankaExchangeDetailsExternal,
      dataTestId: DATA_TEST_IDS.links.KOMERCNI_BANKA_EXCHANGE_RATES_DETAILS,
    },
  ],
  customers: `${CUSTOMERS_COUNT.komercniBanka}`,
  linkProjectPage: PAGES_URL.workKomercniBanka,
}
