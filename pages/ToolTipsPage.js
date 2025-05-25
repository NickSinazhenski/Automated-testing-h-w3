const { expect } = require('@playwright/test');

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
    await this.page.goto(this.url);
  }
 
  async getTooltipTextForElement(elementLocator) {
    await elementLocator.scrollIntoViewIfNeeded();
    await elementLocator.hover();
    const tooltip = this.page.locator('.tooltip.show .tooltip-inner');
    await tooltip.waitFor({ state: 'visible' });
    return tooltip.textContent();
  }

  
}

module.exports = { ToolTipsPage };
