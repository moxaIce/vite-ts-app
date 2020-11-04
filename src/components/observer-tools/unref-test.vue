<template>
    <div>{{count}}</div>
    <button @click="add">增加</button>
    <div>{{info.name}}:{{info.age}}</div>
    <button @click="addAge">增加1岁  {{age}}</button>
    <div>computed: {{computedAge}}</div>
</template>

<script>
    import {
        unref,
        ref,
        onMounted,
        watchEffect,
        toRef,
        reactive,
        watch,
        computed
    } from 'vue';

    export default {
        setup(props) {
            const count = ref(0)
            let countVal = unref(count); // 返回一个ref，但无法被watch, computed监听, 在count值更新時會跟著改變
            const info = reactive({
                name: '小明',
                age: 20
            })

            const age = toRef(info, 'age'); // watch 可以监听

            watch(count, (newVal) => {
                console.log('---------------------watch count result is', newVal);
            })

            // watch(countVal, (newVal) => {
            //     console.log(newVal)
            // })

            const computedAge = computed(() => {
                return countVal++
            })
            watchEffect(() => {
                console.log(count.value);
                console.log(`countVal is`, countVal);
            })

            watch(age, (age, oldAge) => {
                console.log('----------- age is', oldAge)
            })

            const add = () => {
                count.value++;
                countVal++
            }

            const addAge = () => {
                age.value++
            }

            return {
                count,
                add,
                addAge,
                info,
                age,
                computedAge
            }
        }
    }
</script>

<style>

</style>