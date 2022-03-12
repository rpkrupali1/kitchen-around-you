const router = require("express").Router();
const { Measurment } = require("../../models");

//get all measurements
router.get("/", (req, res) => {
  Measurment.findAll()
    .then((dbMeasureData) => {
      res.json(dbMeasureData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// get specific measurement
router.get("/:id", (req, res) => {
  Measurment.findOne({
    where: {
      id: req.params.id,
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

//create measurement
router.post("/", (req, res) => {
  Measurment.create({
    unit: req.body.unit,
  })
    .then((dbMeasureData) => res.json(dbMeasureData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//update measurement unit
router.put("/:id", (req, res) => {
  Measurment.update(
    {
      unit: req.body.unit,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((dbMeasureData) => {
      if (!dbMeasureData) {
        res.status(404).json({ message: "No measurement found with this id" });
        return;
      }
      res.json(dbMeasureData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//delete measurement
router.delete("/:id", (req, res) => {
  console.log("id", req.params.id);
  Measurment.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbMeasureData) => {
      if (!dbMeasureData) {
        res.status(404).json({ message: "No measurement found with this id" });
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
