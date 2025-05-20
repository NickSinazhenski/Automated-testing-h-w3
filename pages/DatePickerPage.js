const BasePage = require('./BasePage');

class DatePickerPage extends BasePage {
  constructor(page) {
    super(page);
    this.locators = {
      dateInput: '#datePickerMonthYearInput',
      monthSelect: '.react-datepicker__month-select',
      yearSelect: '.react-datepicker__year-select',
      daySelector: (day) => `.react-datepicker__day[aria-label*="${day}"]`
    };
  }

  async fillDate(dateString) {
    const targetDate = new Date(dateString);
    const day = targetDate.getDate().toString();
    const month = targetDate.getMonth();
    const year = targetDate.getFullYear().toString();

    // Open date picker
    await this.page.click(this.locators.dateInput);
    
    // Select month
    await this.page.selectOption(this.locators.monthSelect, month.toString());
    
    // Select year
    await this.page.selectOption(this.locators.yearSelect, year);
    
    // Select day
    await this.page.click(this.locators.daySelector(day));
    
    // Wait for the date to be set
    await this.page.waitForTimeout(500);
  }

  async getSelectedDate() {
    return await this.page.inputValue(this.locators.dateInput);
  }
}

module.exports = DatePickerPage; 