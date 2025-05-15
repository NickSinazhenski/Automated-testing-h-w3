import { expect } from '@playwright/test';
export class FormPage {
  constructor(page) {
    this.page = page;
    this.url = 'https://demoqa.com/automation-practice-form';

    this.firstName = '#firstName';
    this.lastName = '#lastName';
    this.email = '#userEmail';
    this.gender = label => `label[for="gender-radio-${label}"]`; 
    this.city = '#city';
    this.submit = '#submit';
    this.mobile = '#userNumber';
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

  async submitForm() {
    await this.page.click(this.submit);
  }

  async checkModal(user) {
    const modal = this.page.locator('.modal-content');
    await modal.waitFor({ state: 'visible' });

    const header = this.page.locator('#example-modal-sizes-title-lg');
    await expect(header).toHaveText('Thanks for submitting the form');

    const fieldMap = {
      'Student Name': `${user.firstName} ${user.lastName}`,
      'Student Email': user.email,
      'Gender': user.gender === 1 ? 'Male' : user.gender === 2 ? 'Female' : 'Other',
      'Mobile': user.mobile
    };

    for (const [label, expectedValue] of Object.entries(fieldMap)) {
      const locator = this.page.locator('td', { hasText: label }).locator('xpath=following-sibling::td');
      await expect(locator).toHaveText(expectedValue);
    }
  }
}