const faker = require("faker");

module.exports = [
  {
    user_id: 8,
    airport: faker.random.arrayElement([
      "D.C.",
      "Saint Louis",
      "Dallas",
      "Denver"
    ]),
    airline: faker.random.arrayElement(["American", "Virgin", "Private"]),
    departure_time: faker.date.future(1),
    kids: faker.random.number({ min: 1, max: 8 }),
    is_arriving: faker.random.boolean()
  },
  {
    user_id: 2,
    airport: faker.random.arrayElement([
      "D.C.",
      "Saint Louis",
      "Dallas",
      "Denver"
    ]),
    airline: faker.random.arrayElement(["American", "Virgin", "Private"]),
    departure_time: faker.date.future(1),
    kids: faker.random.number({ min: 1, max: 8 }),
    is_arriving: faker.random.boolean()
  },
  {
    user_id: 3,
    airport: faker.random.arrayElement([
      "D.C.",
      "Saint Louis",
      "Dallas",
      "Denver"
    ]),
    airline: faker.random.arrayElement(["American", "Virgin", "Private"]),
    departure_time: faker.date.future(1),
    kids: faker.random.number({ min: 1, max: 8 }),
    is_arriving: faker.random.boolean()
  },
  {
    user_id: 4,
    airport: faker.random.arrayElement([
      "D.C.",
      "Saint Louis",
      "Dallas",
      "Denver"
    ]),
    airline: faker.random.arrayElement(["American", "Virgin", "Private"]),
    departure_time: faker.date.future(1),
    kids: faker.random.number({ min: 1, max: 8 }),
    is_arriving: faker.random.boolean()
  },
  {
    user_id: 5,
    airport: faker.random.arrayElement([
      "D.C.",
      "Saint Louis",
      "Dallas",
      "Denver"
    ]),
    airline: faker.random.arrayElement(["American", "Virgin", "Private"]),
    departure_time: faker.date.future(1),
    kids: faker.random.number({ min: 1, max: 8 }),
    is_arriving: faker.random.boolean()
  },
  {
    user_id: 6,
    airport: faker.random.arrayElement([
      "D.C.",
      "Saint Louis",
      "Dallas",
      "Denver"
    ]),
    airline: faker.random.arrayElement(["American", "Virgin", "Private"]),
    departure_time: faker.date.future(1),
    kids: faker.random.number({ min: 1, max: 8 }),
    is_arriving: faker.random.boolean()
  },
  {
    user_id: 7,
    airport: faker.random.arrayElement([
      "D.C.",
      "Saint Louis",
      "Dallas",
      "Denver"
    ]),
    airline: faker.random.arrayElement(["American", "Virgin", "Private"]),
    departure_time: faker.date.future(1),
    kids: faker.random.number({ min: 1, max: 8 }),
    is_arriving: faker.random.boolean()
  }
];
