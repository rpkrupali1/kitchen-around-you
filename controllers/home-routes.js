const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Program, Registration } = require('../models');

// Get homepage handlebar template
router.get('/', (req, res) => {
    Program.findAll({
        attributes: [
            'title',
            'tution',
            'from_date',
            'to_date'
        ]
    })
    .then(dbProgramData => {
        const programs = dbProgramData.map(program => program.get({ plain: true }));

        res.render('homepage', {
            programs
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// Get login handlebar template
router.get('/login', (req, res) => {
    res.render('login');
});

module.exports = router;