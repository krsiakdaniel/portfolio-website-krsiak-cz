import SkillBadge from '@/components/layout/projects/project-page/SkillBadge'
import List from '@/components/shared/List'
import ListItem from '@/components/shared/ListItem'

import { SkillsListProps } from '@/lib/utils/typeDefinitions/props/layout/projects/project-page'

const SkillsList = ({ skillsOverview = [] }: SkillsListProps) => {
  return (
    <List>
      {skillsOverview.map((skill) => (
        <ListItem key={skill.id}>
          <div className="flex flex-col space-y-1 space-x-0 md:flex-row md:space-y-0 md:space-x-2">
            <SkillBadge skillObject={skill} />
          </div>
        </ListItem>
      ))}
    </List>
  )
}

export default SkillsList
