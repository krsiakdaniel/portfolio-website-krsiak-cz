/* eslint-disable react-hooks/rules-of-hooks */
// Disable react-hooks rule: Playwright's 'use' function is not a React Hook
import { test as base } from '@playwright/test'

// Portfolio-specific test data fixtures
// Use these in Playwright tests to access consistent test data

type Project = {
  id: string
  title: string
  company?: string
  type: 'work' | 'personal'
  url: string
  technologies: string[]
  description: string
}

type Testimonial = {
  id: string
  author: string
  role: string
  company: string
  text: string
  avatarUrl?: string
}

type Skill = {
  id: string
  name: string
  category: 'frontend' | 'backend' | 'tools' | 'other'
  yearsOfExperience: number
  proficiency: 'beginner' | 'intermediate' | 'advanced' | 'expert'
}

type Route = {
  path: string
  title: string
  description: string
}

// Define fixture types
type PortfolioFixtures = {
  workProjects: Project[]
  personalProjects: Project[]
  testimonials: Testimonial[]
  skills: Skill[]
  routes: Route[]
  // Convenience fixtures
  featuredProject: Project
  recentTestimonial: Testimonial
}

// Create the portfolio fixtures
export const test = base.extend<PortfolioFixtures>({
  workProjects: async (_, use) => {
    await use([
      {
        id: 'smartsupp-web',
        title: 'Smartsupp Website',
        company: 'Smartsupp',
        type: 'work',
        url: '/work-experience/smartsupp-web',
        technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
        description: 'Marketing website for Smartsupp live chat platform',
      },
      {
        id: 'groupon',
        title: 'Groupon',
        company: 'Groupon',
        type: 'work',
        url: '/work-experience/groupon',
        technologies: ['React', 'Redux', 'JavaScript'],
        description: 'E-commerce platform development',
      },
    ])
  },

  personalProjects: async (_, use) => {
    await use([
      {
        id: 'krsiak-cz',
        title: 'Portfolio Website',
        type: 'personal',
        url: '/personal-projects/krsiak',
        technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
        description: 'Personal portfolio and blog',
      },
      {
        id: 'cryptomania',
        title: 'Cryptomania',
        type: 'personal',
        url: '/personal-projects/cryptomania',
        technologies: ['React', 'API Integration', 'Chart.js'],
        description: 'Cryptocurrency price tracking application',
      },
    ])
  },

  testimonials: async (_, use) => {
    await use([
      {
        id: 'testimonial-1',
        author: 'John Doe',
        role: 'Engineering Manager',
        company: 'Tech Corp',
        text: 'Excellent developer with strong attention to detail and clean code practices.',
      },
      {
        id: 'testimonial-2',
        author: 'Jane Smith',
        role: 'Product Owner',
        company: 'Innovation Ltd',
        text: 'Great collaboration skills and ability to deliver high-quality solutions on time.',
      },
    ])
  },

  skills: async (_, use) => {
    await use([
      {
        id: 'react',
        name: 'React',
        category: 'frontend',
        yearsOfExperience: 5,
        proficiency: 'expert',
      },
      {
        id: 'typescript',
        name: 'TypeScript',
        category: 'frontend',
        yearsOfExperience: 4,
        proficiency: 'advanced',
      },
      {
        id: 'nextjs',
        name: 'Next.js',
        category: 'frontend',
        yearsOfExperience: 3,
        proficiency: 'advanced',
      },
    ])
  },

  routes: async (_, use) => {
    await use([
      { path: '/', title: 'Home', description: 'Portfolio homepage' },
      { path: '/resume', title: 'Resume', description: 'Professional resume and CV' },
      { path: '/work-experience', title: 'Work Experience', description: 'Professional projects' },
      { path: '/personal-projects', title: 'Personal Projects', description: 'Side projects' },
      { path: '/testimonials', title: 'Testimonials', description: 'Client testimonials' },
      { path: '/who-i-am', title: 'Who I Am', description: 'About me' },
      { path: '/status', title: 'Status', description: 'Website status and uptime' },
    ])
  },

  // Convenience fixtures
  featuredProject: async ({ workProjects }, use) => {
    await use(workProjects[0])
  },

  recentTestimonial: async ({ testimonials }, use) => {
    await use(testimonials[0])
  },
})

export { expect } from '@playwright/test'
