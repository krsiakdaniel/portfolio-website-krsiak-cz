import { PAGES_URL } from '@/lib/utils/constants/urls/pageUrls'
import { createPageMetadata } from '@/lib/utils/helpers/metadata/createPageMetadata'

import O2itsAiPoweredChatDashboardOG from '@/public/images/png/open-graph/pages/work-experience/o2its-ai-powered-chat-dashboard/o2its-ai-powered-chat-dashboard-og.png'
import O2itsAiPoweredChatDashboardTwitter from '@/public/images/png/open-graph/pages/work-experience/o2its-ai-powered-chat-dashboard/o2its-ai-powered-chat-dashboard-twitter.png'

import { META_O2ITS_AI_POWERED_CHAT_DASHBOARD } from './localization'

export const metaDataO2itsAiPoweredChatDashboard = createPageMetadata({
  meta: META_O2ITS_AI_POWERED_CHAT_DASHBOARD,
  pageUrl: PAGES_URL.workO2itsAiPoweredChatDashboard,
  ogImage: O2itsAiPoweredChatDashboardOG,
  twitterImage: O2itsAiPoweredChatDashboardTwitter,
})
