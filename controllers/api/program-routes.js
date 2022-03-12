const router = require("express").Router();
const sequelize = require("../../config/connection");
const {
  Program,
  ProgramDetail,
  Ingredient,
  Measurment,
  Registration,
  User,
} = require("../../models");

//get all Programms
router.get("/", (req, res) => {
  Program.findAll()
    .then((dbMeasureData) => {
      res.json(dbMeasureData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// get specific Program
router.get("/:id", (req, res) => {
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
      [
        sequelize.literal(
          "(SELECT COUNT(*) FROM registration WHERE program.id = registration.program_id)"
        ),
        "total_admissions",
      ],
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
      {
        model: Registration,
        attributes: ["id", "user_id"],
        include: {
          model: User,
          attributes: ["email"],
        },
      },
    ],
  })
    .then((dbMeasureData) => {
      res.json(dbMeasureData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//create Program
router.post("/", (req, res) => {
  Program.create({
    title: req.body.title,
    description: req.body.description,
    tution: req.body.tution,
    from_date: req.body.from_date,
    to_date: req.body.to_date,
  })
    .then((dbMeasureData) => res.json(dbMeasureData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//update Program
router.put("/:id", (req, res) => {
  Program.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((dbMeasureData) => {
      if (!dbMeasureData) {
        res.status(404).json({ message: "No Program found with this id" });
        return;
      }
      res.json(dbMeasureData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//delete Program
router.delete("/:id", (req, res) => {
  console.log("id", req.params.id);
  Program.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbMeasureData) => {
      if (!dbMeasureData) {
        res.status(404).json({ message: "No Program found with this id" });
        return;
      }
      res.json(dbMeasureData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
