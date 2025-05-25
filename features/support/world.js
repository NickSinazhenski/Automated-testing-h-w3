const { setWorldConstructor } = require('@cucumber/cucumber');
const { chromium, firefox } = require('playwright');

class CustomWorld {
  constructor() {
    this.page = null;
    this.browser = null;
    this.context = null;
    this.browserType = process.env.BROWSER || 'chrome';
  }

  async init() {
    const browserOptions = { headless: false };
    
    switch(this.browserType.toLowerCase()) {
      case 'firefox':
        this.browser = await firefox.launch(browserOptions);
        break;
      case 'chrome':
      default:
        this.browser = await chromium.launch(browserOptions);
        break;
    }
    
    this.context = await this.browser.newContext();
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