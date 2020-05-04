<template>
  <div class="sidebar">
    <div class="title">
      <span>NETVAULT</span>
    </div>

    <nav class="menu">
      <span class="label">NAVIGATION</span>
      <ul>
        <li :class="{'active': page === 'index'}">
          <nuxt-link to="/">Home</nuxt-link>
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

      <span class="spacer"></span>
      <span class="label">BOOKMARKS</span>
      <ul>
        <li>Bookmark 1</li>
        <li>Bookmark 2</li>
        <li>Bookmark 3</li>
        <li>Bookmark 4</li>
        <li>Bookmark 5</li>
        <li class="more">
          <a href="#">More...</a>
        </li>
      </ul>

      <span class="label settings">SETTINGS</span>
      <ul>
        <li :class="{'active': page === 'profile'}">Profile</li>
        <li :class="{'active': page === 'preferences'}">Preferences</li>
        <li class="red">Log out</li>
      </ul>
    </nav>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: ["page"]
});
</script>

<style lang="scss">
@import "~/assets/scss/vars.scss";

.sidebar {
  height: 100%;
  width: 300px;

  background-color: $dark11;
}

.title {
  height: $header-height;
  width: 100%;

  span {
    display: inline-block;
    text-align: center;
    width: 100%;
    height: 100%;
    line-height: $header-height;

    letter-spacing: 2px;
    color: #f1f1f1;
    font-weight: 200;
    font-size: 20px;
    height: 100%;
  }
}

.menu {
  width: 100%;
  padding: 30px 30px;
  position: relative;

  height: calc(100% - #{$header-height});

  $item-height: 25px;

  display: flex;
  flex-flow: column nowrap;

  .label {
    display: block;
    letter-spacing: 3px;
    font-size: 12px;
    margin-bottom: 5px;

    &.settings {
      margin-top: auto;
    }
  }

  .spacer {
    display: block;
    margin: 10px 0;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    line-height: $item-height;
    height: $item-height;
    color: $inactive;
    font-weight: 500;
    margin-bottom: 5px;

    &.active {
      color: $active;

      &::before {
        content: "";
        height: $item-height;
        width: 5px;
        background: $accent1;
        position: absolute;
        left: 0;
      }
    }

    &.red {
      color: $accent1;
    }

    &.more {
      a {
        font-weight: normal;
        color: inherit;
        text-decoration: none;
      }
    }

    a {
      font-weight: inherit;
      color: inherit;
      text-decoration: none;
    }
  }
}
</style>
