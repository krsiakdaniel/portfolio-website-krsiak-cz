import Heading from '@/components/shared/Heading'
import List from '@/components/shared/List'
import ListItem from '@/components/shared/ListItem'

import { MIDDLE_DOT } from '@/lib/utils/constants/specialCharacters'
import { ExpertiseSectionProps } from '@/lib/utils/typeDefinitions/props/pages/home/expertise'
import { ARIA_LABELS } from '@/localization/english'

const ExpertiseSection = ({
  icon = '',
  ariaLabel = '',
  heading,
  listItems = [],
}: ExpertiseSectionProps) => {
  return (
    <div className="relative flex w-full flex-col rounded-lg border border-gray-200 bg-white px-4 py-6 transition-shadow duration-250 ease-in-out hover:border-gray-300 hover:shadow-md">
      <Heading as="h3" textColor="text-violet-600 ml-2">
        <span
          role="img"
          aria-label={ariaLabel}
          className="absolute -top-4 -left-3 text-3xl select-none md:-top-5 md:text-4xl"
        >
          {icon}
        </span>
        {heading}
      </Heading>
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
                  <span className="hidden text-sm lg:ml-1 xl:inline">
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
