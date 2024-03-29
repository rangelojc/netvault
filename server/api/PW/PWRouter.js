const express = require('express');
const router = express.Router();

const PWController = require('./PWController.js');


//categories

router.get('/categories/:userId', async (req, res, next) => {
    const sqlmanager = req.app.locals.sqlmanager;
    const controller = new PWController(sqlmanager);

    const result = await controller.getCategories(req.params);
    res.send(result);
});

router.post('/categories/add', async (req, res, next) => {
    const sqlmanager = req.app.locals.sqlmanager;
    const controller = new PWController(sqlmanager);

    const result = await controller.addCategory(req.body);
    res.send(result);
});

router.post('/categories/delete', async (req, res, next) => {
    const sqlmanager = req.app.locals.sqlmanager;
    const controller = new PWController(sqlmanager);

    const result = await controller.deleteCategory(req.body);
    res.send(result);
});

//records

router.get('/records/:userId', async (req, res, next) => {
    const sqlmanager = req.app.locals.sqlmanager;
    const controller = new PWController(sqlmanager);

    const result = await controller.getRecords(req.params);
    res.send(result);
});

router.post('/records/add', async (req, res, next) => {
    const sqlmanager = req.app.locals.sqlmanager;
    const controller = new PWController(sqlmanager);

    const result = await controller.addRecord(req.body);
    res.send(result);
});

router.post('/records/delete', async (req, res, next) => {
    const sqlmanager = req.app.locals.sqlmanager;
    const controller = new PWController(sqlmanager);

    const result = await controller.deleteRecord(req.body);
    res.send(result);
});

//record data
router.get('/records/view/:recordId', async (req, res, next) => {
    const sqlmanager = req.app.locals.sqlmanager;
    const controller = new PWController(sqlmanager);

    const result = await controller.getRecordData(req.params);
    res.send(result);
});

module.exports = router;