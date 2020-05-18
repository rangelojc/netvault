<template>
    <div class="app">
        <div class="app-left">
            <Sidebar :path="$route.path" :page="$route.name.split('-')[0]" />
        </div>

        <div class="app-right">
            <!-- <Header /> -->
            <nuxt />
        </div>
    </div>
</template>

<script>
import Vue from "vue";
import Header from "~/components/Header";
import Sidebar from "~/components/Sidebar";

export default Vue.extend({
    components: {
        Header,
        Sidebar
    }
});
</script>

<style lang="scss" scoped>
@import "~/assets/scss/vars.scss";

.app {
    display: flex;
    height: 100vh;
    width: 100%;

    $r-width: 300px;

    &-right {
        // height: calc(100% - #{$header-height});
        height: 100%;
        width: calc(100% - #{$r-width});
        background-color: $dark21;
    }

    &-left {
        height: auto;
        width: $r-width;
    }

    &-content {
        width: 100%;
        height: 100%;
        position: relative;
        margin: 0;
        padding: 0;
        overflow: hidden;

        background-color: $dark21;
    }
}
</style>