const mysql = require("mysql2");


module.exports = class {
    constructor() {
        this.connectionType = process.env.DB_CONFIG_CONNECTION_TYPE;
        this.connectionBasic = null;
        this.connectionPool = null;

        this.createConfig();
        this.createConnection();
    }

    createConfig() {
        this.connectionBasic = {
            config: {
                host: process.env.DB_HOST,
                user: process.env.DB_USERNAME,
                password: process.env.DB_PASSWORD,
                database: process.env.DB_DATABASE,
            },
            connection: null,
        }

        this.connectionPool = {
            config: {
                host: process.env.DB_HOST,
                user: process.env.DB_USERNAME,
                password: process.env.DB_PASSWORD,
                database: process.env.DB_DATABASE,
                connectionLimit: process.env.DB_CONFIG_CONNECTIONLIMIT,
                queueLimit: process.env.DB_CONFIG_QUEUE_LIMIT,
                waitForConnections: process.env.DB_CONFIG_WAIT_CONNECTIONS
            },
            connection: null,
            ok: false,
        };
    }

    createConnection() {
        if (this.connectionType == "pool") {
            this.connectionPool.connection = mysql.createPool(this.connectionPool.config);
        }
        else if (this.connectionType == "basic") {
            this.connectionBasic.connection = mysql.createConnection(this.connectionBasic.config);
        }

    }

    exec(...args) {
        if (this.connectionType == "pool") return this.exec_pool(...args)
        else if (this.connectionType == "basic") return this.exec_basic(...args);
    }

    exec_pool(query, params) {
        return new Promise((resolve, reject) => {
            const connection = this.connectionPool.connection;

            const callback = (error, rows, fields) => {
                if (error) reject(error);
                else resolve(rows);
            }

            if (params) connection.query(query, params, callback);
            else connection.query(query, callback);
        });
    }

    exec_basic(query, params) {
        return new Promise((resolve, reject) => {
            const connection = this.connectionBasic.connection;

            const callback = (error, rows, fields) => {
                if (error) reject(error);
                else resolve(rows);

                connection.end();
            }

            if (params) connection.query(query, params, callback);
            else connection.query(query, callback);
        });
    }
}
