<template>
    <div>inject:{{theme}}</div>
</template>

<script lang="ts">
    import { inject, ref, watchEffect } from 'vue';
    import { ThemeSymbol, TTheme } from './proxy';

    export default {
        setup() {
            const theme = inject(ThemeSymbol, ref<TTheme>('light'))

            watchEffect(() => {
                console.log(`theme set to: ${theme.value}`)
            })

            // 并不会改变
            window.setTimeout(() => {
                theme.value = 'dark'
            }, 3000)

            return {
                theme
            }
        }
    }
</script>

<style scoped>

</style>