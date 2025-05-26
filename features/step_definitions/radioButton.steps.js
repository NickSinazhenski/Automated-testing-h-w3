const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const RadioButtonPage = require('../../pages/RadioButtonPage');
const BasePage = require('../../pages/BasePage');

Given('I am on the radio button page', async function() {
  this.radioButtonPage = await BasePage.initializePage(this.page, RadioButtonPage, 'https://demoqa.com/radio-button');
});

When('I select the {string} radio button', async function(option) {
   await this.page.waitForLoadState('networkidle');
  await this.radioButtonPage.selectRadioButton(option);
});

Then('the text {string} should be displayed in the result', async function(expectedText) {
  const resultText = await this.radioButtonPage.getResultText();
  expect(resultText).toBe(`You have selected ${expectedText}`);
}); 