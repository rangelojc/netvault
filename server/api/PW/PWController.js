class PWManagerController {
    constructor(sqlmanager) {
        this.sqlmanager = sqlmanager;
    }

    async getRecords(params) {
        const res = await this.sqlmanager.query(
            "SELECT * FROM pw_records WHERE userId = ?", [params.userId]
        );

        return res;
    }
}

module.exports = PWManagerController;