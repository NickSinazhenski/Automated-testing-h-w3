const { When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const DataGenerator = require('../../utils/DataGenerator');

When('I select a random future date', async function() {
  this.testData = DataGenerator.generateDate();
  await this.datePickerPage.fillDate(this.testData.fullDate);
  this.expectedDate = this.testData.displayDate;
});

Then('the selected date should be displayed in the correct format', async function() {
  const actualDate = await this.datePickerPage.getSelectedDate();
  expect(actualDate).toBe(this.expectedDate);
}); 