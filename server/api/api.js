const express = require('express');
const apiRouter = express.Router();

//api groups import
const api = {
    pw: require('./PW/PWRouter'),
    auth: require('./Auth/AuthRouter')
}

apiRouter.get('/', async (req, res, next) => {
    res.send("This is the root URL of the API server");
});

//attach api groups
apiRouter.use('/pw', api.pw);
apiRouter.use('/auth', api.auth);


module.exports = apiRouter;