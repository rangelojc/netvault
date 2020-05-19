<template>
    <div class="popup-form" v-show="data.show" @click.self="data.show = false">
        <div class="popup-form-body">
            <span class="x" @click="data.show = false">&times;</span>
            <span class="title">ADD RECORD</span>
            <form action>
                <div class="row">
                    <label for>Category</label>
                    <input type="text" :value="data.category.label" readonly />
                </div>
                <div class="row">
                    <label for>Label</label>
                    <input type="text" v-model="label" />
                </div>
                <div class="row submit">
                    <button type="submit" @click="addRecord">SUBMIT</button>
                </div>
            </form>
        </div>
    </div>
</template>


<script>
import Vue from "vue";
import { pwApi } from "~/assets/scripts/apiService";

export default Vue.extend({
    props: ["data"],
    data() {
        return {
            label: ""
        };
    },
    methods: {
        addRecord(evt) {
            evt.preventDefault();

            const record = {};
            record.userId = localStorage.NETVAULT_USERID;
            record.categoryId = this.$props.data.category.categoryId;
            record.label = this.label;

            this.$emit("toggleLoader", true);

            pwApi.addRecord(record).then(res => {
                this.$props.data.show = false;
                this.$emit("toggleLoader", false);
                record.recordId = res.data.insertId;

                this.$store.dispatch("pwmanager/addRecord", record);
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