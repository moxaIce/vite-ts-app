<template>
    <div>
        <inject-component></inject-component>
        provide: {{theme}}
    </div>
</template>


<script lang="ts">
    import {provide, ref} from 'vue';
    import injectComponent from "./inject.vue";
    import { ThemeSymbol, TTheme } from './proxy';

    export default {
        components: {
            injectComponent
        },
        setup() {
            const theme = ref<TTheme>('dark')
            provide(ThemeSymbol, theme)
            window.setTimeout(() => {
                theme.value = 'light'
            })
            return {
                theme
            }
        }
    }
</script>

<style scoped>

</style>