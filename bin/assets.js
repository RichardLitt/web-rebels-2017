const fs = require('fs');
const path = require('path');
const express = require('express');

const router = express.Router();
module.exports = router;

router.get('/css/styles.css', (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/css' });
    fs.createReadStream(path.resolve(__dirname, '../public/main.css'));
});
