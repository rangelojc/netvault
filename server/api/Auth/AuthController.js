const { APIResponse } = require("../../classes/APIResponse");

module.exports = class {
    constructor(sqlmanager) {
        this.sqlmanager = sqlmanager;
    }

    async login(params, session) {
        const result = await this.sqlmanager.exec(
            "SELECT userId, username from netvault.users WHERE username = ? AND password = ?",
            [params.username, params.password]
        );

        if (result.length > 0) {
            const userId = result[0].userId;
            session.userId = userId;

            return new APIResponse({ found: true, user: result[0] });
        }
        else return new APIResponse({ found: false });
    }
}