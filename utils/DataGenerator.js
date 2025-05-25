const { faker } = require('@faker-js/faker');

class DataGenerator {
  static generateDate() {
    // Generate a future date within the next year
    const today = new Date();
    const futureDate = new Date(today);
    futureDate.setDate(today.getDate() + faker.number.int({ min: 1, max: 365 }));
    
    // Format the date consistently (1-based month for display)
    const month = String(futureDate.getMonth() + 1).padStart(2, '0');
    const day = String(futureDate.getDate()).padStart(2, '0');
    const year = futureDate.getFullYear();
    
    // Store both the full date (YYYY-MM-DD) and display date (MM/DD/YYYY)
    return {
      fullDate: `${year}-${month}-${day}`,
      displayDate: `${month}/${day}/${year}`
    };
  }

  static generateSliderValue() {
    return faker.number.int({ min: 0, max: 100 });
  }

  static generateCheckboxName() {
    const options = ['Desktop', 'Documents', 'Downloads', 'Office', 'WorkSpace'];
    return faker.helpers.arrayElement(options);
  }
}

module.exports = DataGenerator; 