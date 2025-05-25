const { When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const DataGenerator = require('../../utils/DataGenerator');

When('I move the slider to a random value', async function() {
  const value = DataGenerator.generateSliderValue();
  const slider = await this.page.locator('.range-slider');
  const box = await slider.boundingBox();
  // Calculate the position to click (value is between 0-100)
  const x = box.x + (box.width * (value / 100));
  // Click at the calculated position
  await this.page.mouse.click(x, box.y + box.height / 2);
  this.expectedValue = value;
});

Then('the slider value should be within the expected range', async function() {
  const actualValue = await this.page.inputValue('#sliderValue');
  const tolerance = 2; // Allow for small differences due to slider precision
  expect(Math.abs(Number(actualValue) - this.expectedValue)).toBeLessThanOrEqual(tolerance);
}); 