const APIResponse = require("../../classes/APIResponse");

module.exports = class {
    constructor(sqlmanager) {
        this.sqlmanager = sqlmanager;
    }

    async login(params) {
        const result = this.sqlmanager.exec(
            "SELECT userId from users WHERE username = ? AND password = ?",
            [params.username, params.password]
        );

        return new APIResponse(result);
    }
}