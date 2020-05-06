<template>
  <div class="app">
    <div class="app-left">
      <Sidebar :page="$route.name" />
    </div>

    <div class="app-right">
      <Header />
      <ContentPWManager />
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import Header from "~/components/Header";
import Sidebar from "~/components/Sidebar";

import ContentPWManager from "~/pages/content/pwmanager";

export default Vue.extend({
  components: {
    Header,
    Sidebar,
    ContentPWManager
  }
});
</script>

<style lang="scss">
</style>