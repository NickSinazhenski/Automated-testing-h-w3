const { expect } = require('@playwright/test');

class TextBox {
    constructor(page) {
        this.page = page;
        this.url = 'https://demoqa.com/text-box';
        this.fullNameInput = '#userName';
        this.emailInput = '#userEmail';
        this.currentAddressInput = '#currentAddress';
        this.permanentAddressInput = '#permanentAddress';
        this.submitBtn = '#submit';
    }

    async navigate() {
        await this.page.goto(this.url);
    }

    async fillForm(user) {
        await this.page.fill(this.fullNameInput, `${user.firstName} ${user.lastName}`);
        await this.page.fill(this.emailInput, user.email);
        await this.page.fill(this.currentAddressInput, user.currentAddress);
        await this.page.fill(this.permanentAddressInput, user.permanentAddress);
    }

    async submitForm() {
        await this.page.click(this.submitBtn);
    }

    async checkOutput(user) {
        const modal = this.page.locator('#output');
        await modal.waitFor({ state: 'visible' });

        const nameLocator = modal.locator('p#name');
        await expect(nameLocator).toHaveText(`Name:${user.firstName} ${user.lastName}`);

        const emailLocator = modal.locator('p#email');
        await expect(emailLocator).toHaveText(`Email:${user.email}`);

        const currentAddressLocator = modal.locator('p#currentAddress');
        await expect(currentAddressLocator).toHaveText(`Current Address :${user.currentAddress} `);

        const permanentAddressLocator = modal.locator('p#permanentAddress');
        await expect(permanentAddressLocator).toHaveText(`Permananet Address :${user.permanentAddress} `);
    }
}

module.exports = { TextBox };
