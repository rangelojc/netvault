function is(group, url) {
    const paths = url.split("/");
    return paths[1] === group;
}

const list = ["/login", "/logout"];

module.exports = function (req, res, next) {
    const sess = req.session;
    const cookz = req.cookies || {};

    if (list.find(i => req.url === i)) {
        if (sess.userId && cookz[process.env.SESSION_KEY]) res.redirect('/pwmanager');
        else next();
    }
    else if (sess.userId && cookz[process.env.SESSION_KEY]) next();
    else if (is("api", req.url) === true) next();
    else if (is("api", req.url) === false) res.redirect('/login');
}