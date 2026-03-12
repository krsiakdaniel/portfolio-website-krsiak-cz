import Heading from '@/components/shared/Heading'

import { ARIA_LABELS, WHO_I_AM } from '@/localization/english'

import { TravelCountry, TravelRegion } from '@/lib/utils/typeDefinitions/interfaces'

const getFlagAriaLabel = (countryName: string): string => {
  const ariaMapping: Record<string, string> = {
    'South\u00A0Korea': ARIA_LABELS.emoji.flag.southKorea,
    Turkey: ARIA_LABELS.emoji.flag.turkey,
    Tunisia: ARIA_LABELS.emoji.flag.tunisia,
    'UAE \u2014\u00A0Dubai': ARIA_LABELS.emoji.flag.uae,
    Austria: ARIA_LABELS.emoji.flag.austria,
    Slovakia: ARIA_LABELS.emoji.flag.slovakia,
    Croatia: ARIA_LABELS.emoji.flag.croatia,
    Switzerland: ARIA_LABELS.emoji.flag.switzerland,
    Poland: ARIA_LABELS.emoji.flag.poland,
    Germany: ARIA_LABELS.emoji.flag.germany,
    Greece: ARIA_LABELS.emoji.flag.greece,
    France: ARIA_LABELS.emoji.flag.france,
    England: ARIA_LABELS.emoji.flag.unitedKingdom,
    Hungary: ARIA_LABELS.emoji.flag.hungary,
    Italy: ARIA_LABELS.emoji.flag.italy,
    Sweden: ARIA_LABELS.emoji.flag.sweden,
    '\u00c5land\u00A0Islands': ARIA_LABELS.emoji.flag.alandIslands,
    Denmark: ARIA_LABELS.emoji.flag.denmark,
    Mallorca: ARIA_LABELS.emoji.flag.spain,
    'Canary\u00A0Islands': ARIA_LABELS.emoji.flag.spain,
  }

  return ariaMapping[countryName] || ARIA_LABELS.emoji.icon
}

const getVisitCountColor = (visits: number): string => {
  if (visits >= 10) return 'text-violet-600'
  if (visits >= 5) return 'text-emerald-600'
  return 'text-gray-600'
}

const CountryCard = ({ country }: { country: TravelCountry }) => (
  <div className="flex items-center justify-between rounded-lg border border-gray-200 bg-white p-3 transition-all select-none hover:border-blue-300 hover:shadow-sm">
    <div className="flex items-center gap-3">
      <span
        role="img"
        aria-label={getFlagAriaLabel(country.name)}
        className="text-2xl leading-none"
      >
        {country.flag}
      </span>
      <span className="text-sm font-medium text-gray-800">{country.name}</span>
    </div>
    <span className={`text-sm font-bold ${getVisitCountColor(country.visits)}`}>
      {country.visits}
    </span>
  </div>
)

const WhoIAmTravelsList = () => {
  const { travels } = WHO_I_AM

  return (
    <div className="mt-8">
      <Heading as="h3" customCss="mb-4">
        {travels.heading}
      </Heading>

      <div className="mb-6 flex text-lg">
        <p>
          <span className="font-bold text-violet-600">{travels.totalCountries}</span>{' '}
          <span className="text-gray-600">{travels.statsText.countries}</span>
          {' → '}
          <span className="font-bold text-violet-600">{travels.totalVisits}</span>{' '}
          <span className="text-gray-600">{travels.statsText.visits}</span>
        </p>
      </div>

      {/* First Row: Asia, Africa, Middle East */}
      <div className="mb-6 grid gap-6 md:mb-8 md:grid-cols-3 md:gap-4 lg:gap-6">
        {[travels.regions.asia, travels.regions.africa, travels.regions.middleEast].map(
          (region: TravelRegion) => (
            <div key={region.name}>
              <h4 className="mb-3 text-lg font-semibold text-gray-800 md:text-xl">{region.name}</h4>

              <div className="grid gap-2 sm:grid-cols-2 sm:gap-2.5 md:grid-cols-1 md:gap-3 lg:grid-cols-1">
                {region.countries.map((country, index) => (
                  <CountryCard key={`${country.name}-${index}`} country={country} />
                ))}
              </div>
            </div>
          ),
        )}
      </div>

      {/* Second Row: Europe */}
      <div>
        <h4 className="mb-3 text-lg font-semibold text-gray-800 md:text-xl">
          {travels.regions.europe.name}
        </h4>

        <div className="grid gap-2 sm:grid-cols-2 sm:gap-2.5 md:grid-cols-3 md:gap-3 lg:grid-cols-4">
          {travels.regions.europe.countries.map((country, index) => (
            <CountryCard key={`${country.name}-${index}`} country={country} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default WhoIAmTravelsList
