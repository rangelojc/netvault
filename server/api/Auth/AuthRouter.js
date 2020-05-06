const express = require('express');
const router = express.Router();

const AuthController = require('./AuthController.js');

router.post('/login', async (req, res, next) => {
    const sqlmanager = req.app.locals.sqlmanager;
    const controller = new AuthController(sqlmanager);

    controller.login(req.params);

    res.send(result);
});

module.exports = router;