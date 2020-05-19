import axios from "axios";

function response(data) {
    if (data.status == "OK") return data;
    else {
        const err = new Error("Something went wrong with the API service: ");
        console.error(err, data);
    }
}

export const pwApi = {
    getCategories: async (userId) => {
        const res = await axios.get("/api/pwm/categories/" + userId);
        return response(res.data);
    },
    getRecords: async (userId) => {
        const res = await axios.get("/api/pwm/records/" + userId);
        return response(res.data);
    },
    getRecordData: async (data) => {
        const res = await axios.post("/api/pwm/records/view", data);
        return response(res.data);
    },
    addRecord: async (data) => {
        const res = await axios.post("/api/pwm/records/add", data);
        return response(res.data);
    },
    addCategory: async (data) => {
        const res = await axios.post("/api/pwm/categories/add", data);
        return response(res.data);
    }
}