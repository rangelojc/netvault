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

    async addCategory(params) {
        const result = await this.sqlmanager.exec(
            "INSERT INTO pw_categories SET ?",
            { ...params }
        );

        return new response.APIResponse(result);
    }


    async addRecord(params) {
        const result = await this.sqlmanager.exec(
            "INSERT INTO pw_records SET ?",
            { ...params }
        );

        return new response.APIResponse(result);
    }


    async getRecordData() {
        const result = await this.sqlmanager.exec(
            "SELECT * FROM pw_records_data WHERE recordId = ? AND userId = ?", [params.recordId, params.userId]
        );

        return new response.APIResponse(result);
    }
}