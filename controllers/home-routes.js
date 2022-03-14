const router = require('express').Router();

// Get homepage handlebar template
router.get('/', (req, res) => {
    
});

// Get login handlebar template
router.get('/login', (req, res) => {
    res.render('login');
});

module.exports = router;