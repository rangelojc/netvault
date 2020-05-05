module.exports = class {
    constructor({ data, error }) {
        if (error) {
            this.status = "ERROR";
            this.error = error;
        }
        else {
            this.status = "OK";
            this.data = data;
        }
    }
}