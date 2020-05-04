pa<template>
  <div class="app">
    <div class="app-left">
      <Sidebar :page="$route.name" />
    </div>

    <div class="app-right">
      <Header />
      <PageContent :page="$route.name" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Header from "~/components/Header";
import Sidebar from "~/components/Sidebar";
import PageContent from "~/components/PageContent";

export default Vue.extend({
  components: {
    Header,
    Sidebar,
    PageContent
  }
});
</script>

<style lang="scss">
.app {
  display: flex;
  min-height: 100vh;
  width: 100%;

  $r-width: 300px;

  &-right {
    height: auto;
    width: calc(100% - #{$r-width});
  }

  &-left {
    height: auto;
    width: $r-width;
  }
}
</style>