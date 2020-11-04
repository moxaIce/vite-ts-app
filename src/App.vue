<template>
<!--  <watch-effect-computed-test></watch-effect-computed-test>-->
<!--  <watch-test></watch-test>-->
<!--  <life-cycle-parent></life-cycle-parent>-->
<!--  <inject-and-provide></inject-and-provide>-->
<!--  <ref-fetch></ref-fetch>-->
<!--  <unref-test></unref-test>-->
  <advanced-responsive-system></advanced-responsive-system>
</template>

<script lang="ts">
import WatchEffectComputedTest from "./components/watchEffect-computed-test.vue";
import WatchTest from "./components/watch.vue";
import LifeCycleParent from './components/life-cycle/parent.vue';
import injectAndProvide from './components/inject-and-provide/provide.vue';
import RefFetch from './components/ref-fetch/index.vue';
import UnrefTest from './components/observer-tools/index.vue';
import AdvancedResponsiveSystem from './components/advanced-responsive-system/index.vue';
export default {
  components: {
    WatchEffectComputedTest,
    WatchTest,
    LifeCycleParent,
    injectAndProvide,
    RefFetch,
    UnrefTest,
    AdvancedResponsiveSystem
  }
};
</script>

<style scoped>
</style>