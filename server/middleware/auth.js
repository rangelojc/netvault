function is(group, url) {
    const paths = url.split("/");
    return paths[1] === group;
}

module.exports = function (req, res, next) {
    const sess = req.session;

    //redirect to login if userId does not exist, url is not login and the url is not API group
    if (!sess.userId && req.url !== "/login" && is("api", req.url) === false) {
        res.redirect('/login');
    }
    else next();
}