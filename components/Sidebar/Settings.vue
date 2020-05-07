<template>
    <div class="menu-module settings">
        <span class="label">SETTINGS</span>
        <ul>
            <li :class="{'active': page === 'profile'}">Profile</li>
            <li :class="{'active': page === 'preferences'}">Preferences</li>
            <li class="red logout">
                <a href="/api/auth/logout">Log out</a>
            </li>
        </ul>
    </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({});
</script>

<style lang="scss">
.menu-module.settings {
    margin-top: auto !important;

    li.logout {
        text-decoration: none;
    }
}
</style>