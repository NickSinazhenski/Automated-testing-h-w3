const { Given, When, Then, setDefaultTimeout } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const { TextBox } = require('../../pages/TextBoxPage');
const { faker } = require('@faker-js/faker');

let textBoxPage;
let userData;

setDefaultTimeout(20000);

Given('the user navigates to the text box form', async function () {
  textBoxPage = new TextBox(this.page);
  await textBoxPage.navigate();
});

When('the user inputs randomly generated form data', async function () {
  userData = {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email(),
    currentAddress: faker.location.streetAddress(),
    permanentAddress: faker.location.streetAddress(),
  };

  await textBoxPage.fillForm(userData);
});

When('submits the completed form', async function () {
  await textBoxPage.submitForm();
});

Then('the form output should match the entered values', async function () {
  await textBoxPage.checkOutput(userData);
});
