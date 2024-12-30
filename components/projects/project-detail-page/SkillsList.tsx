import { FC } from 'react'

import List from '@/components/shared/List'
import ListItem from '@/components/shared/ListItem'

import { Project, Skill } from '@/lib/utils/interfaces/interfaces'

type SkillsListProps = Pick<Project, 'skillsOverview'>

const getSkillBadge = (skillCategoryObject: Skill): JSX.Element[] => {
  return skillCategoryObject.skillsList.map((skill: string) => (
    <span
      key={skill}
      className={`mt-2 rounded border border-yellow-400 bg-yellow-100 px-2.5 py-0.5 text-center text-xs font-medium text-yellow-800 first:mt-0 last:mr-0 md:mr-2 md:mt-0`}
    >
      {skill}
    </span>
  ))
}

const SkillsList: FC<SkillsListProps> = ({ skillsOverview }): JSX.Element => {
  return (
    <List>
      {skillsOverview.map((skillCategoryObject) => (
        <ListItem key={skillCategoryObject.id}>
          <div className="flex flex-col md:flex-row">{getSkillBadge(skillCategoryObject)}</div>
        </ListItem>
      ))}
    </List>
  )
}

export default SkillsList
