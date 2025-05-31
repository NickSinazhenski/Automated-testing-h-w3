const { expect } = require('@playwright/test');
const { blockAds } = require('../utils/blockAds');
class ToolTipsPage {
  constructor(page) {
    this.page = page;
    this.url = 'https://demoqa.com/tool-tips';

    this.button = '#toolTipButton';
    this.input = '#toolTipTextField';
    this.linkContrary = '//a[.="Contrary"]';
    this.linkVersion = '//a[.="1.10.32"]';
  }

  async navigate() {
    await blockAds(this.page);
    await this.page.goto(this.url);
  }
 
  async getTooltipTextForElement(elementLocator) {
    await elementLocator.scrollIntoViewIfNeeded();
    await elementLocator.hover();
    const tooltip = this.page.locator('.tooltip.show .tooltip-inner');
    await tooltip.waitFor({ state: 'visible' });
    return tooltip.textContent();
  }

  getElementBySelector(selector) {
    return this.page.locator(selector);
  }

  getElementByText(text) {
    return this.page.locator('a', { hasText: text });
  }
}

module.exports = { ToolTipsPage };
