import { FC } from 'react'

import Heading3 from '@/components/shared/Heading3'
import List from '@/components/shared/List'
import ListItem from '@/components/shared/ListItem'

import { MIDDLE_DOT } from '@/lib/utils/constants/specialCharacters'
import { ExpertiseSectionProps } from '@/lib/utils/typeDefinitions/props/pages/home/expertise'
import { ARIA_LABELS } from '@/localization/english'

// Import typography design tokens
import { TYPOGRAPHY_CLASSES } from '@/lib/design-tokens/typography'

const ExpertiseSection: FC<ExpertiseSectionProps> = ({
  icon = '',
  ariaLabel = '',
  heading,
  listItems = [],
}): JSX.Element => {
  return (
    <div className="relative flex w-full flex-col rounded-lg border border-gray-200 bg-white px-4 py-6">
      <Heading3 textColor="text-violet-600 ml-2">
        <span
          role="img"
          aria-label={ariaLabel}
          className="absolute -left-3 -top-4 select-none text-3xl md:-top-5 md:text-4xl"
        >
          {icon}
        </span>
        {heading}
      </Heading3>
      <div className="mt-4">
        <List>
          {listItems.map((item) => (
            <ListItem key={item.id}>
              <span className="inline">
                <span role="img" aria-label={ARIA_LABELS.emoji.icon}>
                  {item.icon}
                </span>
                <span className="ml-1">{item.text}</span>
                {item.years && (
                <span className={`hidden ${TYPOGRAPHY_CLASSES.small} lg:ml-1 xl:inline`}>
                    {MIDDLE_DOT} {item.years}
                  </span>
                )}
              </span>
            </ListItem>
          ))}
        </List>
      </div>
    </div>
  )
}

export default ExpertiseSection
