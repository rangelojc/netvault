<template>
  <div class="app">
    <div class="app-left">
      <Sidebar :page="$route.name" />
    </div>

    <div class="app-right">
      <Header />
      <ContentNotes />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Header from "~/components/Header";
import Sidebar from "~/components/Sidebar";

import ContentNotes from "~/pages/content/notes";

export default Vue.extend({
  components: {
    Header,
    Sidebar,
    ContentNotes
  }
});
</script>

<style lang="scss">
</style>