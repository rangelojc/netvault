<template>
    <div class="login">
        <div class="login-title">NETVAULT</div>

        <div class="login-error-msg">{{ error }}</div>

        <form class="login-form">
            <label for>Username:</label>
            <input ref="username" class="login-txt" type="text" placeholder maxlength="32" />

            <div class="separator"></div>

            <label for>Password:</label>
            <input ref="password" class="login-txt" type="password" placeholder maxlength="32" />

            <input class="submit-login" type="submit" value="Login" @click="login" />
        </form>
    </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";

export default Vue.extend({
    data() {
        return {
            error: ""
        };
    },
    methods: {
        async login(evt) {
            evt.preventDefault();

            const params = {
                username: this.$refs.username.value,
                password: this.$refs.password.value
            };

            const res = await axios.post("/api/auth/login", params);
            const data = res.data;

            if (data.data.found) {
                localStorage["NETVAULT_USERID"] = data.data.user.userId;
                localStorage["NETVAULT_USERNAME"] = data.data.user.username;
                this.$router.push("/dashboard");
            } else this.error = "User not found.";

            this.clear();
        },
        clear() {
            this.$refs.username.focus();
            this.$refs.username.value = "";
            this.$refs.password.value = "";
        }
    },
    mounted() {
        console.log(this.$route.query);
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

    &-error-msg {
        margin-top: 20px;
        color: $accent1;
        height: 1em;
    }
}

.login-form {
    position: relative;
    margin-top: 50px;
    width: 50%;
    min-width: 320px;
    max-width: 400px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    align-content: center;

    label {
        width: 100%;
    }

    .separator {
        margin: 10px 0;
    }

    .login-txt {
        border: none;
        border-bottom: 1px solid #777;
        background: transparent;
        height: 40px;
        width: 100%;
        outline: none;
        text-align: center;
        color: #ccc;
    }

    .error {
        position: absolute;
        bottom: -40px;
        color: #b61212;
    }

    .submit-login {
        border: none;
        border-radius: 50px;
        height: 40px;
        width: 100%;
        margin-top: 30px;
        cursor: pointer;
        outline: none;
        background: $accent1;
        color: #ccc;
    }
}
</style>