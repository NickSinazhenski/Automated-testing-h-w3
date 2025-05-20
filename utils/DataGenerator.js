const { faker } = require('@faker-js/faker');

class DataGenerator {
  static generateDate() {
    const futureDate = faker.date.future();
    return {
      fullDate: futureDate.toISOString().split('T')[0],
      displayDate: futureDate.toLocaleDateString('en-US', {
        month: '2-digit',
        day: '2-digit',
        year: 'numeric'
      })
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