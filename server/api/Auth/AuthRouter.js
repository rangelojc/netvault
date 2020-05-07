const express = require('express');
const router = express.Router();

const exceptionThrower = require('../../utils/exceptionThrower');
const AuthController = require('./AuthController.js');

router.post('/login', exceptionThrower(async (req, res, next) => {
    const sqlmanager = req.app.locals.sqlmanager;
    const controller = new AuthController(sqlmanager);

    const result = await controller.login(req.body);
    res.send(result);
}));

module.exports = router;