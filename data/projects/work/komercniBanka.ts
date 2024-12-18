import { Section } from '@/utils/interfaces/interfaces'

export const sections: Section[] = [
  {
    id: 1,
    title: 'My job',
    titleHighlight: '',
    items: [
      'I worked for the 3rd biggest bank in the Czech Republic, Komerční banka, owned by Société Générale.',
      'I worked on a website that is used by 2 000 000+ customers.',
    ],
  },
  {
    id: 2,
    title: 'Developed new features',
    titleHighlight: '',
    items: [
      'I was tasked with creating a search page, with filters and results pagination for the bank branches and ATM locations and detail sub-pages.',
      'My task was to provide an easy user experience for all customers, using the Geolocation API and the Google Places Autocomplete API, so they could find their nearest bank branch or ATM.',
      'I created an Exchange Rates page with rates detail pages.',
    ],
  },
  {
    id: 3,
    title: 'Responsive design',
    titleHighlight: '',
    items: [
      'I was responsible for the responsive aspects of the web as well.',
      'Making sure it works well for users across desktop, tablet, and mobile platforms.',
    ],
  },
]
