<template>
    <div class="pwmanager-view">
        <div class="head">
            <div class="title">{{`${category.label}: ${record.label}`}}</div>
            <div class="actions">
                <button @click="$router.push('/pwmanager')">
                    <i class="icon back-arrow"></i>
                    <span>Back</span>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import Vue from "vue";
import { mapState, mapGetters } from "vuex";

export default Vue.extend({
    layout: "main",
    data() {
        return {
            record: {},
            category: {}
        };
    },
    async fetch() {
        const recordId = this.$route.params.recordId;
        this.record = this.$store.getters["pwmanager/recordById"](recordId);

        if (!this.record) this.$router.push("/pwmanager");

        const categoryId = this.record.categoryId;
        this.category = this.$store.getters["pwmanager/categoryById"](
            categoryId
        );
    }
});
</script>

<style lang="scss" scoped>
@import "~/assets/scss/vars.scss";

.pwmanager-view {
    height: 100%;
    width: 100%;

    .head {
        height: 50px;
        width: 100%;
        margin-top: 10px;
        padding: 0 20px;

        display: flex;
        align-items: center;

        .actions {
            margin-left: auto;

            button {
                // background: transparent;
                display: flex;
                align-items: center;

                font-size: 18px;

                i {
                    margin-right: 5px;
                    margin-top: 1px;
                }
            }
        }

        .title {
            display: inline-block;
            font-weight: bold;
            font-size: 18px;
        }
    }
    .title {
    }
}
</style>