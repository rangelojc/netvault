<template>
    <div>Hello</div>
</template>


<script>
export default {
    data() {
        return {
            recordId: 0
        };
    },
    mounted() {
        this.data.recordId = this.$route.params.recordId;
    }
};
</script>


<style lang="scss" scoped>
</style>