class BasePage {
  constructor(page) {
    this.page = page;
    this.defaultTimeout = 10000;
  }

  static async initializePage(page, PageClass, url) {
    const pageObject = new PageClass(page);
    await pageObject.navigateToPage(url);
    return pageObject;
  }

  async navigateToPage(url) {
    await this.page.goto(url, { waitUntil: 'networkidle' });
  }

  async clickElement(locator, options = {}) {
    try {
      const element = this.page.locator(locator);
      await element.waitFor({ 
        state: 'visible', 
        timeout: options.timeout || this.defaultTimeout 
      });
      await element.click();
    } catch (error) {
      throw new Error(`Failed to click element ${locator}: ${error.message}`);
    }
  }

  async getText(locator, options = {}) {
    try {
      const element = this.page.locator(locator);
      await element.waitFor({ 
        state: 'visible', 
        timeout: options.timeout || this.defaultTimeout 
      });
      return await element.innerText();
    } catch (error) {
      throw new Error(`Failed to get text from ${locator}: ${error.message}`);
    }
  }

  async getValue(locator, options = {}) {
    try {
      const element = this.page.locator(locator);
      await element.waitFor({ 
        state: 'visible', 
        timeout: options.timeout || this.defaultTimeout 
      });
      return await element.inputValue();
    } catch (error) {
      throw new Error(`Failed to get value from ${locator}: ${error.message}`);
    }
  }

  async fillInput(locator, value, options = {}) {
    try {
      const element = this.page.locator(locator);
      await element.waitFor({ 
        state: 'visible', 
        timeout: options.timeout || this.defaultTimeout 
      });
      await element.fill(value);
    } catch (error) {
      throw new Error(`Failed to fill input ${locator}: ${error.message}`);
    }
  }

  async waitForElement(locator, options = {}) {
    try {
      await this.page.locator(locator).waitFor({ 
        state: 'visible', 
        timeout: options.timeout || this.defaultTimeout 
      });
    } catch (error) {
      throw new Error(`Failed to wait for element ${locator}: ${error.message}`);
    }
  }

  async isElementVisible(locator, options = {}) {
    try {
      return await this.page.locator(locator).isVisible();
    } catch (error) {
      throw new Error(`Failed to check visibility of ${locator}: ${error.message}`);
    }
  }

  async getElementPosition(locator) {
    try {
      const element = this.page.locator(locator);
      await element.waitFor({ state: 'visible' });
      const box = await element.boundingBox();
      return {
        x: box.x + box.width / 2,
        y: box.y + box.height / 2
      };
    } catch (error) {
      throw new Error(`Failed to get position of ${locator}: ${error.message}`);
    }
  }

  async waitForNetworkIdle() {
    try {
      await this.page.waitForLoadState('networkidle');
    } catch (error) {
      throw new Error(`Failed to wait for network idle: ${error.message}`);
    }
  }
}

module.exports = BasePage; 