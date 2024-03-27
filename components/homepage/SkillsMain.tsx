import DividerWithText from '@/components/shared/DividerWithText'
import SkillsCard from '@/components/shared/SkillsCard'
import js from '@/public/icons/svg/skills/js.svg'
import react from '@/public/icons/svg/skills/react.svg'
import redux from '@/public/icons/svg/skills/redux.svg'
import ts from '@/public/icons/svg/skills/ts.svg'
import { getYearsExperience } from '@/utils/getYearsExperience'
import { StaticImageData } from 'next/image'

interface SkillsCardProps {
  imgSrc: StaticImageData
  imgAlt: string
  title: string
  titleYears: number
  description: string
}

const skills: SkillsCardProps[] = [
  {
    imgSrc: js,
    imgAlt: 'JS',
    title: 'JavaScript',
    titleYears: getYearsExperience(2019),
    description: 'Essential for creating modern interactive web applications.',
  },
  {
    imgSrc: ts,
    imgAlt: 'TS',
    title: 'TypeScript',
    titleYears: getYearsExperience(2020),
    description: 'Ensuring type safety, code reliability and scalability.',
  },
  {
    imgSrc: react,
    imgAlt: 'React',
    title: 'React',
    titleYears: getYearsExperience(2020),
    description: 'Great for components that are reusable and easy to maintain.',
  },
  {
    imgSrc: redux,
    imgAlt: 'Redux',
    title: 'Redux',
    titleYears: getYearsExperience(2022),
    description: 'Managing application state in a predictable and organized way.',
  },
]

const SkillsMain = () => {
  return (
    <div className="mt-20">
      <DividerWithText text="My Main Skills" />
      <div className="mt-5 mb-20 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {skills.map((skill, index) => (
          <SkillsCard
            key={index}
            imgSrc={skill.imgSrc}
            imgAlt={skill.imgAlt}
            title={skill.title}
            titleYears={`${skill.titleYears}`}
            description={skill.description}
          />
        ))}
      </div>
    </div>
  )
}

export default SkillsMain
