const express = require('express');
const router = express.Router();

const PWController = require('./PWController.js');

router.get('/categories/:userId', async (req, res, next) => {
    const sqlmanager = req.app.locals.sqlmanager;
    const controller = new PWController(sqlmanager);

    const result = await controller.getCategories(req.params);
    res.send(result);
});

router.get('/records/:userId', async (req, res, next) => {
    const sqlmanager = req.app.locals.sqlmanager;
    const controller = new PWController(sqlmanager);

    const result = await controller.getRecords(req.params);
    res.send(result);
});

module.exports = router;