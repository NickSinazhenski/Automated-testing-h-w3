const { Given, When, Then } = require('@cucumber/cucumber');
const { AlertsPage } = require('../../pages/alertsPage');
const { expect } = require('@playwright/test');

Given('the user navigates to the Alerts section', async function () {
  this.alertPage = new AlertsPage(this.page);
  await this.alertPage.open();
});



When('they trigger a simple alert popup', async function () {
  this.dialogMessage = '';
  this.page.once('dialog', async (dialog) => {
    this.dialogMessage = dialog.message();
    await dialog.accept();
  });
  await this.alertPage.clickAlertButton();
});

Then('an alert appears with text {string}', async function (expectedMessage) {
  expect(this.dialogMessage).toBe(expectedMessage);
});




When('they activate the confirm alert and press Cancel', async function () {
  this.page.once('dialog', async (dialog) => {
    await dialog.dismiss();
  });
  await this.alertPage.clickConfirmButton();
});



When('they activate the confirm alert and press OK', async function () {
  this.page.once('dialog', async (dialog) => {
    await dialog.accept();
  });
  await this.alertPage.clickConfirmButton();
});

Then('the result area shows {string}', async function (expectedResult) {
  const result = await this.alertPage.getConfirmResult();
  expect(result).toContain(expectedResult);
});




When('the prompt alert is shown and they input {string}', async function (textInput) {
  this.page.once('dialog', async (dialog) => {
    await dialog.accept(textInput);
  });
  await this.alertPage.clickPromptButton();
});

Then('the page displays prompt result containing {string}', async function (expectedPrompt) {
  const result = await this.alertPage.getPromptResult();
  expect(result).toContain(expectedPrompt);
});




When('they click the delayed alert button and accept it',{ timeout: 10000 }, async function () {
  this.dialogMessage = '';
  this.page.once('dialog', async (dialog) => {
    this.dialogMessage = dialog.message();
    await dialog.accept();
  });
  await this.alertPage.clickTimerAlertButton();
  await this.page.waitForTimeout(6000); 
});
