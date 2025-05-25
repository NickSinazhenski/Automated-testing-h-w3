const { When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const DataGenerator = require('../../utils/DataGenerator');

When('I expand all checkboxes', async function() {
  await this.checkboxPage.expandAllCheckboxes();
});

When('I select a random checkbox', async function() {
  this.checkboxName = DataGenerator.generateCheckboxName();
  await this.checkboxPage.selectCheckbox(this.checkboxName);
});

When('I select the {string} checkbox', async function(checkboxName) {
  this.checkboxName = checkboxName;
  await this.checkboxPage.selectCheckbox(checkboxName);
});

Then('the selected checkbox should be checked', async function() {
  const isChecked = await this.checkboxPage.isCheckboxChecked(this.checkboxName);
  expect(isChecked).toBeTruthy();
});

Then('the {string} checkbox should be checked', async function(checkboxName) {
  const isChecked = await this.checkboxPage.isCheckboxChecked(checkboxName);
  expect(isChecked).toBeTruthy();
});