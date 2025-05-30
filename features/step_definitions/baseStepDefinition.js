const { Given } = require('@cucumber/cucumber');
const CheckboxPage = require('../../pages/CheckboxPage');
const DatePickerPage = require('../../pages/DatePickerPage');
const RadioButtonPage = require('../../pages/RadioButtonPage');
const SliderPage = require('../../pages/SliderPage');
const DragAndDropPage = require('../../pages/DragAndDropPage');
const BasePage = require('../../pages/BasePage');
const { blockAds } = require('../../utils/blockAds');

Given('I navigate to {string}', async function(url) {
  await blockAds(this.page);
  await this.page.goto(url);
});

Given('I am on the {string} page', async function(pageName) {
  const pageMappings = {
    'checkbox': { class: CheckboxPage, url: 'https://demoqa.com/checkbox' },
    'date picker': { class: DatePickerPage, url: 'https://demoqa.com/date-picker' },
    'radio button': { class: RadioButtonPage, url: 'https://demoqa.com/radio-button' },
    'slider': { class: SliderPage, url: 'https://demoqa.com/slider' },
    'drag and drop': { class: DragAndDropPage, url: 'https://demoqa.com/droppable' }
  };
  
  const pageConfig = pageMappings[pageName.toLowerCase()];
  if (!pageConfig) {
    throw new Error(`Page "${pageName}" is not defined in the pages mapping`);
  }
  
  const pageObject = await BasePage.initializePage(this.page, pageConfig.class, pageConfig.url);
  
  // Store the page object in the appropriate property
  switch(pageName.toLowerCase()) {
    case 'checkbox':
      this.checkboxPage = pageObject;
      break;
    case 'date picker':
      this.datePickerPage = pageObject;
      break;
    case 'radio button':
      this.radioButtonPage = pageObject;
      break;
    case 'slider':
      this.sliderPage = pageObject;
      break;
    case 'drag and drop':
      this.dragAndDropPage = pageObject;
      break;
  }
}); 