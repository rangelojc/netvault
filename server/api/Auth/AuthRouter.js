const express = require('express');
const router = express.Router();

const exceptionThrower = require('../../utils/exceptionThrower');
const AuthController = require('./AuthController.js');

router.post('/login', exceptionThrower(async (req, res, next) => {
    const sqlmanager = req.app.locals.sqlmanager;
    const controller = new AuthController(sqlmanager);

    const session = req.session;
    const result = await controller.login(req.body, session);
    res.send(result);
}));

router.get('/logout', exceptionThrower((req, res) => {
    if (req.session.userId && req.cookies[process.env.SESSION_KEY]) {
        req.session.userId = null;
        res.clearCookie(process.env.SESSION_KEY);
        res.redirect('/logout');
    } else {
        res.redirect('/login');
    }
}));

module.exports = router;