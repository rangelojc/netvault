const sqlite3 = require("sqlite3");

const APIResponse = require("./APIResponse");

module.exports = class {
    constructor() {
        this.db = new sqlite3.Database('nvdb.db');
    }

    query(sql, params) {
        const db = this.db;

        return new Promise(resolve => {
            db.all(sql, (params || []), function (err, rows) {
                db.close();

                const response = new APIResponse({
                    error: err.message,
                    data: rows
                })

                resolve(response);
            });
        });
    }

    exec(sql, params) {
        const db = this.db;

        return new Promise(resolve => {
            db.run(sql, (params || []), function (err) {
                db.close();

                const response = new APIResponse({
                    error: err.message,
                    data: this.lastID
                })

                resolve(response);
            })
        });
    }
}