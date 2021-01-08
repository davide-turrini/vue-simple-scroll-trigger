<script>
import Vue from 'vue';
import VueSimpleScrollTrigger from '@/vue-simple-scroll-trigger.vue';

export default Vue.extend({
  name: 'ServeDev',
  components: {
    VueSimpleScrollTrigger
  }
});
</script>

<template>
  <div id="app">
    <vue-simple-scroll-trigger />
  </div>
</template>
