const response = require("../../classes/APIResponse");
module.exports = class {
    constructor(sqlmanager) {
        this.sqlmanager = sqlmanager;
    }

    async getRecords(params) {
        const result = await this.sqlmanager.exec(
            "SELECT * FROM pw_records WHERE userId = ?", [params.userId]
        );

        return new response.APIResponse(result);
    }

    async getCategories(params) {
        const result = await this.sqlmanager.exec(
            "SELECT * FROM pw_categories WHERE userId = ?", [params.userId]
        );

        return new response.APIResponse(result);
    }
}