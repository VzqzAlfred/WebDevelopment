const express = require('express'),
    router = express.Router();

router.get('/', (req, res) => {
    res.end('<h1>Configurando app en Express</h1>')
});

module.exports = router;