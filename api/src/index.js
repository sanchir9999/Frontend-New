const express = require('express');
const router = express.Router();

// Define your routes and handlers
router.get('/somepath', (req, res) => {
    res.send('Some response');
});

module.exports = { accountRouter: router };
