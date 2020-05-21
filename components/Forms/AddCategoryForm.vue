<template>
    <div class="popup-form" v-show="data.show" @click.self="data.show = false">
        <div class="popup-form-body">
            <span class="x" @click="data.show = false">&times;</span>
            <span class="title">ADD CATEGORY</span>
            <form action>
                <div class="row">
                    <label for>Label</label>
                    <input type="text" v-model="label" />
                </div>
                <div class="row submit">
                    <button type="submit" @click="addCategory">SUBMIT</button>
                </div>
            </form>
        </div>
    </div>
</template>


<script>
import Vue from "vue";

import { pwApi } from "~/assets/scripts/apiService";

export default Vue.extend({
    props: ["data", "loader"],
    data() {
        return {
            label: ""
        };
    },
    methods: {
        addCategory(evt) {
            evt.preventDefault();
            const userId = localStorage.NETVAULT_USERID * 1;
            const category = { userId, label: this.label };

            this.$emit("toggleLoader", true);

            pwApi.addCategory(category).then(res => {
                this.$props.data.show = false;
                this.$emit("toggleLoader", false);
                category.categoryId = res.data.insertId;

                this.$store.dispatch("pwmanager/addCategory", category);
            });
        }
    }
});
</script>


<style lang="scss" scoped>
.popup-form-body {
    width: 400px;
}
</style>