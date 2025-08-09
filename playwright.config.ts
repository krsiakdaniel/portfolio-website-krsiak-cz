import { defineConfig, devices } from '@playwright/test'

// Timeouts (in seconds)
const TIMEOUT_60_SECONDS = 60 * 1000
const TIMEOUT_120_SECONDS = 120 * 1000

// CI specific configurations
const CI_WORKERS = 3
const CI_RETRIES = 2

// Viewport dimensions
const VIEWPORT_WIDTH = 1280
const VIEWPORT_HEIGHT = 720

// Server configuration
const URL_LOCALHOST = 'http://localhost:3000'

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

export default defineConfig({
  // Look for test files in the "tests" directory, relative to this configuration file.
  testDir: './__tests__/playwright',

  // Timeout for each test
  timeout: TIMEOUT_60_SECONDS,

  // Ignore tests in the "mobile" folder
  testIgnore: ['**/mobile/**'],

  // Run tests in files in parallel
  fullyParallel: true,

  // Fail the build on CI if you accidentally left test.only in the source code.
  forbidOnly: !!process.env['CI'],

  // Retry on CI only
  retries: process.env['CI'] ? CI_RETRIES : 0,

  // Opt out of parallel tests on CI. On localhost omit workers to use CPU-based default.
  ...(process.env['CI'] ? { workers: CI_WORKERS } : {}),

  //Reporter to use. https://playwright.dev/docs/test-reporters
  reporter: process.env['CI']
    ? 'list' // Use list reporter in CI for console output
    : 'html', // Use HTML reporter locally for better debugging

  // Shared settings for all the projects below. https://playwright.dev/docs/api/class-testoptions.
  use: {
    // Base URL to use in actions like `await page.goto('/')`.
    baseURL: URL_LOCALHOST,

    // Collect trace when retrying the failed test
    trace: process.env['CI'] ? 'on-first-retry' : 'retain-on-failure',

    // Capture screenshots only on test failures
    screenshot: 'only-on-failure',

    // Add viewport size for consistency
    viewport: { width: VIEWPORT_WIDTH, height: VIEWPORT_HEIGHT },
  },

  // Configure projects for major browsers
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },

    // Test against mobile viewports.
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    // Test against branded browsers.
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /**
   * RUN LOCAL SERVER
   * It runs server in the background so it can run tests.
   * Bun is used in GitHub Actions to run the server on GitHub CI.
   */
  webServer: {
    command: 'bun dev',
    url: URL_LOCALHOST,
    reuseExistingServer: !process.env['CI'],
    timeout: TIMEOUT_120_SECONDS,
    stderr: 'pipe',
    stdout: 'pipe',
  },
})
