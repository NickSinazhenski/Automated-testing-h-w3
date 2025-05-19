const { setWorldConstructor } = require('@cucumber/cucumber');

class CustomWorld {
  constructor() {
    this.page = null;
    this.browser = null;
    this.context = null;
  }
}

setWorldConstructor(CustomWorld);
