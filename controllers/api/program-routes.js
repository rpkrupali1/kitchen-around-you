const router = require("express").Router();
const { Program } = require("../../models");

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
