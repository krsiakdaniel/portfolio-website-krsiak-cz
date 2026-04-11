import { type Project } from '@/lib/types/interfaces'

export type ProjectInformationProps = Pick<
  Project,
  'customers' | 'description' | 'linkGitHub' | 'projectLinks' | 'skillsOverview'
>
