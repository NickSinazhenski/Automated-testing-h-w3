export class AlertsPage {
  constructor(page) {
    this.page = page;
    this.url = 'https://demoqa.com/alerts';
    this.alertBtn = '#alertButton';
    this.timerAlertBtn = '#timerAlertButton';
    this.confirmBtn = '#confirmButton';
    this.promptBtn = '#promtButton';
  }

  async navigate() {
    await this.page.goto(this.url);
  }

  async clickAlert() {
    await this.page.click(this.alertBtn);
  }

  async clickTimerAlert() {
    await this.page.click(this.timerAlertBtn);
  }

  async clickConfirm() {
    await this.page.click(this.confirmBtn);
  }

  async clickPrompt() {
    await this.page.click(this.promptBtn);
  }
}