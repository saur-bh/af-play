import { PlaywrightTestConfig } from '@playwright/test';
import { testConfig } from './testConfig';


const baseURLFromEnv = process.env.BASE_URL; // Get base URL from environment variable
const baseURL = baseURLFromEnv || testConfig["ENV"]; // Use BASE_URL if provided, otherwise fallback to testConfig[ENV]
const config: PlaywrightTestConfig = {
  // Global Setup to run before all tests
  globalSetup: `./global-setup`,

  // Sets timeout for each test case
  timeout: 120000,

  // Number of retries if test case fails
  retries: 0,

  // Reporters
  reporter: [
    [`./CustomReporterConfig.ts`],
    [`html`, { outputFolder: 'html-report', open: 'never' }]
  ],

  projects: [
    {
      name: `Chrome`,
      use: {
        browserName: `chromium`,
        channel: `chrome`,
        baseURL: baseURL,
        headless: false,
        viewport: { width: 1500, height: 730 },
        ignoreHTTPSErrors: true,
        acceptDownloads: true,
        screenshot: `only-on-failure`,
        video: `retain-on-failure`,
        trace: `retain-on-failure`,
        launchOptions: {
          slowMo: 0
        }
      },
    },
    {
      name: `Chromium`,
      use: {
        browserName: `chromium`,
        baseURL: baseURL,
        headless: false,
        viewport: { width: 1500, height: 730 },
        ignoreHTTPSErrors: true,
        acceptDownloads: true,
        screenshot: `only-on-failure`,
        video: `retain-on-failure`,
        trace: `retain-on-failure`,
        launchOptions: {
          slowMo: 0
        }
      },
    },
    {
      name: `Firefox`,
      use: {
        browserName: `firefox`,
        baseURL: baseURL,
        headless: false,
        viewport: { width: 1500, height: 730 },
        ignoreHTTPSErrors: true,
        acceptDownloads: true,
        screenshot: `only-on-failure`,
        video: `retain-on-failure`,
        trace: `retain-on-failure`,
        launchOptions: {
          slowMo: 0
        }
      },
    },
    {
      name: `Edge`,
      use: {
        browserName: `chromium`,
        channel: `msedge`,
        baseURL: baseURL,
        headless: false,
        viewport: { width: 1500, height: 730 },
        ignoreHTTPSErrors: true,
        acceptDownloads: true,
        screenshot: `only-on-failure`,
        video: `retain-on-failure`,
        trace: `retain-on-failure`,
        launchOptions: {
          slowMo: 0
        }
      },
    },
    {
      name: `WebKit`,
      use: {
        browserName: `webkit`,
        baseURL: baseURL,
        headless: false,
        viewport: { width: 1500, height: 730 },
        ignoreHTTPSErrors: true,
        acceptDownloads: true,
        screenshot: `only-on-failure`,
        video: `retain-on-failure`,
        trace: `retain-on-failure`,
        launchOptions: {
          slowMo: 0
        }
      },
    },
    {
      name: `API`,
      use: {
        baseURL: baseURL
      }
    }
  ],
};

export default config;