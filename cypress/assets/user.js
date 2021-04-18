let faker = require("faker");

export const user = {
    email: faker.internet.email(),
    fn: faker.name.firstName(),
    ln: faker.name.lastName(),
    password: faker.internet.password(8),
    not8charLongPasswird: faker.internet.password(7),
    noUpperCasePassword: faker.internet.password(8, false, /^[a-z0-9]*$/),
    noLowerCasePassword: faker.internet.password(8, false, /^[A-Z0-9]*$/),
    noNumberPassword: faker.internet.password(8, false, /^[A-Za-z]*$/)
};