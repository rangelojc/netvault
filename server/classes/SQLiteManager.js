const sqlite3 = require("sqlite3");

module.exports = class {
    constructor() {
        this.db = new sqlite3.Database('netvault.db');
    }

    exec(sql, params) {
        const db = this.db;

        return new Promise((resolve, reject) => {
            db.run(
                sql,
                (params || []),
                (error) => {
                    db.close();

                    if (error) reject(error)
                    else resolve(response)
                }
            )
        }
    }

}