const NOCATEGORY_MODEL = { label: "Uncategorized", categoryId: null };

export const state = () => ({
    categories: [],
    records: [],
    categoriesWithRecords: [],
    uncategorizedRecords: []
});

export const mutations = {
    categories(state, categories) {
        state.categories = categories;
    },
    records(state, records) {
        state.records = records;
    },
    categoriesWithRecords(state) {
        const categories = [].concat(state.categories);
        categories.forEach(c => {
            c.records = state.records.filter(r => r.categoryId === c.categoryId);
        });

        const nocategory = Object.assign({}, NOCATEGORY_MODEL);
        nocategory.records = [].concat(state.records).filter(r => !r.categoryId);
        categories.push(nocategory);

        state.categoriesWithRecords = categories;
    },

    //insert
    addCategory(state, category) {
        state.categories.push(category);
    },
    addRecord(state, record) {
        state.records.push(record);
    },

    //delete
    deleteRecord(state, recordId) {
        const idx = state.records.findIndex(r => r.recordId === recordId)
        state.records.splice(idx, 1);
    }
}

export const actions = {
    fill(context, payload) {
        context.commit("categories", payload[0].data)
        context.commit("records", payload[1].data);
        context.commit("categoriesWithRecords");
    },
    addCategory(context, payload) {
        context.commit("addCategory", payload);

        //re-create filtered state
        context.commit("categoriesWithRecords");
    },
    addRecord(context, payload) {
        context.commit("addRecord", payload);

        //re-create filtered state
        context.commit("categoriesWithRecords");
    },
    deleteRecord(context, payload) {
        context.commit("deleteRecord", payload);

        //re-create filtered state
        context.commit("categoriesWithRecords");
    },
}

export const getters = {
    recordById: state => {
        return recordId => {
            return state.records.find(r => r.recordId === recordId * 1)
        }
    },
    categoryById: state => {
        return categoryId => {
            if (categoryId)
                return state.categories.find(r => r.categoryId === categoryId * 1)
            else
                return NOCATEGORY_MODEL;
        }
    },
}