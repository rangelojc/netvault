module.exports = function (req, res, next) {
    const sess = req.session;

    if (!sess.userId && req.url !== "/login") {
        res.redirect('/login');
    }
    else next();
}