const sequelize = require("../config/connection");
const { Programme } = require("../models");

const programmedata = [
  {
    title: "Baking Series",
    description:
      "Let your budding baker bake the series away with us in our baking boot camp series. Budding bakers will learn about fundamental baking techniques as they advance through the series watching their baking skills evolve. This series is fit for beginner and seasoned baked as each week they will work on their own baked masterpieces both sweet and savory.",
    tution: "166.00",
    from_date: new Date(2022, 03, 28),
    to_date: new Date(2022, 04, 28),
  },
  {
    title: "Culinary Series",
    description:
      "Let your budding chef cook and bake the series away with us in our culinary series. Budding chefs will learn about a variety of cooking techniques as they advance through the series watching their culinary skills evolve. This series is fit for beginner and seasoned budding chefs as each week they will work on their own culinary masterpieces both sweet and savory.",
    tution: "156.00",
    from_date: new Date(2022, 04, 28),
    to_date: new Date(2022, 05, 28),
  },
  {
    title: "Cooking Camp w/ Cupcake Wars",
    description:
      "Join us as we explore the kidinary world that is full of a variety of amazing flavors and cultures. Kidinary chefs will love diving into tasty nutritiously delicious dishes from all over the world over spring break. Chefs will begin camp by creating a savory lunch. On the last day, kidinary chefs will compete in a friendly competition for the next Cupcake Wars winner (each chef making their own individual dessert to present to be judged as a group).",
    tution: "184.00",
    from_date: new Date(2022, 05, 01),
    to_date: new Date(2022, 05, 30),
  },
  {
    title: "Brownies(1.5 hour class)",
    description:
      " Brownies will explore the various kinds of healthy snacks that are also nutritiously delicious",
    tution: "20.00",
    from_date: new Date(2022, 03, 28),
    to_date: new Date(2022, 03, 28),
  },
  {
    title: "Kids' Kitchen: Cookie Jar",
    description:
      "un, hands-on and educational, our new kids' series is the perfect activity! Your young chef will learn valuable kitchen skills while baking delightful cookies and bars.",
    tution: "59.00",
    from_date: new Date(2022, 05, 15),
    to_date: new Date(2022, 05, 16),
  },
  {
    title: "Family Fun: Springtime Cupcakes",
    tution: "59.00",
    description:
      "Cute homemade cupcakes, fresh for spring! In this family-friendly class, you'll bake from-scratch cupcakes, icing and edible fondant, then learn piping techniques to create spring-inspired treats.",
    from_date: new Date(2022, 04, 28),
    to_date: new Date(2022, 04, 29),
  },
];

const seedProgrammes = () =>
  Programme.bulkCreate(programmedata, { individualHooks: true });

module.exports = seedProgrammes;
