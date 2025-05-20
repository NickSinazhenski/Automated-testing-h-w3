const { Given, When, Then, setDefaultTimeout } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const { ToolTipsPage } = require('../../pages/ToolTipsPage');

let toolTipsPage;
let currentElementLocator;

setDefaultTimeout(20000);

Given('I am on the tool tips page', async function () {
  toolTipsPage = new ToolTipsPage(this.page);
  await toolTipsPage.navigate();
});

When('I hover over the element with selector {string}', async function (selector) {
  currentElementLocator = this.page.locator(selector);
  await currentElementLocator.hover();
});

When('I hover over the element with text {string}', async function (text) {
  currentElementLocator = this.page.locator('a', { hasText: text });
  await currentElementLocator.hover();
});

Then('I should see the tooltip text {string}', async function (expectedText) {
  const tooltipText = await toolTipsPage.getTooltipTextForElement(currentElementLocator);
  expect(tooltipText.trim()).toEqual(expectedText);
});
