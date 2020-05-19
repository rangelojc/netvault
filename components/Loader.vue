<template>
    <div class="loader" v-show="show">
        <svg
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            width="44px"
            height="60px"
            viewBox="0 0 24 30"
            style="enable-background:new 0 0 50 50;"
            xml:space="preserve"
        >
            <rect x="0" y="10" width="4" height="10" fill="#b33941" opacity="0.2">
                <animate
                    attributeName="opacity"
                    attributeType="XML"
                    values="0.2; 1; .2"
                    begin="0s"
                    dur="0.6s"
                    repeatCount="indefinite"
                />
                <animate
                    attributeName="height"
                    attributeType="XML"
                    values="10; 20; 10"
                    begin="0s"
                    dur="0.6s"
                    repeatCount="indefinite"
                />
                <animate
                    attributeName="y"
                    attributeType="XML"
                    values="10; 5; 10"
                    begin="0s"
                    dur="0.6s"
                    repeatCount="indefinite"
                />
            </rect>
            <rect x="8" y="10" width="4" height="10" fill="#b33941" opacity="0.2">
                <animate
                    attributeName="opacity"
                    attributeType="XML"
                    values="0.2; 1; .2"
                    begin="0.15s"
                    dur="0.6s"
                    repeatCount="indefinite"
                />
                <animate
                    attributeName="height"
                    attributeType="XML"
                    values="10; 20; 10"
                    begin="0.15s"
                    dur="0.6s"
                    repeatCount="indefinite"
                />
                <animate
                    attributeName="y"
                    attributeType="XML"
                    values="10; 5; 10"
                    begin="0.15s"
                    dur="0.6s"
                    repeatCount="indefinite"
                />
            </rect>
            <rect x="16" y="10" width="4" height="10" fill="#b33941" opacity="0.2">
                <animate
                    attributeName="opacity"
                    attributeType="XML"
                    values="0.2; 1; .2"
                    begin="0.3s"
                    dur="0.6s"
                    repeatCount="indefinite"
                />
                <animate
                    attributeName="height"
                    attributeType="XML"
                    values="10; 20; 10"
                    begin="0.3s"
                    dur="0.6s"
                    repeatCount="indefinite"
                />
                <animate
                    attributeName="y"
                    attributeType="XML"
                    values="10; 5; 10"
                    begin="0.3s"
                    dur="0.6s"
                    repeatCount="indefinite"
                />
            </rect>
        </svg>
    </div>
</template>

<script>
export default {
    props: ["show"]
};
</script>

<style lang="scss" scoped>
.loader {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-end;
    align-items: flex-end;

    background: rgba(#000, 0);

    svg {
        margin: 0 20px 10px 0;
    }
}
</style>