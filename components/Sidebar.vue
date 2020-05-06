<template>
  <div class="sidebar">
    <div class="title">
      <span>NETVAULT</span>
    </div>

    <nav class="menu">
      <Navigation :page="page" />
      <Bookmarks />
      <Settings />
    </nav>
  </div>
</template>

<script>
import Vue from "vue";
import Navigation from "~/components/Sidebar/Navigation";
import Bookmarks from "~/components/Sidebar/Bookmarks";
import Settings from "~/components/Sidebar/Settings";

export default Vue.extend({
  props: ["page"],
  components: {
    Navigation,
    Bookmarks,
    Settings
  }
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

  &-module {
    margin: 10px 0;
    width: 100%;
    height: auto;
  }

  .label {
    display: block;
    letter-spacing: 3px;
    font-size: 12px;
    margin-bottom: 5px;
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
    cursor: pointer;

    &:hover {
      color: $active;
    }

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
