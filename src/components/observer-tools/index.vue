<template>
<!--    <unref-test></unref-test>-->
<app-to-refs></app-to-refs>
</template>

<script>
    // import UnrefTest from './unref-test.vue';
    import toRefs from './toRefs.vue';
    export default {
        components: {
            // UnrefTest

            appToRefs: toRefs
        }
    }
</script>

<style scoped>

</style>