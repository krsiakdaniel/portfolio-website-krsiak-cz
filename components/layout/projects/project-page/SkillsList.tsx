import { FC } from 'react'

import SkillBadge from '@/components/layout/projects/project-page/SkillBadge'
import List from '@/components/shared/List'
import ListItem from '@/components/shared/ListItem'

import { SkillsListProps } from '@/lib/utils/typeDefinitions/props/layout/projects/project-page'

const SkillsList: FC<SkillsListProps> = ({ skillsOverview }): JSX.Element => {
  return (
    <List>
      {skillsOverview.map((skill) => (
        <ListItem key={skill.id}>
          <div className="flex flex-col space-x-0 space-y-1 md:flex-row md:space-x-2 md:space-y-0">
            <SkillBadge skillObject={skill} />
          </div>
        </ListItem>
      ))}
    </List>
  )
}

export default SkillsList
