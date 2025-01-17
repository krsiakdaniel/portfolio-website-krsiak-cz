import { TEXT } from '@/localization/english'

import { Section } from '@/lib/utils/typeDefinitions/interfaces'

export const sections: Section[] = [
  {
    id: 0,
    title: TEXT.myJob,
    titleHighlight: '',
    items: [
      {
        id: '0-0',
        text: 'I managed a team of 3 people in localization team.',
      },
    ],
  },
  {
    id: 1,
    title: 'Responsibility',
    titleHighlight: '',
    items: [
      {
        id: '1-0',
        text: 'I was responsible for translation delivery and quality checks for Microsoft projects Windows 8 + Windows Phone.',
      },
    ],
  },
  {
    id: 2,
    title: 'QA Automation',
    titleHighlight: '',
    items: [
      {
        id: '2-0',
        text: 'I was working on automation and scripts for manual repetitive tasks including filling in forms and checking translations.',
      },
    ],
  },
]
