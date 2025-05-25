import { faker } from '@faker-js/faker';

const FormPage_test_user = {
  firstName:faker.person.firstName(),
  lastName: faker.person.lastName(),
  email: faker.internet.email(),
  gender: faker.helpers.arrayElement([1, 2, 3]),
  mobile: faker.phone.number({style: 'international'}).slice(-10),
}

export default FormPage_test_user;