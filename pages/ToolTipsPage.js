import { expect } from '@playwright/test';

export class ToolTipsPage {
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

  async checkTooltips() {
    const tooltipElements = [
      { locator: this.button, text: 'You hovered over the Button' },
      { locator: this.input, text: 'You hovered over the text field' },
      { locator: this.linkContrary, text: 'You hovered over the Contrary' },
      { locator: this.linkVersion, text: 'You hovered over the 1.10.32' },
    ];

    for (const { locator, text } of tooltipElements) {
      await this.page.locator(this.linkContrary).waitFor({ state: 'visible' });
      await this.page.locator(locator).scrollIntoViewIfNeeded();
      await this.page.hover(locator);
      const tooltip = this.page.locator('.tooltip.show .tooltip-inner');
      await expect(tooltip).toHaveText(text);
      await this.page.mouse.move(0, 0);
    }
  }
}