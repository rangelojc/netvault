<template>
    <div class="category-menu" v-show="show">
        <ul>
            <li>RENAME CATEGORY</li>
            <li>DELETE CATEGORY</li>
        </ul>
    </div>
</template>

<script>
export default {
    props: ["category"],
    computed: {
        show() {
            return this.$props.category.showMenu;
        }
    },
    methods: {}
};
</script>

<style lang="scss" scoped>
@import "~/assets/scss/vars.scss";

@keyframes down {
    from {
        top: 20px;
        opacity: 0;
    }

    to {
        top: 30px;
        opacity: 1;
    }
}

.category-menu {
    position: absolute;
    top: 30px;
    z-index: 1;

    min-width: 250px;
    width: auto;
    height: auto;

    animation: down 300ms ease;

    ul {
        height: 100%;
        width: 100%;
        background: $dark52;
        padding: 10px 0;
        border-radius: 3px;

        li {
            padding: 0px 10px;
            height: 40px;
            line-height: 40px;
            letter-spacing: 1px;
            background: $dark52;
            list-style: none;
            user-select: none;
            cursor: pointer;

            &:hover {
                background: $dark62;
            }
        }
    }
}
</style>