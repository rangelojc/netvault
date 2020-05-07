const session = require('express-session')

module.exports = function (app) {
    app.use(session(
        {
            key: process.env.SESSION_KEY,
            secret: process.env.SESSION_SECRET,
            saveUninitialized: false,
            resave: false,
            cookie: {
                expires: 600000
            }
        })
    );

    app.use((req, res, next) => {
        const cookz = req.cookies || {};
        const sess = req.session || {};

        if (cookz[process.env.SESSION_KEY] && !sess.userId) {
            res.clearCookie(process.env.SESSION_KEY);
        }
        next();
    });
}