import { FC } from 'react'

import { IconArrow } from '@/components/icons/IconArrow'

import { NavigationDirectionEnum } from '@/lib/utils/interfaces/enums'

type ProjectLinkProps = {
  linkText: string
  linkProjectPage: string
  dataTestId: string
}

const ProjectLink: FC<ProjectLinkProps> = ({ linkText, linkProjectPage, dataTestId }): JSX.Element => (
  <p>
    <a
      data-testid={dataTestId}
      href={linkProjectPage}
      className="mt-8 flex w-[162px] items-center space-x-2 rounded-lg bg-purple-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-purple-800 focus:ring-4 focus:ring-purple-300"
    >
      <span>{linkText}</span> <IconArrow direction={NavigationDirectionEnum.Right} />
    </a>
  </p>
)

export default ProjectLink
