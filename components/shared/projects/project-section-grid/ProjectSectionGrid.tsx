import Image from 'next/image'

import HeadingSection from '@/components/shared/heading/HeadingSection'
import GridPlaceholder from '@/components/shared/projects/grid-placeholder/GridPlaceholder'
import ProjectCompactCard from '@/components/shared/projects/project-compact-card/ProjectCompactCard'

import { ProjectSectionGridProps } from './ProjectSectionGrid.types'

const ProjectSectionGrid = ({
  projectData = [],
  priorityFirstCard = false,
  sectionId = '',
  sectionText = '',
  otherExperience = [],
  showPlaceholder = false,
}: ProjectSectionGridProps) => {
  return (
    <>
      <HeadingSection text={sectionText} id={sectionId} />

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {projectData.map((item, index) => (
          <ProjectCompactCard
            key={item.id}
            ariaLabel={item.ariaLabel}
            company={item.company}
            dataTestId={item.id}
            icon={item.icon}
            image={item.image}
            isFeatured={item.isFeatured}
            linkProjectPage={item.linkProjectPage}
            linkText={item.linkText}
            priority={priorityFirstCard && index === 0}
            role={item.role}
            skillsIcons={item.skillsIcons}
            title={item.title}
          />
        ))}
        {otherExperience.map((item) => (
          <div
            key={item.id}
            className="relative flex cursor-default flex-col rounded-lg border border-dashed border-violet-300 bg-white"
          >
            {/* Thumbnail placeholder */}
            <div className="flex min-h-[161px] items-center justify-center overflow-hidden rounded-t-lg border-b border-dashed border-violet-300 bg-violet-50 p-2">
              {item.icon && (
                <span role="img" aria-label={item.iconAriaLabel} className="select-none text-6xl">
                  {item.icon}
                </span>
              )}
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col gap-1 p-3">
              <h3 className="text-2xl font-semibold text-neutral-900">
                {item.icon && (
                  <span role="img" aria-label={item.iconAriaLabel} className="mr-1 select-none">
                    {item.icon}
                  </span>
                )}
                {item.company}
              </h3>
              <p className="text-xl font-medium text-violet-600">{item.role}</p>
              <p className="text-sm text-neutral-500">{item.description}</p>

              {item.svgIcons?.length || item.emojiIcons?.length ? (
                <div className="mt-4 flex flex-wrap items-center gap-2">
                  {item.svgIcons?.map((src) => {
                    const name = src.split('/').pop()?.replace('.svg', '') ?? ''
                    return <Image key={src} src={src} alt={name} width={28} height={28} />
                  })}
                  {item.emojiIcons?.map(({ emoji, ariaLabel }) => (
                    <span
                      key={emoji}
                      role="img"
                      aria-label={ariaLabel}
                      className="text-[28px] leading-none"
                    >
                      {emoji}
                    </span>
                  ))}
                </div>
              ) : null}
            </div>
          </div>
        ))}
        {showPlaceholder && <GridPlaceholder />}
      </div>
    </>
  )
}

export default ProjectSectionGrid
