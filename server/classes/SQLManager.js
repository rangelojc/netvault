const sqlite3 = require("sqlite3");

module.exports = class {
    constructor() {
        this.db = new sqlite3.Database('nvdb.db');
    }

    query(sql, params) {
        const db = this.db;

        return new Promise(resolve => {
            db.all(sql, (params || []), function (err, rows) {
                db.close();

                resolve({
                    error: err.message,
                    data: rows
                });
            });
        });
    }

    exec(sql, params) {
        const db = this.db;

        return new Promise(resolve => {
            db.run(sql, (params || []), function (err) {
                db.close();

                resolve({
                    error: err.message,
                    data: this.lastID
                });
            })
        });
    }
}