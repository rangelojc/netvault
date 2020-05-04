<template>
  <div class="page-content"></div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: ["page"]
});
</script>

<style lang="scss">
@import "~/assets/scss/vars.scss";

.page-content {
  width: 100%;
  min-height: calc(100% - #{$header-height});

  background-color: $dark31;
}
</style>
