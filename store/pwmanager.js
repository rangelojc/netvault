export const state = () => ({
    categories: [],
    records: [],
    foo: "foo123"
})

export const mutations = {
    setCategories(state, categories) {
        state.categories = categories;
    },
    setRecords(state, records) {
        state.records = records;
    }
}

export const actions = {

}