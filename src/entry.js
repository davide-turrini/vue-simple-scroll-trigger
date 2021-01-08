// Import vue component
import component from '@/vue-simple-scroll-trigger.vue';
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

// install function executed by Vue.use()
const install = function installVueSimpleScrollTrigger(Vue) {
  if (install.installed) return;
  install.installed = true;

  Vue.component('VueSimpleScrollTrigger', component);

  Vue.directive('scroll-trigger', {
    inserted: function (el, binding, vnode) {
      ScrollTrigger.create({
        trigger: (binding.value.trigger !== undefined) ? binding.value.trigger : el,
        endTrigger: binding.value.endTrigger,
        // markers: true,
        start: (binding.value.start !== undefined) ? binding.value.start : 'top 90%',
        end: (binding.value.end !== undefined) ? binding.value.end : 'top 20%',
        toggleClass: binding.value.toggleClass,
        onToggle: ({ isActive }) => {
          if (isActive && binding.value.onEnter !== undefined && typeof binding.value.onEnter === 'function') {
            binding.value.onEnter()
          }
          if (!isActive && binding.value.onLeave !== undefined && typeof binding.value.onLeave === 'function') {
            binding.value.onLeave()
          }
        }
      })
    }
  })

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
