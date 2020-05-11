<template>
    <div class="login">
        <div class="login-title">NETVAULT</div>

        <div class="login-msg">
            <p>You have been logged out.</p>
            <p>
                Redirecting to
                <span class="link">
                    <nuxt-link to="/login">login</nuxt-link>
                </span>
                in
                <span class="sec">{{seconds}}</span>
                seconds.
            </p>
        </div>
    </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";

export default Vue.extend({
    data() {
        return {
            seconds: 5
        };
    },
    mounted() {
        localStorage.removeItem("NETVAULT_USERID");
        localStorage.removeItem("NETVAULT_USERNAME");
        setInterval(() => {
            this.seconds -= 1;
            if (this.seconds === 0) this.$router.push("/login");
        }, 1000);
    }
});
</script>

<style lang="scss">
@import "~/assets/scss/vars.scss";

.login {
    height: 100vh;
    width: 100%;
    flex: 0 0 auto;
    position: absolute;
    top: 0;
    z-index: 9999;
    background: $dark31;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    align-content: center;

    &-title {
        font-size: 40px;
        letter-spacing: 3px;
    }

    &-msg {
        margin-top: 30px;

        p {
            text-align: center;
            margin-bottom: 5px;
        }

        .link a {
            color: $accent1;
            text-decoration: underline;
        }

        .sec {
            font-weight: bold;
        }
    }
}
</style>