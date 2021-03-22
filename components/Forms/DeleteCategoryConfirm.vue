<template>
    <div class="popup-form" v-show="show" @click.self="data.show = false">
        <div class="popup-form-body">
            <span class="x" @click="data.show = false">&times;</span>
            <span class="title">DELETE CATEGORY</span>
            <form action>
                <div class="row">
                    <div class="center">
                        <span>Are you sure you want to delete</span>
                        <span>
                            <strong>{{ data.category.label }}</strong>
                        </span>
                        <span>?</span>
                    </div>
                </div>
                <div class="row submit">
                    <button
                        type="submit"
                        v-if="submitSecondsLeft !== 0"
                        disabled
                    >
                        {{ `CONFIRM (${submitSecondsLeft})` }}
                    </button>
                    <button type="submit" v-else @click="deleteCategory">
                        {{ `CONFIRM` }}
                    </button>
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
            submitSecondsLeft: 3,
        };
    },
    computed: {
        show() {
            if (this.$props.data.show) {
                this.submitSecondsLeft = 3;
                this.timer();
            }

            return this.$props.data.show;
        },
    },
    methods: {
        deleteCategory(evt) {
            evt.preventDefault();

            return; //disable for now
            const userId = localStorage.NETVAULT_USERID * 1;
            const categoryId = this.$props.data.category.categoryId;

            this.$emit("toggleLoader", true);

            pwApi.deleteCategory({ userId, categoryId }).then((res) => {
                this.$props.data.show = false;
                this.$emit("toggleLoader", false);

                this.$store.dispatch("pwmanager/deleteCategory", categoryId);
            });
        },
        timer() {
            setTimeout(() => {
                this.submitSecondsLeft--;
                if (this.submitSecondsLeft) this.timer();
            }, 1000);
        },
    },
});
</script>


<style lang="scss" scoped>
.popup-form-body {
    width: 400px;
}
</style>