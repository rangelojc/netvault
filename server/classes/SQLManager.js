const sqlite3 = require("sqlite3");

const APIResponse = require("./APIResponse");

module.exports = class {
    constructor() {
        const path = process.env.DB_SQLITE_PATH;
        console.log(process.env);
        this.db = new sqlite3.Database(path);
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