const router = require("express").Router();
const { Ingredient, Measurment } = require("../../models");

//get all ingredient
router.get("/", (req, res) => {
  Ingredient.findAll()
    .then((dbMeasureData) => {
      res.json(dbMeasureData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// get specific ingredient
router.get("/:id", (req, res) => {
  Ingredient.findOne({
    where: {
      id: req.params.id,
    },
    attributes: ["id", "name", "measurment_id", "created_at"],
    include: {
      model: Measurment,
      attributes: ["unit"],
    },
  })
    .then((dbMeasureData) => {
      res.json(dbMeasureData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//create ingredient
router.post("/", (req, res) => {
  Ingredient.create({
    name: req.body.name,
    measurment_id: req.body.measurment_id
  })
    .then((dbMeasureData) => res.json(dbMeasureData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//update measurement unit
router.put("/:id", (req, res) => {
  Ingredient.update(req.body,
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((dbMeasureData) => {
      if (!dbMeasureData) {
        res.status(404).json({ message: "No Ingredient found with this id" });
        return;
      }
      res.json(dbMeasureData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//delete ingredient
router.delete("/:id", (req, res) => {
  console.log("id", req.params.id);
  Ingredient.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbMeasureData) => {
      if (!dbMeasureData) {
        res.status(404).json({ message: "No Ingredient found with this id" });
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
