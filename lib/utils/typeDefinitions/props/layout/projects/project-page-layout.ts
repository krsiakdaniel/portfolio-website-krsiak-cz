import { ReactNode } from 'react'

import { Project, Section } from '@/lib/utils/typeDefinitions/interfaces'
import { BreadCrumbsType } from '@/lib/utils/typeDefinitions/types'

import { HeaderSectionProps } from '@/lib/utils/typeDefinitions/props/layout/projects/project-page'

export type ProjectPageLayoutWrapperProps = {
  breadCrumbs: BreadCrumbsType
  pageID: string
  projectData: Project
  sections: Section[]
  showAlert?: ReactNode
  PageNavigation: ReactNode
} & HeaderSectionProps

export type ProjectsOverviewLayoutProps = {
  heading: string
  description: ReactNode
  children: ReactNode
}
