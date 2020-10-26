<template>
  <watch-effect-computed-test></watch-effect-computed-test>
  <watch-test></watch-test>
  <life-cycle-parent></life-cycle-parent>
</template>

<script lang="ts">
import WatchEffectComputedTest from "./components/watchEffect-computed-test.vue";
import WatchTest from "./components/watch.vue";
import LifeCycleParent from './components/life-cycle/parent.vue';
export default {
  components: {
    WatchEffectComputedTest,
    WatchTest,
    LifeCycleParent
  },
};
</script>

<style scoped>
</style>