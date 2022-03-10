const router = require('express').Router();

// Get homepage handlebar template
router.get('/', (req, res) => {
    res.render('homepage');
});

// Get login handlebar template
router.get('/login', (req, res) => {
    res.render('login');
});

module.exports = router;