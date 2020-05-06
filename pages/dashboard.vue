<template>
  <div class="app">
    <div class="app-left">
      <Sidebar :page="$route.name" />
    </div>

    <div class="app-right">
      <Header />
      <ContentIndex />
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import Header from "~/components/Header";
import Sidebar from "~/components/Sidebar";
import ContentIndex from "~/pages/content/dashboard";

export default Vue.extend({
  components: {
    Header,
    Sidebar,
    ContentIndex
  }
});
</script>

<style lang="scss">
</style>