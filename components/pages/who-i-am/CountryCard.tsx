import { TravelCountry } from '@/lib/utils/typeDefinitions/interfaces'
import { getFlagAriaLabel, getVisitCountColor } from './CountryCard.utils'

const CountryCard = ({ country }: { country: TravelCountry }) => (
  <div className="flex items-center justify-between rounded-lg border border-gray-200 bg-white px-4 py-2 transition-shadow duration-300 ease-in-out select-none hover:border-gray-300 hover:shadow-md">
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

export default CountryCard
