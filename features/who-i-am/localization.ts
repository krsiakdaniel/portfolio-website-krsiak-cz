import { EM_DASH } from '@/lib/utils/constants/specialCharacters'

import { ICON_EMOJI } from '@/localization/constants/iconsEmoji'
import { COMMON_VALUES } from '@/localization/ui/common'

export const META_WHO_I_AM = {
  title: `Who I Am | ${COMMON_VALUES.nameDanielKrsiak} — Traveler & Outdoor Enthusiast`,
  description:
    'I enjoy traveling and outdoor adventures, exploring from Czech forests to South Korean temples while embracing nature and cultural experiences.',
  keywords: {
    nameDanielKrsiak: COMMON_VALUES.nameDanielKrsiak,
    reactDeveloper: COMMON_VALUES.reactDeveloper,
    travelEnthusiast: 'Travel enthusiast',
    hiking: 'Hiking',
    czechRepublic: COMMON_VALUES.czechRepublic,
    slovakia: 'Slovakia',
    southKorea: 'South Korea',
    alandIslands: 'Åland Islands',
    outdoorAdventures: 'outdoor adventures',
    webDevelopment: 'web development',
    personalJourney: 'personal journey',
  },
}

export const SOUTH_KOREA = {
  headingTravel: 'Traveling',
  headingSouthKorea: 'South Korea',
  introduction:
    'South Korea is\u00A0a\u00A0fascinating country where ancient traditions seamlessly meet modern innovation, offering a\u00A0captivating journey through bustling metropolitan cities like\u00A0Seoul, serene Buddhist temples, stunning mountain vistas, and\u00A0nature full of\u00A0lush forests and\u00A0beautiful rivers.',
  quote1:
    'The world is\u00A0a\u00A0book, and\u00A0those who do\u00A0not travel read only one page.',
  quoteAuthorName1: 'Saint Augustine',
  quoteAuthorOccupation1: 'Bishop of Hippo',
  quote2: 'Traveling—it leaves you speechless, then turns you into a\u00A0storyteller.',
  quoteAuthorName2: 'Ibn Battuta',
  quoteAuthorOccupation2: '14th-century explorer',
  hiking: 'South Korea — hiking',
  nature: 'South Korea — nature',
  temple: 'South Korea — temple',
  palace: 'South Korea — palace',
}

export const WHO_I_AM = {
  whoIAm: 'Who I\u00A0Am',
  aboutMe: `
    I\u00A0am a\u00A0traveler who\u00A0loves discovering the\u00A0world and\u00A0staying close to\u00A0nature.  
    As\u00A0a\u00A0hiker I\u00A0spend my free time exploring the\u00A0outdoors, forests and\u00A0mountains.
  `,
  textCzechRepublic: `Hiking through the\u00A0forests in\u00A0Czech\u00A0Republic.`,
  textSlovakia: `Scaling the\u00A0majestic mountains in\u00A0Slovakia.`,
  textKorea: `Discovering the\u00A0stunning landscapes in\u00A0South\u00A0Korea.`,
  textAlandIslands: `Cruising across the\u00A0Baltic\u00A0Sea exploring the\u00A0Åland\u00A0Islands.`,
  travels: {
    heading: 'Countries I\u00A0Have\u00A0Visited',
    totalCountries: '19',
    statsText: {
      countries: 'countries',
      visits: 'total\u00A0visits',
    },
    tableHeaders: {
      country: 'Country',
      visits: 'Visits',
    },
    regions: {
      asia: {
        name: 'Asia',
        continentVisits: 1,
        countries: [{ flag: ICON_EMOJI.flagSouthKorea, name: 'South\u00A0Korea', visits: 1 }],
      },
      asiaMinor: {
        name: 'Asia\u00A0Minor',
        continentVisits: 2,
        countries: [{ flag: ICON_EMOJI.flagTurkey, name: 'Turkey', visits: 2 }],
      },
      africa: {
        name: 'Africa',
        continentVisits: 1,
        countries: [{ flag: ICON_EMOJI.flagTunisia, name: 'Tunisia', visits: 1 }],
      },
      middleEast: {
        name: 'Middle\u00A0East',
        continentVisits: 1,
        countries: [{ flag: ICON_EMOJI.flagUAE, name: `United Arab Emirates`, visits: 1 }],
      },
      europe: {
        name: 'Europe',
        continentVisits: 70,
        countries: [
          { flag: ICON_EMOJI.flagAustria, name: 'Austria', visits: 20 },
          { flag: ICON_EMOJI.flagSlovakia, name: 'Slovakia', visits: 11 },
          { flag: ICON_EMOJI.flagCroatia, name: 'Croatia', visits: 6 },
          { flag: ICON_EMOJI.flagSwitzerland, name: 'Switzerland', visits: 6 },
          { flag: ICON_EMOJI.flagPoland, name: 'Poland', visits: 5 },
          { flag: ICON_EMOJI.flagGermany, name: 'Germany', visits: 5 },
          { flag: ICON_EMOJI.flagGreece, name: 'Greece', visits: 3 },
          { flag: ICON_EMOJI.flagFrance, name: 'France', visits: 3 },
          { flag: ICON_EMOJI.flagUnitedKingdom, name: 'England', visits: 2 },
          { flag: ICON_EMOJI.flagHungary, name: 'Hungary', visits: 2 },
          { flag: ICON_EMOJI.flagItaly, name: 'Italy', visits: 2 },
          { flag: ICON_EMOJI.flagSweden, name: 'Sweden', visits: 1 },
          { flag: ICON_EMOJI.flagAlandIslands, name: 'Åland\u00A0Islands', visits: 1 },
          { flag: ICON_EMOJI.flagDenmark, name: 'Denmark', visits: 1 },
          { flag: ICON_EMOJI.flagSpain, name: `Spain ${EM_DASH}\u00A0Mallorca`, visits: 1 },
          {
            flag: ICON_EMOJI.flagSpain,
            name: `Spain ${EM_DASH}\u00A0Canary\u00A0Islands`,
            visits: 1,
          },
        ],
      },
    },
  },
}

export const WHO_I_AM_INTRODUCTION = {
  text: {
    introduction1: `Hi! My name is\u00A0`,
    introduction2: `I\u00A0am from Czech\u00A0Republic\u00A0🇨🇿`,
    freeTime: 'In\u00A0my free\u00A0time',
    loveTravel: 'I\u00A0love to\u00A0travel',
  },
}
