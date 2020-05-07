
class APIResponse {
    constructor(data, params, status) {
        this.status = status || "OK";
        this.params = params || {};

        this._setData(data);
    }

    _setMessage(msg) {
        this.message = msg;
    }

    _setData(data) {
        this.data = data;
    }
}
class APIResponseError extends APIResponse {
    constructor(err, params, status) {
        super(null, params);

        this.status = status || "ERROR";
        this._setMessage(err);
    }
}

module.exports = {
    APIResponse,
    APIResponseError
} 