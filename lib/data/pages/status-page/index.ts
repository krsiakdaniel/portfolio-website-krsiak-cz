import { statusBadgeImgsUrls } from '@/lib/utils/constants/urls/statusBadgesUrls'

import { StatusBadge } from '@/lib/utils/typeDefinitions/interfaces'

export const statusBadges: StatusBadge[] = [
  {
    id: 0,
    name: 'Jest Tests',
    src: statusBadgeImgsUrls.JEST,
    alt: 'Jest Tests',
    width: 132,
    height: 20,
  },
  {
    id: 1,
    name: 'Playwright Tests',
    src: statusBadgeImgsUrls.PLAYWRIGHT,
    alt: 'Playwright Tests',
    width: 167,
    height: 20,
  },
  {
    id: 2,
    name: 'CodeQL',
    src: statusBadgeImgsUrls.CODEQL,
    alt: 'CodeQL',
    width: 120,
    height: 40,
  },
  {
    id: 3,
    name: 'Code Quality',
    src: statusBadgeImgsUrls.CODE_QUALITY,
    alt: 'Code Quality',
    width: 120,
    height: 20,
  },
  {
    id: 4,
    name: 'Dependabot',
    src: statusBadgeImgsUrls.DEPENDABOT,
    alt: 'Dependabot',
    width: 130,
    height: 20,
  },
  {
    id: 5,
    name: 'Netlify',
    src: statusBadgeImgsUrls.NETLIFY,
    alt: 'Netlify',
    width: 118,
    height: 20,
  },
]
