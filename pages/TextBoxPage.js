const BasePage = require('./BasePage');
const { expect } = require('@playwright/test');

class TextBoxPage extends BasePage {
  constructor(page) {
    super(page);
    this.selectors = {
      fullNameInput: '#userName',
      emailInput: '#userEmail',
      currentAddressInput: '#currentAddress',
      permanentAddressInput: '#permanentAddress',
      submitBtn: '#submit',
      output: '#output',
      nameOutput: 'p#name',
      emailOutput: 'p#email',
      currentAddressOutput: 'p#currentAddress',
      permanentAddressOutput: 'p#permanentAddress'
    };
  }
  
  async navigate() {
    await this.navigateToPage('https://demoqa.com/text-box');
  }
  
  async fillForm(user) {
    await this.fillInput(this.selectors.fullNameInput, `${user.firstName} ${user.lastName}`);
    await this.fillInput(this.selectors.emailInput, user.email);
    await this.fillInput(this.selectors.currentAddressInput, user.currentAddress);
    await this.fillInput(this.selectors.permanentAddressInput, user.permanentAddress);
  }
  
  async submitForm() {
    await this.clickElement(this.selectors.submitBtn);
  }

  async checkOutput(user) {
    await this.waitForElement(this.selectors.output);
    
    const output = this.page.locator(this.selectors.output);
    
    await this.waitForElement(this.selectors.nameOutput);
    await this.waitForElement(this.selectors.emailOutput);
    await this.waitForElement(this.selectors.currentAddressOutput);
    await this.waitForElement(this.selectors.permanentAddressOutput);
    
    const nameText = await this.getText(this.selectors.nameOutput);
    const emailText = await this.getText(this.selectors.emailOutput);
    const currentAddressText = await this.getText(this.selectors.currentAddressOutput);
    const permanentAddressText = await this.getText(this.selectors.permanentAddressOutput);

    expect(nameText.trim()).toBe(`Name:${user.firstName} ${user.lastName}`);
    expect(emailText.trim()).toBe(`Email:${user.email}`);
    expect(currentAddressText.trim()).toBe(`Current Address :${user.currentAddress}`);
    expect(permanentAddressText.trim()).toBe(`Permananet Address :${user.permanentAddress}`);
  }
}

module.exports = TextBoxPage;
