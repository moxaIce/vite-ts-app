<template>
  <button @click="handleButton">click-button {{ count }}</button>
</template>

<script>
import { watchEffect, ref, computed, reactive } from "vue";
export default {
  name: "App",
  components: {},
  setup() {
    const count = ref(0);
    const num = ref(0);
    const obj = reactive({
      a: 1,
    });
    // 监听了count与num的变化
    let stop = watchEffect(
      (onInvalidate) => {
        console.log(`count.value`, count.value);
        console.log(`num is`, num.value);
        console.log("obj is", obj);

        onInvalidate(() => {
          // 这里可以对之前异步的事WatchEffect里面异步的一些事.
        });
      },
      {
        flush: "pre",
      },
      {
        onTrack(e) {
          debugger;
        },
        onTrigger(e) {
          debugger;
        },
      }
    );
    // 定义了一个computed
    const plusOne = computed(() => {
      return count.value + 1;
    });
    console.log(`plusOne is`, plusOne.value);
    // 对a +1
    obj.a++;

    setTimeout(() => {
      count.value++;
    }, 2000);

    setTimeout(() => {
      obj.a++;
    }, 3000);

    setTimeout(() => {
      num.value++;
      stop();
    }, 4000);

    const handleButton = () => {
      // stop只是阻止了watch的更新，但不阻止值的改变。
      console.log("num.value is", num.value);
    };
    return {
      handleButton,
      count,
      num,
      obj,
    };
  },
};
</script>
