const BasePage = require('./BasePage');

class DragAndDropPage extends BasePage {
  constructor(page) {
    super(page);
    this.locators = {
      draggable: '#draggable',
      droppable: '#simpleDropContainer #droppable',
      droppableText: '#simpleDropContainer #droppable p'
    };
  }

  async getInitialPositions() {
    const draggablePos = await this.getElementPosition(this.locators.draggable);
    const droppablePos = await this.getElementPosition(this.locators.droppable);
    return { draggablePos, droppablePos };
  }

  async performDragAndDrop() {
    const draggable = this.page.locator(this.locators.draggable);
    const droppable = this.page.locator(this.locators.droppable);
    
    await draggable.waitFor({ state: 'visible' });
    await droppable.waitFor({ state: 'visible' });
    
    await draggable.dragTo(droppable);
  }

  async getDroppableText() {
    return await this.getText(this.locators.droppableText);
  }
}

module.exports = DragAndDropPage; 