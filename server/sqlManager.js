const sqlite3 = require("sqlite3");

module.exports = function () {
    function create() {
        this.db = new sqlite3.Database(`nvdb.db`);
    }

    this.query = (sql, params) => {
        const db = this.db;
        const response = {};

        return new Promise(resolve => {
            db.all(sql, (params || []), function (err, rows) {
                if (err) {
                    response.error = err.message;
                    response.status = 0;
                } else {
                    response.data = rows;
                    response.status = 1;
                }

                db.close();
                resolve(response);
            });
        });
    }

    this.exec = (sql, params) => {
        const db = this.db;
        const response = {};

        return new Promise(resolve => {
            db.run(sql, (params || []), function (err) {
                if (err) {
                    response.error = err.message;
                    response.status = 0;
                } else {
                    response.id = this.lastID;
                    response.status = 1;
                }

                db.close();
                resolve(response);
            })
        });
    }

    create();
}