<template>
  <div class="app">
    <div class="app-left">
      <Sidebar :page="$route.name" />
    </div>

    <div class="app-right">
      <Header />
      <ContentChecklist />
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import Header from "~/components/Header";
import Sidebar from "~/components/Sidebar";

import ContentChecklist from "~/pages/content/checklist";

export default Vue.extend({
  components: {
    Header,
    Sidebar,
    ContentChecklist
  }
});
</script>

<style lang="scss">
</style>