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
        text: 'I worked for a company that creates a chat solution for customer care teams.',
      },
      {
        id: '1-1',
        text: 'The product is a chat box for e-commerce and regular websites, and integrates with an email inbox and Facebook Messenger, all-in-one messaging platform.',
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
        text: 'I participated in the implementation of new features for the chat application dashboard.',
      },
      {
        id: '2-1',
        text: 'Ranging from new chat features to working on a chatbot page and creating graphs for statistics.',
      },
      {
        id: '2-2',
        text: 'I also updated the old JavaScript codebase to a modern one using REACT with hooks.',
      },
    ],
  },
]
