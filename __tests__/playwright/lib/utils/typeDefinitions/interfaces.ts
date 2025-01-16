import { Browser, BrowserContext, Page } from '@playwright/test'

export interface ProjectLink {
  name: string
  url: string
  id: string
}

export interface BrowserSetup {
  browser: Browser
  context: BrowserContext
  page: Page
}
