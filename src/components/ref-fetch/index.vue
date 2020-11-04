<template>
    <div ref="el"></div>
    <button @click="handleClick">操作DOM</button>
</template>

<script>
    import { ref, onMounted } from 'vue';
    export default {
        setup() {
            const el = ref(null)

            onMounted(() => {
                console.log(el.value)
            })

            const handleClick =  () => {
                const dom = el.value;

                dom.innerHTML = '哈哈测试一下 ref 取DOM '
            }

            return {
                el,
                handleClick
            }
        }
    }
</script>

<style scoped>

</style>