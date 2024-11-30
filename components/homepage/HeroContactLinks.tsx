import { CONTACT } from '@/utils/constants'
import HeroLink from './HeroLink'

const sharedCss = 'border border-gray-300 bg-white text-neutral-900 hover:bg-gray-100 focus:ring-gray-100'

const HeroContactLinks = () => {
  return (
    <div className="mt-4 flex flex-col items-center justify-center sm:flex-row">
      <HeroLink
        href={CONTACT.email.href}
        text={CONTACT.email.text}
        className={`${sharedCss} mb-2 sm:mb-0 sm:mr-2`}
        testId="hero-link-email"
      />
      <HeroLink href={CONTACT.phone.href} text={CONTACT.phone.text} className={sharedCss} testId="hero-link-phone" />
    </div>
  )
}

export default HeroContactLinks
