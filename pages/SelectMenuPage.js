class SelectMenuPage {
  constructor(page) {
    this.page = page;
    this.url = 'https://demoqa.com/select-menu';
  }

  async open() {
    await this.page.goto(this.url);
  }

  async selectValue(value) {
    await this.page.locator('#withOptGroup').click();
    await this.page.getByText(value, { exact: true }).click();
  }

  async selectOne(value) {
    await this.page.locator('#selectOne').click();
    await this.page.getByText(value, { exact: true }).click();
  }

  async selectOldStyle(value) {
    await this.page.selectOption('#oldSelectMenu', value);
  }

  async selectMultiSelect(values) {
    const multiSelect = this.page.locator('#selectMenuContainer div[class*="css-1wa3eu0-placeholder"]');
    await multiSelect.click();
    for (const val of values) {
      await this.page.keyboard.type(val);
      await this.page.keyboard.press('Enter');
    }
  }

  async getSelectedValues() {
    return await this.page.locator('.css-12jo7m5').allTextContents();
  }
}

module.exports = { SelectMenuPage };
