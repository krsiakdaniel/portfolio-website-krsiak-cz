import { getSkillsIcons } from '@/lib/utils/helpers/skills/getSkillsIcons'
import { Icon } from '@/lib/utils/typeDefinitions/interfaces'

export const iconsWebDesign: Icon[] = getSkillsIcons(['html', 'css', 'scss', 'tailwind'])
export const iconsWebDevelopment: Icon[] = getSkillsIcons(['javascript', 'typescript', 'react', 'next'])
export const iconsWebDevelopmentWithQA: Icon[] = getSkillsIcons(['redux', 'graphql', 'jest', 'playwright'])
export const iconsDesignTools: Icon[] = getSkillsIcons(['sketch', 'xd', 'figma', 'storybook'])
