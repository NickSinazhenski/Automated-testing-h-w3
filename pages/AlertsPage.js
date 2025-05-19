class AlertsPage {
  constructor(page) {
    this.page = page;
    this.url = 'https://demoqa.com/alerts';
    this.alertButton = '#alertButton';
    this.timerAlertButton = '#timerAlertButton';
    this.confirmButton = '#confirmButton';
    this.promptButton = '#promtButton';
    this.confirmResult = '#confirmResult';
    this.promptResult = '#promptResult';
  }

  async open() {
    await this.page.goto(this.url);
  }

  async clickAlertButton() {
    await this.page.click(this.alertButton);
  }

  async clickTimerAlertButton() {
    await this.page.click(this.timerAlertButton);
  }

  async clickConfirmButton() {
    await this.page.click(this.confirmButton);
  }

  async clickPromptButton() {
    await this.page.click(this.promptButton);
  }

  async getConfirmResult() {
    return await this.page.textContent(this.confirmResult);
  }

  async getPromptResult() {
    return await this.page.textContent(this.promptResult);
  }
}

module.exports = { AlertsPage };
