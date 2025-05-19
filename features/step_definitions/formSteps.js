const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const { FormPage } = require('../../pages/FormPage');

let formPage;

Given('I open the form page', async function () {
  formPage = new FormPage(this.page);
  await formPage.navigate();
});

When('I fill the form with:', async function (dataTable) {
  const data = dataTable.rows()[0]; 
  const user = {
    firstName: data[0],
    lastName: data[1],
    email: data[2],
    gender: Number(data[3]),
    mobile: data[4]
  };
  await formPage.fillBasicInfo(user);
});

When('I submit the form', async function () {
  await formPage.submitForm();
});

Then('I should see the submission modal with:', async function (dataTable) {
 
  const data = dataTable.rows()[0];
  const user = {
    firstName: data[0],
    lastName: data[1],
    email: data[2],
    gender: Number(data[3]),
    mobile: data[4]
  };
  await formPage.checkModal(user);
});
