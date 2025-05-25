const { When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');

When('I drag the element to the drop target', async function() {
  // Get initial positions
  this.initialPositions = await this.dragAndDropPage.getInitialPositions();
  
  // Perform drag and drop with retry
  let attempts = 0;
  const maxAttempts = 3;
  
  while (attempts < maxAttempts) {
    try {
      await this.dragAndDropPage.performDragAndDrop();
      break;
    } catch (error) {
      attempts++;
      if (attempts === maxAttempts) {
        throw new Error(`Failed to perform drag and drop after ${maxAttempts} attempts: ${error.message}`);
      }
      console.log(`Retry attempt ${attempts} for drag and drop`);
      await this.page.waitForTimeout(1000);
    }
  }
});

Then('the element should be dropped successfully', async function() {
  const droppableText = await this.dragAndDropPage.getDroppableText();
  expect(droppableText).toBe('Dropped!');
});

Then('the drop target should display {string}', async function(expectedText) {
  const dropTargetText = await this.page.locator('#simpleDropContainer #droppable > p').innerText();
  expect(dropTargetText.startsWith(expectedText)).toBeTruthy();
}); 
