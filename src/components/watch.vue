<template>
    <button @click="handleClick">
        watch - click {{state.count}}
    </button>
    <button @click="handleClickNumber">
        watch - click -number {{number}}
    </button>
</template>

<script lang="ts">
import { reactive, ref, watch, watchEffect } from 'vue'
export default {
    
    setup() {
        const state = reactive({count: 0})
        const number = ref<number>(0)

        watch(
            () => state.count,
            (count, prevCount) => {
                console.log(`count, `, count, prevCount)
            }
        )

        watch(
            number,
            (newVal, oldVal) => {
                console.log(`newVal is`, newVal, oldVal)
            }
        )

        watch(
            [number, () => state.count],
            ([number, count], [prevNumber, prevCount]) => {
                console.log('監聽多個 ', 
                'number', number, 
                'count', count, 
                'prevNumber', prevNumber,
                'prevCount', prevCount)
            }
        )

        watchEffect(() =>{
            console.log(state.count++)
        })
        
        const data = {
            state,
            number
        }
        return {
            ...data,
            handleClick () {
                state.count++
            },
            handleClickNumber(){
                number.value++
            }
        }
    }
}
</script>

<style scoped>

</style>