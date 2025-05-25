const BasePage = require('./BasePage');

class CheckboxPage extends BasePage {
  constructor(page) {
    super(page);
    this.locators = {
      expandAllButton: '.rct-option-expand-all',
      checkbox: (name) => `//span[@class="rct-title" and text()="${name}"]/ancestor::label//span[@class="rct-checkbox"]`,
      resultText: '.display-result',
      checkboxContainer: '.rct-node'
    };
  }

  async expandAllCheckboxes() {
    try {
      await this.page.waitForSelector(this.locators.expandAllButton, { state: 'visible', timeout: 10000 });
      await this.clickElement(this.locators.expandAllButton);
      // Wait for the checkboxes to be visible after expansion
      await this.page.waitForSelector(this.locators.checkboxContainer, { state: 'visible', timeout: 10000 });
    } catch (error) {
      console.error('Failed to expand checkboxes:', error);
      throw new Error(`Failed to expand checkboxes: ${error.message}`);
    }
  }

  async selectCheckbox(name) {
    try {
      const checkboxSelector = this.locators.checkbox(name);
      await this.page.waitForSelector(checkboxSelector, { state: 'visible', timeout: 10000 });
      await this.clickElement(checkboxSelector);
      // Wait for the result text to update
      await this.page.waitForSelector(this.locators.resultText, { state: 'visible', timeout: 5000 });
    } catch (error) {
      console.error(`Failed to select checkbox "${name}":`, error);
      throw new Error(`Failed to select checkbox "${name}": ${error.message}`);
    }
  }

  async getResultText() {
    try {
      await this.page.waitForSelector(this.locators.resultText, { state: 'visible', timeout: 5000 });
      return await this.getText(this.locators.resultText);
    } catch (error) {
      console.error('Failed to get result text:', error);
      throw new Error(`Failed to get result text: ${error.message}`);
    }
  }

  async isCheckboxChecked(name) {
    try {
      const checkboxSelector = this.locators.checkbox(name);
      await this.page.waitForSelector(checkboxSelector, { state: 'visible', timeout: 10000 });
      const checkbox = this.page.locator(checkboxSelector);
      return await checkbox.isChecked();
    } catch (error) {
      console.error(`Failed to check if checkbox "${name}" is checked:`, error);
      throw new Error(`Failed to check if checkbox "${name}" is checked: ${error.message}`);
    }
  }
}

module.exports = CheckboxPage; 