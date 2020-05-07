function exceptionHandler(err, req, res, next) {
    let errmsg = "";
    let status = 500;
    let statusType = "ERROR";

    if (err instanceof Error) {
        console.error(err);
        errmsg = err.toString();
    }
    else {
        errmsg = err;
        status = 200;
        statusType = "VALIDATION_ERROR"
    }

    res.status(status).json(new APIResponseError(errmsg, req.body, statusType));
}

module.exports = function (fn) {
    return (req, res, next) => {
        Promise
            .resolve(fn(req, res, next))
            .catch(err => {
                exceptionHandler(err, req, res, next);
            });
    };
}