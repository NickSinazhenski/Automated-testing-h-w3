const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const CheckboxPage = require('../../pages/CheckboxPage');
const DataGenerator = require('../../utils/DataGenerator');

Given('I am on the checkbox page', async function() {
  await this.page.goto('https://demoqa.com/checkbox', { waitUntil: 'networkidle' });
});

When('I expand all checkboxes', async function() {
  this.checkboxPage = new CheckboxPage(this.page);
  await this.checkboxPage.expandAllCheckboxes();
});

When('I select a random checkbox', async function() {
  const checkboxName = DataGenerator.generateCheckboxName();
  await this.page.click(`text=${checkboxName}`);
  this.selectedCheckbox = checkboxName;
});

When('I select the {string} checkbox', async function(checkbox) {
  await this.page.click(`text=${checkbox}`);
  this.selectedCheckbox = checkbox;
});

Then('the selected checkbox should be checked', async function() {
  const resultText = await this.checkboxPage.getResultText();
  expect(resultText.toLowerCase()).toContain(this.selectedCheckbox.toLowerCase());
});

Then('the {string} checkbox should be checked', async function(checkbox) {
  const checkboxElement = await this.page.locator(`text=${checkbox}`);
  const isChecked = await checkboxElement.isChecked();
  expect(isChecked).toBe(true);
});