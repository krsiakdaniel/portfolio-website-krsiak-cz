import { TEXT } from '@/localization/english'
import { Section } from '@/utils/interfaces/interfaces'

export const sections: Section[] = [
  {
    id: 1,
    title: TEXT.myJob,
    titleHighlight: '',
    items: [
      {
        id: '1-0',
        text: 'I was the company WordPress administrator and I was responsible for the website.',
      },
    ],
  },
  {
    id: 2,
    title: 'Writing new tutorials',
    titleHighlight: '',
    items: [
      {
        id: '2-0',
        text: 'I was writing tutorials for the company main product chat dashboard, taking screenshots and creating new content.',
      },
    ],
  },
  {
    id: 3,
    title: 'Website localization',
    titleHighlight: '',
    items: [
      {
        id: '3-0',
        text: 'The company had customers from different countries, I was responsible for the localization into 9 languages. 🇬🇧 🇨🇿 🇪🇸 🇫🇷 🇭🇺 🇩🇪 🇮🇹 🇳🇱 🇵🇱',
      },
    ],
  },
]
