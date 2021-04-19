let faker = require("faker");

export const user = {
    email: faker.internet.email(),
    firstName: faker.name.firstName(),
    lastName : faker.name.lastName(),
    password : "Password1",
    not8Characters: faker.internet.password(7),
    noLowerCase   : faker.internet.password(8, false, /^[A-Z0-9]*$/),
    noUpperCase   : faker.internet.password(8, false, /^[a-z0-9]*$/),
    noNumber      : faker.internet.password(8, false, /^[A-Za-z]*$/)
};