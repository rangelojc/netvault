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

    async getRecordsByCategoryId(params) {
        const result = await this.sqlmanager.exec(
            "SELECT * FROM pw_records WHERE userId = ? AND categoryId", [params.userId, params.categoryId]
        );

        return new response.APIResponse(result);
    }

    async getCategories(params) {
        const result = await this.sqlmanager.exec(
            "SELECT * FROM pw_categories WHERE userId = ?", [params.userId]
        );

        return new response.APIResponse(result);
    }

    async getRecordData() {
        const result = await this.sqlmanager.exec(
            "SELECT * FROM pw_records_data WHERE recordId = ? AND userId = ?", [params.recordId, params.userId]
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

    async deleteRecord(params) {
        const result = await this.sqlmanager.exec(
            "DELETE FROM pw_records WHERE recordId = ? AND userId = ?",
            [params.recordId, params.userId]
        );

        return new response.APIResponse(result);
    }

    async deleteCategory(params) {
        const result = await this.sqlmanager.exec(
            "DELETE FROM pw_categories WHERE categoryId = ? AND userId = ?",
            [params.categoryId, params.userId]
        );

        return new response.APIResponse(result);
    }

    async deleteRecordDataByRecord(params) {
        const result = await this.sqlmanager.exec(
            "DELETE FROM pw_records_data WHERE recordId = ? AND userId = ?",
            [params.recordId, params.userId]
        );

        return new response.APIResponse(result);
    }
}