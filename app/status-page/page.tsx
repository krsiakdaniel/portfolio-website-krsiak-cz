import PageContainer from '@/components/layout/PageContainer'
import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Status page | Daniel Krsiak - React Developer',
  description:
    'Explore status page showcasing project badges for Jest Tests, Playwright Tests, CodeQL, Code Quality, Dependabot, and Netlify.',
  keywords: [
    'Daniel Krsiak',
    'Status page',
    'Project badges',
    'Jest Tests',
    'Playwright Tests',
    'CodeQL',
    'Code Quality',
    'Dependabot',
    'Netlify',
  ],
}

interface StatusBadge {
  name: string
  src: string
  alt: string
  width: number
  height: number
}

const statusBadges: StatusBadge[] = [
  {
    name: 'Jest Tests',
    src: 'https://github.com/krsiakdaniel/portfolio-website-krsiak-cz/actions/workflows/jest.yml/badge.svg',
    alt: 'Jest Tests',
    width: 132,
    height: 20,
  },
  {
    name: 'Playwright Tests',
    src: 'https://github.com/krsiakdaniel/portfolio-website-krsiak-cz/actions/workflows/playwright.yml/badge.svg',
    alt: 'Playwright Tests',
    width: 167,
    height: 20,
  },
  {
    name: 'CodeQL',
    src: 'https://github.com/krsiakdaniel/portfolio-website-krsiak-cz/actions/workflows/github-code-scanning/codeql/badge.svg',
    alt: 'CodeQL',
    width: 120,
    height: 40,
  },
  {
    name: 'Code Quality',
    src: 'https://app.codacy.com/project/badge/Grade/eaa72f9b0a7242ae9179b0dfdd58faf5',
    alt: 'Code Quality',
    width: 120,
    height: 20,
  },
  {
    name: 'Dependabot',
    src: 'https://img.shields.io/badge/Dependabot-Enabled-green',
    alt: 'Dependabot',
    width: 130,
    height: 20,
  },
  {
    name: 'Netlify',
    src: 'https://api.netlify.com/api/v1/badges/eb322254-0169-4941-9416-3806b0bd5be6/deploy-status',
    alt: 'Netlify',
    width: 118,
    height: 20,
  },
]

const StatusPage = () => {
  return (
    <PageContainer id="status-page">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold tracking-tight text-neutral-900 md:text-4xl">Status page</h1>
        <p className="mt-4 text-lg text-neutral-600">Project badges</p>

        <div className="mt-8 flex flex-col items-center">
          {statusBadges.map((item) => (
            <Image
              key={item.name}
              src={item.src}
              alt={item.alt}
              width={item.width}
              height={item.height}
              className="mb-2 last:mb-0"
            />
          ))}
        </div>
      </div>
    </PageContainer>
  )
}

export default StatusPage
