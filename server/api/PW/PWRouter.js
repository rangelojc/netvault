const express = require('express');
const router = express.Router();

const PWController = require('./PWController.js');

router.get('/:userId', async (req, res, next) => {
    const sqlmanager = req.app.locals.sqlmanager;
    const controller = new PWController(sqlmanager);

    const result = await controller.getRecords(req.params);

    res.send(result);
});

module.exports = router;