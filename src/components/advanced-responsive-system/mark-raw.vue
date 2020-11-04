<template>
    bar count :{{bar.nested.count}}

    foo count: {{foo.nested.count}}

    age: {{reactiveAge.num}}
    <button @click="addCount">add</button>
    <button @click="addAge">add Age</button>
</template>

<script lang="ts">
    import { markRaw, reactive, shallowReactive } from 'vue';
    export default {
        setup() {
            const foo = markRaw({
                nested: {
                    count: 1
                }
            })
            const age = markRaw({
                result: {
                    num: 0
                }
            })
            // 直接整个赋值会被冻结
            const bar = reactive(foo);
            // 对象的话不会被冻结
            const reactiveAge = reactive(age.result);

            bar.nested.count++
            const addCount = function () {
                bar.nested.count++
            }

            const addAge = function () {
                reactiveAge.num++
            }

            return {
                bar,
                foo,
                addCount,
                addAge,
                reactiveAge
            }
        }
    }
</script>

<style scoped>

</style>