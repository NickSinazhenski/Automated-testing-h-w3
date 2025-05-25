const { Given, When, Then, setDefaultTimeout } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const SelectMenuPage = require('../../pages/SelectMenuPage');

let selectMenuPage;

setDefaultTimeout(20000);

Given('I open the select menu webpage', async function () {
  selectMenuPage = new SelectMenuPage(this.page);
  await selectMenuPage.open();
});

When('I pick {string} from the {string} dropdown', async function (value, dropdown) {
  if (dropdown === 'Select Value') {
    await selectMenuPage.selectValue(value);
  }
});

When('I choose {string} from the {string} dropdown', async function (value, dropdown) {
  if (dropdown === 'Select One') {
    await selectMenuPage.selectOne(value);
  }
});

When('I select {string} in the old-style dropdown menu', async function (value) {
  await selectMenuPage.selectOldStyle(value);
});

When('I pick multiple colors: {string} and {string}', async function (color1, color2) {
  await selectMenuPage.selectMultiSelect([color1, color2]);
});

Then('the selected colors should include {string} and {string}', async function (color1, color2) {
  const selected = await selectMenuPage.getSelectedValues();
  expect(selected).toContain(color1);
  expect(selected).toContain(color2);
});
