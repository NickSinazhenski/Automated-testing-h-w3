const { When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const DatePickerPage = require('../../pages/DatePickerPage');
const DataGenerator = require('../../utils/DataGenerator');

When('I select a random future date', async function() {
  this.datePickerPage = new DatePickerPage(this.page);
  const dateData = DataGenerator.generateDate();
  await this.datePickerPage.fillDate(dateData.fullDate);
  this.expectedDate = dateData.displayDate;
});

Then('the selected date should be displayed in the correct format', async function() {
  const actualDate = await this.datePickerPage.getSelectedDate();
  expect(actualDate).toBe(this.expectedDate);
}); 