<template>
    <div>{{record.label}}</div>
</template>

<script>
import Vue from "vue";
import { mapState, mapGetters } from "vuex";

export default Vue.extend({
    layout: "main",
    data() {
        return {
            record: {}
        };
    },
    created() {
        const recordId = this.$route.params.recordId;
        this.record = this.$store.getters["pwmanager/recordById"](recordId);
    }
});
</script>

<style lang="scss" scoped>
</style>