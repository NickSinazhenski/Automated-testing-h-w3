const { Given } = require('@cucumber/cucumber');

Given('I navigate to {string}', async function(url) {
  await this.page.goto(url, { waitUntil: 'networkidle' });
});

Given('I am on the {string} page', async function(pageName) {
  const pages = {
    'checkbox': 'https://demoqa.com/checkbox',
    'date picker': 'https://demoqa.com/date-picker',
    'radio button': 'https://demoqa.com/radio-button',
    'slider': 'https://demoqa.com/slider',
    'drag and drop': 'https://demoqa.com/droppable'
  };
  
  const url = pages[pageName.toLowerCase()];
  if (!url) {
    throw new Error(`Page "${pageName}" is not defined in the pages mapping`);
  }
  
  await this.page.goto(url, { waitUntil: 'networkidle' });
}); 