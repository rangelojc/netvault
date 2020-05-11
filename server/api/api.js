const express = require('express');
const apiRouter = express.Router();

//api groups import
const api = {
    pwm: require('./PW/PWRouter'),
    auth: require('./Auth/AuthRouter')
}

apiRouter.get('/', async (req, res, next) => {
    res.send("This is the root URL of the API server");
});

//attach api groups
apiRouter.use('/pwm', api.pwm);
apiRouter.use('/auth', api.auth);

module.exports = apiRouter;