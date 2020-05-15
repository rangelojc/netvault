<template>
    <div class="popup-form" v-show="data.show" @click="data.show = false">
        <div class="popup-form-body">
            <span class="x" @click="data.show = false">&times;</span>
            <span class="title">ADD RECORD</span>
            <form action>
                <div class="row">
                    <label for>Category</label>
                    <select name id>
                        <option value>{{ data.label }}</option>
                    </select>
                </div>
                <div class="row">
                    <label for>Label</label>
                    <input type="text" />
                </div>
                <div class="row submit">
                    <button type="submit">SUBMIT</button>
                </div>
            </form>
        </div>
    </div>
</template>


<script>
import Vue from "vue";

export default Vue.extend({
    props: ["data"]
});
</script>


<style lang="scss" scoped>
.popup-form-body {
    width: 400px;
}
</style>