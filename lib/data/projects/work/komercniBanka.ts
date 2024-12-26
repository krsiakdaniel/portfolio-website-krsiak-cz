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
        text: 'I worked for the 3rd biggest bank in the Czech Republic, Komerční banka, owned by Société Générale.',
      },
      {
        id: '0-1',
        text: 'I worked on a website that is used by 2 000 000+ customers.',
      },
    ],
  },
  {
    id: 1,
    title: 'Developed new features',
    titleHighlight: '',
    items: [
      {
        id: '1-0',
        text: 'I was tasked with creating a search page, with filters and results pagination for the bank branches and ATM locations and detail sub-pages.',
      },
      {
        id: '1-1',
        text: 'My task was to provide an easy user experience for all customers, using the Geolocation API and the Google Places Autocomplete API, so they could find their nearest bank branch or ATM.',
      },
      {
        id: '1-2',
        text: 'I created an Exchange Rates page with rates detail pages.',
      },
    ],
  },
  {
    id: 2,
    title: 'Responsive design',
    titleHighlight: '',
    items: [
      {
        id: '2-0',
        text: 'I was responsible for the responsive aspects of the web as well.',
      },
      {
        id: '2-1',
        text: 'Making sure it works well for users across desktop, tablet, and mobile platforms.',
      },
    ],
  },
]
