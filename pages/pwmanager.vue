<template>
    <div class="app-content">
        <div class="pwmanager">
            <div class="actions"></div>
            <div class="pwlist" :class="getListMode()">
                <div class="item" v-for="item in 10" :key="idx"></div>
                <div class="hidden" :key="`item${item}`" v-for="item in 3"></div>
            </div>
        </div>
    </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
    layout: "main",
    computed: {
        foo() {
            return this.$store.state.pwmanager.foo;
        }
    },
    data() {
        return {
            listMode: "grid"
        };
    },
    methods: {
        getListMode() {
            return {
                grid: this.listMode === "grid",
                list: this.listMode === "list"
            };
        }
    }
});
</script>

<style lang="scss">
@import "~/assets/scss/vars.scss";

.pwmanager {
    width: 100%;
    height: 100%;

    .actions {
        height: 50px;
        width: 100%;
    }

    .pwlist {
        height: calc(100% - 50px);

        padding: 20px;
        overflow: auto;

        &.grid {
            display: flex;
            flex-flow: row wrap;
            justify-content: center;
            align-items: center;

            .item {
                margin: 10px;
                height: 200px;
                width: 29%;

                background: $dark41;
            }

            .hidden {
                width: 29%;
                height: 0px;
                margin: 10px;
            }
        }

        &.list {
            display: flex;
            flex-flow: column nowrap;
            justify-content: flex-start;
            align-items: center;

            .item {
                flex: 0 0 auto;
                margin: 10px;
                height: 150px;
                width: 100%;

                background: $dark41;
            }

            .hidden {
                width: 0;
                height: 0px;
                margin: 0;
            }
        }
    }
}
</style>