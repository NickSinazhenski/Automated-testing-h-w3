import { defineConfig } from '@playwright/test';

export default defineConfig({
  timeout: 30000,
  retries: 1,
  testDir: './tests',
  use: {
    browserName: 'chromium',
    headless: true,
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure',
    viewport: { width: 1920, height: 1080 },
  },
  projects: [
  {
    name: 'Chrome-1920',
    use: { browserName: 'chromium', viewport: { width: 1920, height: 1080 } }
  },
  {
    name: 'Chrome-1366',
    use: { browserName: 'chromium', viewport: { width: 1366, height: 768 } }
  },
  {
    name: 'Firefox-1920',
    use: { browserName: 'firefox', viewport: { width: 1920, height: 1080 } }
  },
  {
    name: 'Firefox-1366',
    use: { browserName: 'firefox', viewport: { width: 1366, height: 768 } }
  }
]
});