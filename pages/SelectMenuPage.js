export class SelectMenuPage {
  constructor(page) {
    this.page = page;
    this.url = 'https://demoqa.com/select-menu';
  }

  async navigate() {
    await this.page.goto(this.url);
  }

  async checkSelectMenu() {
    await this.page.locator('#withOptGroup').click();
    await this.page.getByText('Group 2, option 1', { exact: true }).click();

    await this.page.locator('#selectOne').click();
    await this.page.getByText('Other', { exact: true }).click();

    await this.page.selectOption('#oldSelectMenu', 'Green');

    await this.page.locator('#selectMenuContainer div[class*="css-1wa3eu0-placeholder"]').click();
    await this.page.keyboard.type('Black');
    await this.page.keyboard.press('Enter');
    await this.page.keyboard.type('Blue');
    await this.page.keyboard.press('Enter');
  }
}