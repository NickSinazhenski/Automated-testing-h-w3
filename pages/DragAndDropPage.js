const BasePage = require('./BasePage');

class DragAndDropPage extends BasePage {
  constructor(page) {
    super(page);
    this.selectors = {
      draggable: '#draggable',
      droppable: '#simpleDropContainer #droppable',
      droppableText: '#simpleDropContainer #droppable > p'
    };
  }

  async getInitialPositions() {
    const draggable = await this.page.locator(this.selectors.draggable);
    const droppable = await this.page.locator(this.selectors.droppable);
    
    await draggable.waitFor({ state: 'visible' });
    await droppable.waitFor({ state: 'visible' });
    
    return {
      draggable: await draggable.boundingBox(),
      droppable: await droppable.boundingBox()
    };
  }

  async performDragAndDrop() {
    const maxAttempts = 3;
    let lastError = null;

    for (let attempt = 1; attempt <= maxAttempts; attempt++) {
      try {
        // Get the elements
        const draggable = this.page.locator(this.selectors.draggable);
        const droppable = this.page.locator(this.selectors.droppable);

        // Wait for elements to be ready
        await draggable.waitFor({ state: 'visible', timeout: 5000 });
        await droppable.waitFor({ state: 'visible', timeout: 5000 });

        // Get positions
        const draggableBox = await draggable.boundingBox();
        const droppableBox = await droppable.boundingBox();

        if (!draggableBox || !droppableBox) {
          throw new Error('Could not get element positions');
        }

        // Calculate center points
        const dragX = draggableBox.x + draggableBox.width / 2;
        const dragY = draggableBox.y + draggableBox.height / 2;
        const dropX = droppableBox.x + droppableBox.width / 2;
        const dropY = droppableBox.y + droppableBox.height / 2;

        // Perform the drag and drop
        await this.page.mouse.move(dragX, dragY);
        await this.page.mouse.down();
        await this.page.mouse.move(dropX, dropY);
        await this.page.mouse.up();

        // Wait for the drop animation to complete
        await this.page.waitForLoadState('networkidle');

        // Verify the drop was successful
        const droppableText = await this.getDroppableText();
        if (droppableText === 'Dropped!') {
          return; // Success
        }

        throw new Error('Drop verification failed');
      } catch (error) {
        lastError = error;
        console.log(`Drag and drop attempt ${attempt} failed: ${error.message}`);
        
        if (attempt < maxAttempts) {
          // Wait before retrying
          await this.page.waitForLoadState('networkidle');
        }
      }
    }

    throw new Error(`Failed to perform drag and drop after ${maxAttempts} attempts: ${lastError.message}`);
  }

  async getDroppableText() {
    const droppableText = this.page.locator(this.selectors.droppableText);
    await droppableText.waitFor({ state: 'visible', timeout: 5000 });
    return await droppableText.innerText();
  }
}

module.exports = DragAndDropPage; 