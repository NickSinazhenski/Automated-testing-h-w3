export class HomePage {
  constructor(page) {
    this.page = page;
    this.url = 'https://demoqa.com/';
    this.categoryCard = '.card-body >> text=';
  }
  async navigate() {
    await this.page.goto(this.url);
  }
  async clickCategory(name) {
    await this.page.locator(this.categoryCard + name).click();
  }
}