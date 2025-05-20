const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');

Given('I am on the radio button page', async function() {
  await this.page.goto('https://demoqa.com/radio-button', { waitUntil: 'load' });
});

When('I select the {string} radio button', async function(option) {
  const radioLabelSelector = `//label[text()="${option}"]`;
  await this.page.locator(radioLabelSelector).click();
});

Then('the text {string} should be displayed in the result', async function(expectedText) {
  const resultText = await this.page.locator('.text-success').innerText();
  expect(resultText).toBe(expectedText);
}); 