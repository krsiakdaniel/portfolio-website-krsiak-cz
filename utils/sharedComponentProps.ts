import { Link, Skill } from './interfaces'
import { GoBackLinkType } from './types'

export type HeaderSectionProps = {
  title: string
  sectionID: string
  role: string
  years?: string | undefined
  company?: string
  goBackLink: GoBackLinkType
}

export type ProjectInformationProps = {
  description: string
  skillsOverview: Skill[]
  customers?: string | undefined
  projectLinks: Link[]
  linkGitHub?: string | undefined
}

// error pages
export type ErrorProps = {
  error: Error & { digest?: string }
  reset: () => void
}
