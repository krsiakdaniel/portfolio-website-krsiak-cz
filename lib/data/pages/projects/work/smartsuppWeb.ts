import { TEXT } from '@/localization/english'

import { Section } from '@/lib/utils/interfaces/interfaces'

export const sections: Section[] = [
  {
    id: 0,
    title: TEXT.myJob,
    titleHighlight: '',
    items: [
      {
        id: '0-0',
        text: 'I was responsible for the entire company’s Front End and website presentation.',
      },
    ],
  },
  {
    id: 1,
    title: 'Developed new website',
    titleHighlight: '',
    items: [
      {
        id: '1-0',
        text: 'The main company website was built with PHP and JavaScript.',
      },
    ],
  },
  {
    id: 2,
    title: 'Created new documentation site',
    titleHighlight: '',
    items: [
      {
        id: '2-0',
        text: 'I created a documentation site that was running on Jekyll, Markdown, and Shopify’s Liquid template language, and later the site was moved to VuePress.',
      },
    ],
  },
]
