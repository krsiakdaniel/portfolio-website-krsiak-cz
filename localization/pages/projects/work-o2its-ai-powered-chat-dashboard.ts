import { NB_HYPHEN } from '@/lib/utils/constants/specialCharacters'
import { PAGES_URL } from '@/lib/utils/constants/urls/pageUrls'

export const PROJECTS_WORK_O2ITS_AI_CHAT_DASHBOARD = {
  sections: {
    responsibility: {
      title: 'My Job',
      items: [
        'I modernized and unified the\u00A0frontend codebase, standardizing styling, form validation, and\u00A0test coverage across the\u00A0application.',
      ],
    },
    features: {
      title: 'Key Contributions',
      items: [
        'Built the\u00A0Settings page from scratch and scaffolded the\u00A0full Integrations module for API\u00A0keys, connectors, and misc forms.',
        'Added favorites for\u00A0conversations and files, full-text conversation search, and time-category grouping for\u00A0chat history.',
        'Unified the\u00A0entire application styling from a\u00A0mixed Emotion/sx approach to\u00A0a\u00A0consistent MUI\u00A0sx system.',
        'Introduced Zod\u00A0+ React Hook Form as the\u00A0standard validation layer across all forms.',
        'Added comprehensive data-testid coverage for\u00A0QA\u00A0automation.',
      ],
    },
    note: {
      title: 'Screenshots are confidential',
      items: [
        'Due to\u00A0confidentiality, I\u00A0cannot share actual screenshots from\u00A0the\u00A0enterprise application.',
      ],
    },
  },
}

export const PROJECTS_WORK_O2ITS_AI_CHAT_DASHBOARD_OVERVIEW = {
  title: `AI${NB_HYPHEN}Powered Chat Dashboard`,
  company: 'O2\u00A0IT\u00A0Services',
  role: 'React Developer',
  years: '9\u00A0months',
  description:
    'I\u00A0built an\u00A0AI-powered chat application dashboard with integrated AI\u00A0tools for\u00A0document analysis.',
  linkText: 'Project details',
  customers: 'Enterprise clients',
  linkProjectPage: PAGES_URL.workO2itsAiPoweredChatDashboard,
}
