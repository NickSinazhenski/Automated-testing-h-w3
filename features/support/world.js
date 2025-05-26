const { setWorldConstructor } = require('@cucumber/cucumber');
const { chromium, firefox } = require('playwright');

class CustomWorld {
  constructor() {
    this.page = null;
    this.browser = null;
    this.context = null;
    this.browserType = process.env.BROWSER || 'chromium';
  }

  async init() {
  const width = parseInt(process.env.VIEWPORT_WIDTH || '1920', 10);
  const height = parseInt(process.env.VIEWPORT_HEIGHT || '1080', 10);
  const browserType = this.browserType.toLowerCase();
  const browser = browserType === 'firefox' ? firefox : chromium;

  this.browser = await browser.launch({
    headless: true, // always headless for CI
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  }); 
  this.context = await this.browser.newContext({ viewport: { width, height } });
  this.page = await this.context.newPage();
}

  async close() {
    if (this.page) {
      await this.page.close();
    }
    if (this.context) {
      await this.context.close();
    }
    if (this.browser) {
      await this.browser.close();
    }
  }
}

setWorldConstructor(CustomWorld);