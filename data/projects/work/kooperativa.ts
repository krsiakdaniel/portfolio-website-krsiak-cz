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
        text: 'I worked for Kooperativa, the 2nd biggest insurance company in the Czech Republic, owned by Vienna Insurance Group.',
      },
      {
        id: '1-1',
        text: 'I was involved in the development of application that will improve services and customer experience of over 2 480 000+ customers.',
      },
    ],
  },
  {
    id: 2,
    title: 'Developed new features',
    titleHighlight: '',
    items: [
      {
        id: '2-0',
        text: 'I was part of team to create comprehensive solution for arranging and managing insurance contracts.',
      },
      {
        id: '2-1',
        text: 'The application is designed to enhance the customer experience while providing employees with a modern system that simplifies their work.',
      },
      {
        id: '2-2',
        text: 'I worked with TypeScript, React, and Redux. I used Figma designs to develop a user interface. I also worked with a backend developer to ensure API integration.',
      },
    ],
  },
]
