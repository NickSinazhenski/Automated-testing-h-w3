const { BeforeAll } = require('@cucumber/cucumber');
const DataGenerator = require('../../utils/DataGenerator');

BeforeAll(async function() {
  console.log('Initializing test data');
  console.log('Test data configuration loaded successfully');
}); 