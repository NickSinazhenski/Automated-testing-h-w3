const { When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const DataGenerator = require('../../utils/DataGenerator');

When('I move the slider to a random value', async function() {
  const value = DataGenerator.generateSliderValue();
  await this.sliderPage.moveSlider(value);
  this.expectedValue = value;
});

Then('the slider value should be within the expected range', async function() {
  const actualValue = await this.sliderPage.getCurrentSliderValue();
  const tolerance = 2;
  expect(Math.abs(Number(actualValue) - this.expectedValue)).toBeLessThanOrEqual(tolerance);
}); 