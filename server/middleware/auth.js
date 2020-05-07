function is(group, url) {
    const paths = url.split("/");
    return paths[1] === group;
}

module.exports = function (req, res, next) {
    const sess = req.session;
    const cookz = req.cookies || {};

    if (req.url === "/login") {
        if (sess.userId && cookz[process.env.SESSION_KEY]) res.redirect('/dashboard');
        else next();
    }
    else if (sess.userId && cookz[process.env.SESSION_KEY]) next();
    else if (is("api", req.url) === true) next();
    else if (is("api", req.url) === false) res.redirect('/login');
}