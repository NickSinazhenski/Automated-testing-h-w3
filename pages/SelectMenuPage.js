onst BasePage = require('./BasePage');

class SelectMenuPage extends BasePage {
  constructor(page) {
    super(page);
    this.selectors = {
      valueSelect: '#withOptGroup',
      oneSelect: '#selectOne',
      oldStyleSelect: '#oldSelectMenu',
      multiSelect: '#selectMenuContainer div[class*="css-1wa3eu0-placeholder"]',
      selectedValues: '.css-12jo7m5'
    };
  }

  async open() {
    await this.page.navigateToPage('https://demoqa.com/select-menu');
  }

   async selectValue(value) {
    await this.clickElement(this.selectors.valueSelect);
    await this.page.getByText(value, { exact: true }).click();
  }

  async selectOne(value) {
    await this.page.locator('#selectOne').click();
    await this.page.getByText(value, { exact: true }).click();
  }

  async selectOldStyle(value) {
    await this.page.selectOption(this.selectors.oldStyleSelect, value);
  }

  async selectMultiSelect(values) {
    await this.clickElement(this.selectors.multiSelect);
    for (const val of values) {
      await this.page.keyboard.type(val);
      await this.page.keyboard.press('Enter');
    }
  }

  async getSelectedValues() {
    const selectedElements = this.page.locator(this.selectors.selectedValues);
    await selectedElements.first().waitFor({ state: 'visible' });
    return await selectedElements.allTextContents();
  }
}

module.exports = SelectMenuPage;
