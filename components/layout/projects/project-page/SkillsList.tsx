import { FC } from 'react'

import List from '@/components/shared/List'
import ListItem from '@/components/shared/ListItem'

import { Skill } from '@/lib/utils/typeDefinitions/interfaces'

import { SkillsListProps } from '@/lib/utils/typeDefinitions/props/layout/projects/project-page'

// FIXME: the getSkillBadge function can be refactored into a component
const getSkillBadge = (skillCategoryObject: Skill): JSX.Element[] => {
  return skillCategoryObject.skillsList.map((skill: string) => (
    <span
      key={skill}
      className={`min-w-20 rounded border border-yellow-400 bg-yellow-100 px-2 text-center text-xs font-medium text-yellow-800`}
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
          <div className="flex flex-col space-x-0 space-y-1 md:flex-row md:space-x-2 md:space-y-0">
            {getSkillBadge(skillCategoryObject)}
          </div>
        </ListItem>
      ))}
    </List>
  )
}

export default SkillsList
