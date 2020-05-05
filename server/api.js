const express = require('express')

const apiRouter = express.Router();

apiRouter.get('/', async (req, res, next) => {
    res.send("This is the root URL of the API server");
})

module.exports = apiRouter;