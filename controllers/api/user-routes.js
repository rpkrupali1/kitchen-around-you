const router = require("express").Router();
const { transporter } = require("../../utils/mailer");

const {
  User,
  Registration,
  Program,
  ProgramDetail,
  Ingredient,
  Measurment,
} = require("../../models");

router.get("/", (req, res) => {
  User.findAll({
    attributes: { exclude: ["password"] },
  })
    .then((dbUserData) => res.json(dbUserData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//GET /api/users/1
router.get("/:id", (req, res) => {
  User.findOne({
    attributes: { exclude: ["password"] },
    where: {
      id: req.params.id,
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
      res.json(dbUserData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//post /api/users
router.post("/", (req, res) => {
  User.create({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  })
    .then((dbUserData) => {
      const mailData = {
        from: "kitchenaroundyou@gmail.com",
        to: req.body.email,
        subject: "Account Created successfully",
        text: `Hello, Welcome to Kitchen Around You.`,
      };
      //send email once user register
      transporter.sendMail(mailData, (err, info) => {
        if (err) return res.status(400).json({ error: err });
        res.json(dbUserData);
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//put /api/users/1
router.put("/:id", (req, res) => {
  User.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((dbUserData) => {
      if (!dbUserData[0]) {
        res.status(404).json({ message: "No user found wih this id" });
        return;
      }
      res.json(dbUserData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// DELETE /api/users/1
router.delete("/:id", (req, res) => {
  User.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbUserData) => {
      if (!dbUserData) {
        res.status(404).json({ message: "No user found with this id" });
        return;
      }
      res.json(dbUserData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//login route for user
router.post("/login", (req, res) => {
  User.findOne({
    where: {
      email: req.body.email,
    },
  }).then((dbUserData) => {
    if (!dbUserData) {
      res.status(404).json({ message: "No user with this email exist" });
      return;
    }
    //verify password if data is returned
    const validPassword = dbUserData.checkPassword(req.body.password);
    if (!validPassword) {
      res.status(404).json({ message: "Username and password does not match" });
      return;
    }
    res.json({
      user: dbUserData,
      message: "You are now logged in",
    });
  });
});

module.exports = router;
