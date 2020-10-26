<template></template>

<script lang="ts">
import LifeCycleChild from "./child.vue";
import {
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
  onErrorCaptured,
  onRenderTracked,
  onRenderTriggered,
} from "vue";
export default {
  components: {
    LifeCycleChild,
  },

  mounted() {
    console.log(`arguments `, arguments);
  },

  setup() {
    onBeforeMount(() => {
      console.log(`parent before Mounted`);
    });

    onMounted(() => {
      console.log(`parent mounted`);
    });

    onBeforeUpdate(() => {
      console.log(`parent before Update`);
    });

    onUpdated(() => {
      console.log(`parent updated`);
    });

    onBeforeUnmount(() => {
      console.log(`parent before Unmount`);
    });

    onUnmounted(() => {
      console.log(`parent onUnmounted`);
    });

    onRenderTracked(() => {
      debugger;
    });

    onRenderTriggered(() => {
      debugger;
    });

    return {
        
    }
  },
};
</script>