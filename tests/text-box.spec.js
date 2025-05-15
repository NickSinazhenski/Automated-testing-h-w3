import { test } from '@playwright/test';
import TextBoxPage_test_user from '../fixtures/TextBoxPage_test_user';
import { TextBox } from '../pages/TextBoxPage';

test('Fill and verify text box form', async ({ page }) => {
  const textBoxPage = new TextBox(page);
  await textBoxPage.navigate();
  await textBoxPage.fillForm(TextBoxPage_test_user);
  await textBoxPage.submitForm();
  await textBoxPage.checkOutput(TextBoxPage_test_user);
});