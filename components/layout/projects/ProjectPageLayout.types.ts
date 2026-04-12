import { type ReactNode } from 'react'

import { type HeaderSectionProps } from '@/components/layout/projects/project-page/HeaderSection.types'
import type { BreadCrumbsType } from '@/components/shared/breadcrumbs/Breadcrumbs.types'

import { type Project, type Section } from '@/lib/types/interfaces'

export type ProjectPageLayoutWrapperProps = HeaderSectionProps & {
  breadCrumbs: BreadCrumbsType
  PageNavigation: ReactNode
  pageID: string
  projectData: Project
  sections: Section[]
  showAlert?: ReactNode
}

export type ProjectsOverviewLayoutProps = {
  icon: string
  ariaLabel: string
  heading: string
  description: ReactNode
  children: ReactNode
}
