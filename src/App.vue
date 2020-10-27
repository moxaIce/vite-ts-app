<template>
<!--  <watch-effect-computed-test></watch-effect-computed-test>-->
<!--  <watch-test></watch-test>-->
<!--  <life-cycle-parent></life-cycle-parent>-->
  <inject-and-provide></inject-and-provide>
</template>

<script lang="ts">
import WatchEffectComputedTest from "./components/watchEffect-computed-test.vue";
import WatchTest from "./components/watch.vue";
import LifeCycleParent from './components/life-cycle/parent.vue';
import injectAndProvide from './components/inject-and-provide/provide.vue';
export default {
  components: {
    WatchEffectComputedTest,
    WatchTest,
    LifeCycleParent,
    injectAndProvide

  }
};
</script>

<style scoped>
</style>