export class FormPage {
  constructor(page) {
    this.page = page;
    this.url = 'https://demoqa.com/automation-practice-form';

    this.firstName = '#firstName';
    this.lastName = '#lastName';
    this.email = '#userEmail';
    this.gender = label => `label[for="gender-radio-${label}"]`; 
    this.dobInput = '#dateOfBirthInput';
    this.subjectInput = '#subjectsInput';
    this.hobby = name => `label[for="hobbies-checkbox-${name}"]`;
    this.upload = '#uploadPicture';
    this.address = '#currentAddress';
    this.state = '#state';
    this.city = '#city';
    this.submit = '#submit';
  }

  async navigate() {
    await this.page.goto(this.url);
  }

  async fillBasicInfo({ firstName, lastName, email, gender, mobile }) {
    await this.page.fill(this.firstName, firstName);
    await this.page.fill(this.lastName, lastName);
    await this.page.fill(this.email, email);
    await this.page.click(this.gender(gender)); 
    await this.page.fill(this.mobile, mobile);
  }

  async selectSubject(subject) {
    await this.page.fill(this.subjectInput, subject);
    await this.page.keyboard.press('Enter');
  }

  async selectHobby(hobbyId) {
    await this.page.click(this.hobby(hobbyId)); 
  }

  async uploadPicture(filePath) {
    await this.page.setInputFiles(this.upload, filePath);
  }

  async fillAddress(address) {
    await this.page.fill(this.address, address);
  }

  async selectStateAndCity(stateName, cityName) {
    await this.page.click(this.state);
    await this.page.getByText(stateName).click();
    await this.page.click(this.city);
    await this.page.getByText(cityName).click();
  }

  async submitForm() {
    await this.page.click(this.submit);
  }
}