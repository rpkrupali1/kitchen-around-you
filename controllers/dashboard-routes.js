const router = require("express").Router();
const sequelize = require("../config/connection");
const {
  Program,
  User,
  Registration,
  ProgramDetail,
  Ingredient,
  Measurment,
} = require("../models");

router.get("/", (req, res) => {
  User.findOne({
    attributes: { exclude: ["password"] },
    where: {
      id: req.session.user_id,
    },
    include: [
      {
        model: Registration,
        attributes: ["id"],
        include: {
          model: Program,
          attributes: [
            "id",
            "title",
            "description",
            "tution",
            "from_date",
            "to_date",
          ],
          include: [
            {
              model: ProgramDetail,
              attributes: ["program_id", "ingredient_id", "quantity"],
              include: {
                model: Ingredient,
                attributes: ["name"],
                include: {
                  model: Measurment,
                  attributes: ["unit"],
                },
              },
            },
          ],
        },
      },
    ],
  })
    .then((dbUserData) => {
      if (!dbUserData) {
        res.status(404).json({ message: "No user found with this id" });
        return;
      }
      const user = dbUserData.get({ plain: true });
      console.log(user);
      res.render("dashboard", { user, loggedIn: true });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
