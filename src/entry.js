// Import vue component
import component from '@/vue-simple-scroll-trigger.vue';
import directive from '@/directive.js';

// install function executed by Vue.use()
const install = function installVueSimpleScrollTrigger(Vue) {
  if (install.installed) return
  install.installed = true
  Vue.component('v-simple-scroll-trigger', component)
  Vue.directive('simple-scroll-trigger', directive)
};

// Create module definition for Vue.use()
const plugin = {
  install,
};

// To auto-install on non-es builds, when vue is found
// eslint-disable-next-line no-redeclare
/* global window, global */
if ('false' === process.env.ES_BUILD) {
  let GlobalVue = null;
  if (typeof window !== 'undefined') {
    GlobalVue = window.Vue;
  } else if (typeof global !== 'undefined') {
    GlobalVue = global.Vue;
  }
  if (GlobalVue) {
    GlobalVue.use(plugin);
  }
}

// Inject install function into component - allows component
// to be registered via Vue.use() as well as Vue.component()
component.install = install;

// Export component by default
export default component;

// It's possible to expose named exports when writing components that can
// also be used as directives, etc. - eg. import { RollupDemoDirective } from 'rollup-demo';
// export const RollupDemoDirective = component;
export const SimpleScrollTriggerDirective = directive;
