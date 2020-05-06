<template></template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  methods: {
    checkLogin() {
      //if user is unauthenticated
      this.$router.push("login");
    }
  },
  mounted() {
    this.checkLogin();
  }
});
</script>

<style lang="scss">
</style>