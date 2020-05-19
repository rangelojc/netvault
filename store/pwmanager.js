export const state = () => ({
    categories: [],
    records: [],
    categoriesWithRecords: [],
    uncategorizedRecords: []
})

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

        state.categoriesWithRecords = categories;
    },
    uncategorizedRecords(state) {
        state.uncategorizedRecords = [].concat(state.records).filter(r => !r.categoryId);
    },

    //insert
    addCategory(state, category) {
        state.categories.push(category);
    }
}

export const actions = {
    fill(context, payload) {
        context.commit("categories", payload[0].data)
        context.commit("records", payload[1].data);
        context.commit("categoriesWithRecords");
        context.commit("uncategorizedRecords");
    },
    addCategory(context, payload) {
        context.commit("addCategory", payload);

        //re-create filtered state
        context.commit("categoriesWithRecords");
        context.commit("uncategorizedRecords");
    }
}

export const getters = {
    recordById: state => {
        return recordId => {
            return state.records.find(r => r.recordId === recordId * 1)
        }
    },
    categoryById: state => {
        return categoryId => {
            return state.categories.find(r => r.categoryId === categoryId * 1)
        }
    },
}