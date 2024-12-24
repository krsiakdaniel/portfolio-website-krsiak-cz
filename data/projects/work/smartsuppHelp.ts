import { TEXT } from '@/localization/english'
import { Section } from '@/utils/interfaces/interfaces'

export const sections: Section[] = [
  {
    id: 0,
    title: TEXT.myJob,
    titleHighlight: '',
    items: [
      {
        id: '0-0',
        text: 'I was the company WordPress administrator and I was responsible for the website.',
      },
    ],
  },
  {
    id: 1,
    title: 'Writing new tutorials',
    titleHighlight: '',
    items: [
      {
        id: '1-0',
        text: 'I was writing tutorials for the company main product chat dashboard, taking screenshots and creating new content.',
      },
    ],
  },
  {
    id: 2,
    title: 'Website localization',
    titleHighlight: '',
    items: [
      {
        id: '2-0',
        text: 'The company had customers from different countries, I was responsible for the localization into 9 languages. 🇬🇧 🇨🇿 🇪🇸 🇫🇷 🇭🇺 🇩🇪 🇮🇹 🇳🇱 🇵🇱',
      },
    ],
  },
]
