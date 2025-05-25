const BasePage = require('./BasePage');

class RadioButtonPage extends BasePage {
  constructor(page) {
    super(page);
    this.selectors = {
      radioButtons: {
        yes: '#yesRadio',
        impressive: '#impressiveRadio',
        no: '#noRadio'
      },
      result: '.mt-3'
    };
  }

  async selectRadioButton(option) {
    const radioButton = this.selectors.radioButtons[option.toLowerCase()];
    if (!radioButton) {
      throw new Error(`Invalid radio button option: ${option}`);
    }

    // Wait for the element to be visible and clickable
    const element = this.page.locator(radioButton);
    await element.waitFor({ state: 'visible', timeout: 5000 });
    
    // Wait for any animations to complete
    await this.page.waitForLoadState('networkidle');
    
    // Click the input directly with force option
    await element.click({ force: true });
    
    // Wait for the result text to appear
    await this.page.waitForSelector(this.selectors.result, { 
      state: 'visible',
      timeout: 5000 
    });
  }

  async getResultText() {
    return await this.getText(this.selectors.result);
  }
}

module.exports = RadioButtonPage; 