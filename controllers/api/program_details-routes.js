const router = require("express").Router();
const { ProgramDetail } = require("../../models");

//get all ProgramDetail
router.get("/", (req, res) => {
  ProgramDetail.findAll()
    .then((dbMeasureData) => {
      res.json(dbMeasureData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// get specific ProgramDetail
router.get("/:id", (req, res) => {
  ProgramDetail.findOne({
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

//create ProgramDetail
router.post("/", (req, res) => {
  ProgramDetail.create({
    program_id: req.body.program_id,
    ingredient_id: req.body.ingredient_id,
    quantity: req.body.quantity,
  })
    .then((dbMeasureData) => res.json(dbMeasureData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//update ProgramDetail
router.put("/:id", (req, res) => {
  ProgramDetail.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((dbMeasureData) => {
      if (!dbMeasureData) {
        res
          .status(404)
          .json({ message: "No ProgramDetail found with this id" });
        return;
      }
      res.json(dbMeasureData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//delete ProgramDetail
router.delete("/:id", (req, res) => {
  console.log("id", req.params.id);
  ProgramDetail.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbMeasureData) => {
      if (!dbMeasureData) {
        res
          .status(404)
          .json({ message: "No ProgramDetail found with this id" });
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
