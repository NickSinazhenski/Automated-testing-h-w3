const { When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const DataGenerator = require('../../utils/DataGenerator');

When('I select a future date', async function() {
  const date = DataGenerator.generateDate();
  await this.datePickerPage.fillDate(date.fullDate);
  this.expectedDate = date.displayDate;
});

Then('the date should be updated in the input field', async function() {
  const actualDate = await this.datePickerPage.getSelectedDate();
  expect(actualDate).toContain(this.expectedDate);
}); 