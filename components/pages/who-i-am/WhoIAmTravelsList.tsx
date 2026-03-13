import Heading from '@/components/shared/Heading'

import { TravelRegion } from '@/lib/utils/typeDefinitions/interfaces'

import { WHO_I_AM } from '@/localization'

import CountryCard from './CountryCard'

const WhoIAmTravelsList = () => {
  const { travels } = WHO_I_AM

  const countriesTotalVisits =
    travels.regions.asia.continentVisits +
    travels.regions.africa.continentVisits +
    travels.regions.middleEast.continentVisits +
    travels.regions.europe.continentVisits

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
          <span className="font-bold text-violet-600">{countriesTotalVisits}</span>{' '}
          <span className="text-gray-600">{travels.statsText.visits}</span>
        </p>
      </div>

      {/* First Row: Asia, Africa, Middle East */}
      <div className="mb-6 grid gap-6 md:mb-8 md:grid-cols-3 md:gap-4 lg:grid-cols-4 lg:gap-6">
        {[travels.regions.asia, travels.regions.africa, travels.regions.middleEast].map(
          (region: TravelRegion) => (
            <div key={region.name}>
              <h4 className="mb-3 text-lg font-semibold text-gray-800 md:text-xl">
                {region.name} <span className="text-sm">({region.continentVisits})</span>
              </h4>

              <div className="grid gap-2 sm:grid-cols-2 sm:gap-2.5 md:grid-cols-1 md:gap-3">
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
          {travels.regions.europe.name}{' '}
          <span className="text-sm">({travels.regions.europe.continentVisits})</span>
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
