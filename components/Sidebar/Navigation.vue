<template>
  <div class="menu-module">
    <span class="label">NAVIGATION</span>
    <ul>
      <li :class="{'active': page === 'dashboard'}">
        <nuxt-link to="/dashboard">Dashboard</nuxt-link>
      </li>
      <li :class="{'active': page === 'notes'}">
        <nuxt-link to="/notes">Notes</nuxt-link>
      </li>
      <li :class="{'active': page === 'checklist'}">
        <nuxt-link to="/checklist">Checklist</nuxt-link>
      </li>
      <li :class="{'active': page === 'pwmanager'}">
        <nuxt-link to="/pwmanager">Password Manager</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: ["page"]
});
</script>

<style lang="scss">
</style>