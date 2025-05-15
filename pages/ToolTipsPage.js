import { expect } from '@playwright/test';

export class ToolTipsPage {
  constructor(page) {
    this.page = page;
    this.url = 'https://demoqa.com/tool-tips';

    this.button = '#toolTipButton';
    this.input = '#toolTipTextField';
    this.linkContrary = '//a[.="Contrary"]';
    this.linkVersion = '//a[.="1.10.32"]';
    this.tooltip = '.tooltip-inner';
  }
  async navigate() {
    await this.page.goto(this.url);
  }

  async checkTooltips() {
  await this.page.locator(this.button).scrollIntoViewIfNeeded();
  await this.page.hover(this.button);
  const buttonTooltip = this.page.locator('.tooltip.show .tooltip-inner');
  await expect(buttonTooltip).toHaveText('You hovered over the Button');
  await this.page.mouse.move(0, 0);

  await this.page.locator(this.linkContrary).waitFor({ state: 'visible' });
  await this.page.locator(this.input).scrollIntoViewIfNeeded();
  await this.page.hover(this.input);
  const inputTooltip = this.page.locator('.tooltip.show .tooltip-inner');
  await expect(inputTooltip).toHaveText('You hovered over the text field');
  await this.page.mouse.move(0, 0);

  await this.page.locator(this.linkContrary).waitFor({ state: 'visible' });
  await this.page.locator(this.linkContrary).scrollIntoViewIfNeeded();
  await this.page.hover(this.linkContrary);
  const contraryTooltip = this.page.locator('.tooltip.show .tooltip-inner');
  await expect(contraryTooltip).toHaveText('You hovered over the Contrary');
  await this.page.mouse.move(0, 0);

  await this.page.locator(this.linkContrary).waitFor({ state: 'visible' });
  await this.page.locator(this.linkVersion).scrollIntoViewIfNeeded();
  await this.page.hover(this.linkVersion);
  const versionTooltip = this.page.locator('.tooltip.show .tooltip-inner');
  await expect(versionTooltip).toHaveText('You hovered over the 1.10.32');
}
}