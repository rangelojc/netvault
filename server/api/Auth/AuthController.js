const APIResponse = require("../../classes/APIResponse");

module.exports = class {
    constructor(sqlmanager) {
        this.sqlmanager = sqlmanager;
    }

    async login(params) {
        const result = await this.sqlmanager.exec(
            "SELECT userId from netvault.users WHERE username = ? AND password = ?",
            [params.username, params.password]
        );

        console.log(result);

        if (result.length > 0) {
            const userId = result[0].userId;
            return new APIResponse({ found: true, userId });
        }
        else return new APIResponse({ found: false });
    }
}