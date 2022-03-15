const router = require("express").Router();
const sequelize = require("../config/connection");
const {
  User,
  Program,
  Registration,
  ProgramDetail,
  Ingredient,
  Measurment,
} = require("../models");

// Get homepage handlebar template
router.get("/", (req, res) => {
  Program.findAll({
    attributes: ["title", "tution", "from_date", "to_date"],
  })
    .then((dbProgramData) => {
      // take programs and serialize them into a seperate programs array to be used
      // in the template
      const programs = dbProgramData.map((program) =>
        program.get({ plain: true })
      );

      res.render("homepage", {
        programs,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Get login handlebar template
router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

// Get single program
router.get("/program/:id", (req, res) => {
  Program.findOne({
    where: {
      id: req.params.id,
    },
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
  })
    .then((dbProgramData) => {
      if (!dbProgramData) {
        res.status(404).json({ message: "No program was found with this id" });
        return;
      }

      // serialize data to return what is necessary
      const program = dbProgramData.get({ plain: true });

      // pass data to template
      res.render("program", {
        program,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
