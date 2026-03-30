import Image from 'next/image'
import Link from 'next/link'

import IconArrow from '@/components/icons/IconArrow'
import ProjectSkillsIcons from '@/components/pages/projects/overview-page/ProjectSkillsIcons'

import { ArrowDirectionEnum } from '@/lib/utils/typeDefinitions/enums'

import { ICON_EMOJI } from '@/localization'

import { ProjectCompactCardProps } from './ProjectCompactCard.types'

const ProjectCompactCard = ({
  ariaLabel,
  company,
  dataTestId,
  icon,
  image,
  isFeatured,
  linkProjectPage,
  linkText,
  role,
  skillsIcons,
  title,
  years,
}: ProjectCompactCardProps) => {
  const borderClassCss = isFeatured ? 'border-yellow-300' : 'border-violet-300'
  const thumbnailColorCss = isFeatured
    ? 'border-yellow-300 bg-yellow-50'
    : 'border-violet-300 bg-violet-50'

  return (
    <Link
      href={linkProjectPage}
      data-testid={dataTestId}
      className={`group relative flex flex-col rounded-lg border bg-white shadow-sm transition-all hover:scale-[1.01] hover:shadow-md ${borderClassCss}`}
    >
      {isFeatured && (
        <span
          role="img"
          aria-label="Featured project"
          className="absolute -top-3.5 -left-2.5 z-10 select-none text-2xl"
        >
          {ICON_EMOJI.star}
        </span>
      )}
      {/* Thumbnail */}
      <div className={`overflow-hidden rounded-t-lg border-b p-2 ${thumbnailColorCss}`}>
        <Image
          src={image}
          alt={title}
          width={400}
          height={240}
          className="h-36 w-full rounded object-cover object-top"
          loading="lazy"
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-1 p-3">
        <h3 className="text-2xl font-semibold text-neutral-900 group-hover:text-violet-700">
          <span role="img" aria-label={ariaLabel} className="mr-1 select-none">
            {icon}
          </span>
          {title}
        </h3>

        <p className="text-xl font-medium text-violet-600">{role}</p>
        <p className="text-sm text-neutral-500">
          {company}
          {years && <span className="ml-1 text-neutral-400">· {years}</span>}
        </p>

        <ProjectSkillsIcons skillsIcons={skillsIcons} />

        <div className="mt-auto flex items-center gap-1 pt-2 text-base font-medium text-violet-600">
          <span>{linkText}</span>
          <IconArrow arrowDirection={ArrowDirectionEnum.Right} />
        </div>
      </div>
    </Link>
  )
}

export default ProjectCompactCard
