module.exports = class {
    constructor(sqlmanager) {
        this.sqlmanager = sqlmanager;
    }

    async login(params) {
        return params;
    }
}