const BasePage = require('./BasePage');

class DatePickerPage extends BasePage {
  constructor(page) {
    super(page);
    this.selectors = {
      dateInput: '#datePickerMonthYearInput',
      datePicker: '.react-datepicker',
      datePickerDay: '.react-datepicker__day',
      datePickerMonth: '.react-datepicker__month-select',
      datePickerYear: '.react-datepicker__year-select'
    };
  }

  async fillDate(dateString) {
    try {
      // Parse the date to validate it
      const date = new Date(dateString);
      if (isNaN(date.getTime())) {
        throw new Error(`Invalid date format: ${dateString}`);
      }

      // Check if the date is valid (e.g., not February 31)
      const originalDay = date.getDate();
      date.setDate(originalDay);
      if (date.getDate() !== originalDay) {
        throw new Error(`Invalid date: ${dateString} (day out of range)`);
      }

      // Clear the input first
      await this.page.fill(this.selectors.dateInput, '');
      
      // Fill the date
      await this.page.fill(this.selectors.dateInput, dateString);
      
      // Wait for the date picker to be ready
      await this.page.waitForSelector(this.selectors.datePicker, { 
        state: 'visible',
        timeout: 5000 
      });

      // Wait for any animations to complete
      await this.page.waitForLoadState('networkidle');

      // Press Enter to confirm the date
      await this.page.press(this.selectors.dateInput, 'Enter');
    } catch (error) {
      throw new Error(`Failed to fill date: ${error.message}`);
    }
  }

  async getSelectedDate() {
    try {
      const dateInput = this.page.locator(this.selectors.dateInput);
      await dateInput.waitFor({ state: 'visible', timeout: 5000 });
      return await dateInput.inputValue();
    } catch (error) {
      throw new Error(`Failed to get selected date: ${error.message}`);
    }
  }
}

module.exports = DatePickerPage; 