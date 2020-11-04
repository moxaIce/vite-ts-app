<template>
    x坐标：{{x}}
    y坐标: {{y}}
    位置： {{position}}
</template>

<script>
    import {reactive, toRefs, isRef, isProxy} from 'vue';

    const usePosition = () => {
        const state = reactive({
            x: 0,
            y: 0,
            position: {
                x: 0,
                y: 0
            }
        })

        document.addEventListener('mousemove', (event) => {
            state.x = event.pageX;
            state.y = event.pageY

            state.position = {
                x: state.x,
                y: state.y
            }
        })

        return toRefs(state)
    }
    export default {
        setup() {
            const state = reactive({
                foo: 1,
                bar: 2
            })

            const {x, y, position} = usePosition();

            console.log(`isRefs is`,isRef(state), isRef(x), isRef(position))
            console.log(`proxy is`,isProxy(state), isProxy(x))

            // 將reactive　的結果轉為
            const stateAsRefs = toRefs(state)

            console.log(`stateAsRefs`, stateAsRefs);

            console.log(state.foo++)

            console.log(stateAsRefs.foo.value)

            return {
                state,
                x,
                y,
                position
            }
        }
    }
</script>

<style scoped>

</style>