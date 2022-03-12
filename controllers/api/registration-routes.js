const router = require("express").Router();
const { Registration } = require("../../models");

//get all registrations
router.get("/", (req, res) => {
  Registration.findAll()
    .then((dbMeasureData) => {
      res.json(dbMeasureData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// get specific registration
router.get("/:id", (req, res) => {
  Registration.findOne({
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

//create registration
router.post("/", (req, res) => {
  Registration.create({
    user_id: req.body.user_id,
    program_id: req.body.program_id,
  })
    .then((dbMeasureData) => res.json(dbMeasureData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//update registration
router.put("/:id", (req, res) => {
  Registration.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((dbMeasureData) => {
      if (!dbMeasureData) {
        res.status(404).json({ message: "No registration found with this id" });
        return;
      }
      res.json(dbMeasureData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//delete registration
router.delete("/:id", (req, res) => {
  console.log("id", req.params.id);
  Registration.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbMeasureData) => {
      if (!dbMeasureData) {
        res.status(404).json({ message: "No registration found with this id" });
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
