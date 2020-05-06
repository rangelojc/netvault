const express = require('express');
const apiRouter = express.Router();

//api groups import
const pwApi = require('./PW/PWRouter');

apiRouter.get('/', async (req, res, next) => {
    res.send("This is the root URL of the API server");
});

//attach api groups
apiRouter.use('/pw', pwApi);

module.exports = apiRouter;