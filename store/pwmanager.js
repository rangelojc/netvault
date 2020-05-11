export const state = () => ({
    categories: [],
    records: []
})

export const mutations = {
    categories(state, categories) {
        state.categories = categories;
    },
    records(state, records) {
        state.records = records;
    }
}

export const actions = {
    categories(context, categories) {
        context.commit("categories", categories)
    },
    records(context, records) {
        context.commit("records", records);
    }
}

export const getters = {

}