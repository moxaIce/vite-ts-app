<template>
<div>child ren</div>
</template>

<script lang="ts">
import {
  onMounted,
  onUpdated,
  onUnmounted,
  onBeforeMount,
  onBeforeUpdate,
  onBeforeUnmount,
  onRenderTracked,
  onRenderTriggered,
} from "vue";
export default {
  setup() {
    onBeforeMount(() => {
      console.log(`child before Mounted`);
    });

    onMounted(() => {
      console.log(`child mounted`);
    });

    onBeforeUpdate(() => {
      console.log(`child before Update`);
    });

    onUpdated(() => {
      console.log(`child updated`);
    });

    onBeforeUnmount(() => {
      console.log(`child before Unmount`);
    });

    onUnmounted(() => {
      console.log(`child onUnmounted`);
    });

    onRenderTracked(() => {
      debugger;
    });

    onRenderTriggered(() => {
      debugger;
    });

    return {};
  },
};
</script>

<style>
</style>
