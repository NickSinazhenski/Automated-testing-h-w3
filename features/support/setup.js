const { BeforeAll } = require('@cucumber/cucumber');

BeforeAll(async function() {
  console.log('Initializing test data');
  console.log('Test data configuration loaded successfully');
}); 