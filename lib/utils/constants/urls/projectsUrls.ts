import { ProjectsPersonalUrls, ProjectsWorkUrls } from '@/lib/utils/typeDefinitions/interfaces'

export const PROJECTS_WORK_URLS = {
  workKooperativaExternal: 'https://www.koop.cz/pojisteni/pojisteni-majetku',
  workSmartsuppDashboardExternal: 'https://www.smartsupp.com/live-chat-for-customer-care-teams/',
  workSmartsuppWebExternal: 'https://www.smartsupp.com/',
  workSmartsuppHelpExternal: 'https://help.smartsupp.com/',
  workKomercniBankaBranchesAndAtmsExternal: 'https://www.kb.cz/en/branches-and-atms',
  workKomercniBankaBranchesDetailsExternal:
    'https://www.kb.cz/en/branches-and-atms/branches/brno-nam-svobody-1',
  workKomercniBankaExchangeRatesExternal: 'https://www.kb.cz/en/exchange-rates',
  workKomercniBankaExchangeDetailsExternal:
    'https://www.kb.cz/en/exchange-rates/exchange-detail?curr=CHF&date=2024-12-27T07:00:00',
  workGrouponExternal: 'https://www.groupon.com/',
  workMoraviaExternal: 'https://www.rws.com/',
} as const satisfies ProjectsWorkUrls

export const PROJECTS_PERSONAL_URLS = {
  personalKrsiakExternal: 'https://krsiak.cz/',
  personalCryptoManiaExternal: 'https://cryptocurrency-prices-one.vercel.app/',
} as const satisfies ProjectsPersonalUrls
