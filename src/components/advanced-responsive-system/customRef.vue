<template>
    <input type="text" v-model="text"/>
    {{text}}
</template>

<script lang="ts">
    import { customRef } from 'vue';

    function useDebouncedRef(value: string, delay = 2000) {
        let timeout: NodeJS.Timeout;

        return customRef((track, trigger) => {
            return {
                get() {
                    track() // 收集
                    return value;
                },
                set(newVal: string){
                    clearTimeout(timeout);

                    timeout = setTimeout(() => {
                        value = newVal;

                        trigger()
                    }, delay)
                }
            }
        })
    }
    export default {
        setup() {
            return {
                text: useDebouncedRef('hello')
            }
        }
    }
</script>

<style scoped>

</style>