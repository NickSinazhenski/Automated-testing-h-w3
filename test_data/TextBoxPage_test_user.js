import { faker } from '@faker-js/faker';

const TextBox_test_user = {
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  email: faker.internet.email(),
  gender: faker.helpers.arrayElement([1, 2, 3]),
  currentAddress: faker.location.streetAddress(),
  permanentAddress: faker.location.streetAddress(),
}

export default TextBox_test_user;