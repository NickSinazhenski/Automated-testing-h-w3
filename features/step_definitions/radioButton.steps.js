const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const RadioButtonPage = require('../../pages/RadioButtonPage');
const BasePage = require('../../pages/BasePage');

Given('I am on the radio button page', async function() {
  this.radioButtonPage = await BasePage.initializePage(this.page, RadioButtonPage, 'https://demoqa.com/radio-button');
});

When('I select the {string} radio button', async function(option) {
  await this.radioButtonPage.selectRadioButton(option);
});

Then('I should see the result {string}', async function(expectedText) {
  const actualText = await this.radioButtonPage.getResultText();
  expect(actualText).toContain(expectedText);
}); 