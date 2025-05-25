const { Before, After, BeforeAll, AfterAll, setDefaultTimeout } = require('@cucumber/cucumber');

setDefaultTimeout(30000);

Before(async function() {
  try {
    await this.init();
  } catch (error) {
    console.error('Failed to initialize test:', error);
    throw error;
  }
});

After(async function() {
  try {
    await this.page.waitForLoadState('domcontentloaded');
    await this.close();
  } catch (error) {
    console.error('Failed to clean up test:', error);
    throw error;
  }
});

BeforeAll(async function() {
  console.log('Starting the test suite');
});

AfterAll(async function() {
  console.log('Test suite completed');
}); 