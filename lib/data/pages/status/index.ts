import { TEXT_DATA } from '@/localization/english-texts-data'

import { statusBadgeImgsUrls } from '@/lib/utils/constants/urls/statusBadgesUrls'
import { createStatusBadge } from '@/lib/utils/helpers/createStatusBadge'
import { StatusBadge } from '@/lib/utils/typeDefinitions/interfaces'

// Text labels for different status badges
const BADGE_TEXT = {
  JEST_TESTS: TEXT_DATA.tests.jest,
  PLAYWRIGHT_TESTS: TEXT_DATA.tests.playwright,
  PRETTIER_CHECK_FORMATTING: TEXT_DATA.code.prettier,
  PULL_REQUEST_LABELER: TEXT_DATA.automation.prLabeler,
  AUTO_AUTHOR_ASSIGN: TEXT_DATA.automation.authorAssign,
  CODEQL: TEXT_DATA.code.codeql,
  CODE_QUALITY: TEXT_DATA.code.quality,
  DEPENDABOT: TEXT_DATA.automation.dependabot,
  NETLIFY: TEXT_DATA.deployment.netlify,
  UPTIME: TEXT_DATA.deployment.uptime,
}

// Dimensions for different status badges
const BADGE_DIMENSIONS = {
  JEST_TESTS: { width: 132, height: 20 },
  PLAYWRIGHT_TESTS: { width: 167, height: 20 },
  PRETTIER_CHECK_FORMATTING: { width: 220, height: 20 },
  PULL_REQUEST_LABELER: { width: 188, height: 20 },
  AUTO_AUTHOR_ASSIGN: { width: 184, height: 20 },
  CODEQL: { width: 120, height: 20 },
  CODE_QUALITY: { width: 120, height: 20 },
  DEPENDABOT: { width: 130, height: 20 },
  NETLIFY: { width: 118, height: 20 },
  UPTIME: { width: 88, height: 20 },
}

// Array of status badges
export const statusBadges: StatusBadge[] = [
  createStatusBadge(
    0,
    BADGE_TEXT.JEST_TESTS,
    statusBadgeImgsUrls.JEST_TEST,
    BADGE_TEXT.JEST_TESTS,
    BADGE_DIMENSIONS.JEST_TESTS.width,
    BADGE_DIMENSIONS.JEST_TESTS.height,
  ),
  createStatusBadge(
    1,
    BADGE_TEXT.PLAYWRIGHT_TESTS,
    statusBadgeImgsUrls.PLAYWRIGHT_TEST,
    BADGE_TEXT.PLAYWRIGHT_TESTS,
    BADGE_DIMENSIONS.PLAYWRIGHT_TESTS.width,
    BADGE_DIMENSIONS.PLAYWRIGHT_TESTS.height,
  ),
  createStatusBadge(
    2,
    BADGE_TEXT.PRETTIER_CHECK_FORMATTING,
    statusBadgeImgsUrls.PRETTIER_CHECK_FORMATTING,
    BADGE_TEXT.PRETTIER_CHECK_FORMATTING,
    BADGE_DIMENSIONS.PRETTIER_CHECK_FORMATTING.width,
    BADGE_DIMENSIONS.PRETTIER_CHECK_FORMATTING.height,
  ),
  createStatusBadge(
    3,
    BADGE_TEXT.PULL_REQUEST_LABELER,
    statusBadgeImgsUrls.PULL_REQUEST_LABELER,
    BADGE_TEXT.PULL_REQUEST_LABELER,
    BADGE_DIMENSIONS.PULL_REQUEST_LABELER.width,
    BADGE_DIMENSIONS.PULL_REQUEST_LABELER.height,
  ),
  createStatusBadge(
    4,
    BADGE_TEXT.AUTO_AUTHOR_ASSIGN,
    statusBadgeImgsUrls.AUTO_AUTHOR_ASSIGN,
    BADGE_TEXT.AUTO_AUTHOR_ASSIGN,
    BADGE_DIMENSIONS.AUTO_AUTHOR_ASSIGN.width,
    BADGE_DIMENSIONS.AUTO_AUTHOR_ASSIGN.height,
  ),
  createStatusBadge(
    5,
    BADGE_TEXT.CODEQL,
    statusBadgeImgsUrls.CODEQL,
    BADGE_TEXT.CODEQL,
    BADGE_DIMENSIONS.CODEQL.width,
    BADGE_DIMENSIONS.CODEQL.height,
  ),
  createStatusBadge(
    6,
    BADGE_TEXT.CODE_QUALITY,
    statusBadgeImgsUrls.CODE_QUALITY,
    BADGE_TEXT.CODE_QUALITY,
    BADGE_DIMENSIONS.CODE_QUALITY.width,
    BADGE_DIMENSIONS.CODE_QUALITY.height,
  ),
  createStatusBadge(
    7,
    BADGE_TEXT.DEPENDABOT,
    statusBadgeImgsUrls.DEPENDABOT,
    BADGE_TEXT.DEPENDABOT,
    BADGE_DIMENSIONS.DEPENDABOT.width,
    BADGE_DIMENSIONS.DEPENDABOT.height,
  ),
  createStatusBadge(
    8,
    BADGE_TEXT.NETLIFY,
    statusBadgeImgsUrls.NETLIFY,
    BADGE_TEXT.NETLIFY,
    BADGE_DIMENSIONS.NETLIFY.width,
    BADGE_DIMENSIONS.NETLIFY.height,
  ),
  createStatusBadge(
    9,
    BADGE_TEXT.UPTIME,
    statusBadgeImgsUrls.UPTIME,
    BADGE_TEXT.UPTIME,
    BADGE_DIMENSIONS.UPTIME.width,
    BADGE_DIMENSIONS.UPTIME.height,
  ),
]
