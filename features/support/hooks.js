const { Before, After, BeforeAll, AfterAll, setDefaultTimeout } = require('@cucumber/cucumber');
const { chromium } = require('playwright');

setDefaultTimeout(30000);

Before(async function() {
  try {
    this.browser = await chromium.launch({ headless: false });
    this.context = await this.browser.newContext();
    this.page = await this.context.newPage();
  } catch (error) {
    console.error('Failed to initialize test:', error);
    throw error;
  }
});

After(async function() {
  try {
    await this.page.waitForLoadState('domcontentloaded');
    await this.page.close();
    await this.context.close();
    await this.browser.close();
  } catch (error) {
    console.error('Failed to clean up test:', error);
    throw error;
  }
});

const fs = require('fs');
const path = require('path');

After(async function (scenario) {
  if (scenario.result.status === 'FAILED' && this.page) {
    const dirPath = path.resolve(__dirname, '../../screenshots');
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath);
    }
    const fileName = `${scenario.pickle.name.replace(/\s+/g, '_')}.png`;
    const filePath = path.join(dirPath, fileName);
    await this.page.screenshot({ path: filePath, fullPage: true });
    console.log(`📸 Screenshot saved to: ${filePath}`);
  }
});

BeforeAll(async function() {
  console.log('Starting the test suite');
});

AfterAll(async function() {
  console.log('Test suite completed');
}); 