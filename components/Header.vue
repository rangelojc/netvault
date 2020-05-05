<template>
  <div class="header">
    <div class="profile">
      <span class="username">user@mail.com</span>
    </div>
  </div>
</template>

<style lang="scss">
@import "~/assets/scss/vars.scss";

.header {
  height: $header-height;
  width: 100%;

  background-color: $dark21;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;

  padding: 0 20px;

  .profile {
    .username {
      font-weight: 600;
    }
  }
}
</style>
