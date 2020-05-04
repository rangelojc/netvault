<template>
  <div class="app">
    <Header />
    <Sidebar />
  </div>
</template>

<script lang="ts">
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

<style lang="scss">
body {
  padding: 0;
  margin: 0;
}

.app {
}
</style>