const BasePage = require('./BasePage');

class TextBoxPage extends BasePage {
  constructor(page) {
    super(page);
    this.locators = {
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
    await this.navigateTo('https://demoqa.com/text-box');
  }
  
  async fillForm(user) {
    await this.fillInput(this.locators.fullNameInput, `${user.firstName} ${user.lastName}`);
    await this.fillInput(this.locators.emailInput, user.email);
    await this.fillInput(this.locators.currentAddressInput, user.currentAddress);
    await this.fillInput(this.locators.permanentAddressInput, user.permanentAddress);
  }
  
  async submitForm() {
    await this.clickElement(this.locators.submitBtn);
  }

  async checkOutput(user) {
    await this.waitForElement(this.locators.output);
    
    const output = this.page.locator(this.locators.output);
    
    await this.waitForElement(this.locators.nameOutput);
    await this.waitForElement(this.locators.emailOutput);
    await this.waitForElement(this.locators.currentAddressOutput);
    await this.waitForElement(this.locators.permanentAddressOutput);

    const nameText = await this.getText(this.locators.nameOutput);
    const emailText = await this.getText(this.locators.emailOutput);
    const currentAddressText = await this.getText(this.locators.currentAddressOutput);
    const permanentAddressText = await this.getText(this.locators.permanentAddressOutput);

    if (nameText !== `Name:${user.firstName} ${user.lastName}`) {
      throw new Error(`Name mismatch. Expected: Name:${user.firstName} ${user.lastName}, Got: ${nameText}`);
    }
    if (emailText !== `Email:${user.email}`) {
      throw new Error(`Email mismatch. Expected: Email:${user.email}, Got: ${emailText}`);
    }
    if (currentAddressText !== `Current Address :${user.currentAddress} `) {
      throw new Error(`Current address mismatch. Expected: Current Address :${user.currentAddress} , Got: ${currentAddressText}`);
    }
    if (permanentAddressText !== `Permananet Address :${user.permanentAddress} `) {
      throw new Error(`Permanent address mismatch. Expected: Permananet Address :${user.permanentAddress} , Got: ${permanentAddressText}`);
    }
  }
}

module.exports = TextBoxPage;
